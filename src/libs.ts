import fs from "node:fs/promises";
import path from "node:path";
import prettier from "prettier";

import { Bench } from "tinybench";
import * as vest from "vest";

const getVestErrorMessage = (name: string, result: vest.SuiteRunResult) => {
  const messages: string[] = [`${name} \n`];
  Object.entries(result.getErrors()).forEach(([key, value]) => {
    if (value.length > 0) messages.push(`${key}:${value}`);
  });
  return messages.join("\n");
};

const table = (headers: string[], rows: string[][]): string => {
  return [`| ${headers.join(" | ")} |`, `|${headers.map(() => " --- ").join("|")}|`, ...rows.map((row) => `| ${row.join(" | ")} |`)].join(
    "\n"
  );
};

const write = async (name: string, bench: Bench) => {
  const readme = path.resolve(process.cwd(), "README.md");
  const content = await fs.readFile(readme, "utf-8");

  const splitter = `<!-- @.${name} -->`;
  const splitted = content.split(splitter);
  if (splitted.length === 3) {
    await bench.run();
    type Row = {
      "Task Name": string;
      "ops/sec": string;
      "Average Time (ns)": number;
      Margin: string;
      Samples: number;
    };
    const key = "Average Time (ns)";
    const array = bench.table().filter(Boolean) as Row[];
    array.sort((a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0));

    const result = table(
      ["Rank", "Library", "Operations/Second"],
      array.map((item, index) => [`${index + 1}`, item["Task Name"], item["ops/sec"]])
    );

    const joined = [splitted[0], splitter, result, splitter, splitted[2]].join("\n");
    await fs.writeFile(readme, await prettier.format(joined, { parser: "markdown" }));

    console.log(`[SUCCESS]: ${name}`);
  } else {
    console.log(`[ERROR]: ${name}`);
  }
};

export { Bench, vest };
export { getVestErrorMessage, write };
