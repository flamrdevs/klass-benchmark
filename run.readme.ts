import fs, { constants } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import prettier from "prettier";

import { entries, dist } from "./utils";

import type { JSONResult } from "./src/@";

const table = (headers: string[], rows: string[][]): string => {
  return [
    `| ${headers.join(" | ")} |`,
    `|${headers
      .slice(0, headers.length - 1)
      .map(() => " --- ")
      .concat([" --: "])
      .join("|")}|`,
    ...rows.map((row) => `| ${row.join(" | ")} |`),
  ].join("\n");
};

const target = path.resolve(process.cwd(), "README.md");

const replace = async (name: string, value: () => string) => {
  const content = await fs.readFile(target, "utf-8");

  const splitter = `<!-- ${name} -->`;
  const splitted = content.split(splitter);
  if (splitted.length === 3) {
    await fs.writeFile(
      target,
      await prettier.format([splitted[0], splitter, value(), splitter, splitted[2]].join("\n"), { parser: "markdown" })
    );
  } else {
    throw new Error("Name not found");
  }
};

const start = async () => {
  await fs.access(target, constants.R_OK | constants.W_OK);

  await replace("/information/", () => {
    return [
      `OS \`${os.arch()} | ${os.platform()} | ${Array.from(new Set(os.cpus().map(({ model }) => model))).join(",")} | ${
        (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + "GB"
      }\``,
      `Node.js \`${process.version}\``,
      `Testing on \`${new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeZone: "Asia/Jakarta" }).format(new Date())}\``,
    ].join("\n\n");
  });

  const sortFn = <T extends [string, number]>(a: T, b: T) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0);
  const mapFn = <T extends [string, number]>([key, value]: T, index: number) => [index + 1, key, value].map(String);

  for await (const [key] of entries) {
    const target = dist(`${key}.json`);
    await fs.access(target, constants.R_OK | constants.W_OK);

    const record = JSON.parse(await fs.readFile(target, "utf8")) as JSONResult;

    await replace(key, () => table(["No", "Libs", "Ops/Sec"], [...Object.entries(record).sort(sortFn)].map(mapFn)));
  }

  console.log("Ok");
};

start();
