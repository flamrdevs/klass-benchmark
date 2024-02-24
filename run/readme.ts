import { format } from "prettier";

import { rds, rfs, ws, isFolder, isFile } from "./../utils";

import { parse } from "./core";

type Item = { lib: string; ops: number };

const write = async (folder: string, items: Item[]) => {
  items.sort((a, b) => {
    if (a.ops > b.ops) return -1;
    if (a.ops < b.ops) return 1;
    return 0;
  });

  const oldReadme = rfs("README.md");

  const s = `<!-- [${folder}] -->`;

  const [s1, , s3] = oldReadme.split(s);

  const table: string[] = ["\n", "|No|Libs|Ops/Sec|", "|:--|:--|--:|"];

  items.forEach((item, i) => {
    table.push(`|${i + 1}|${item.lib}|${item.ops}|`);
  });

  table.push("\n");

  const newReadme = [s1, table.join("\n"), s3].join(s);

  ws("README.md", await format(newReadme, { parser: "markdown" }));
};

const folders = (() => {
  const result: string[] = [];
  for (const dirent of rds("dist")) if (isFolder(dirent)) result.push(dirent.name);
  return result;
})();

for await (const folder of folders) {
  const files = (() => {
    const result: string[] = [];
    for (const dirent of rds(`dist/${folder}`)) if (isFile(dirent, ".json")) result.push(dirent.name);
    return result;
  })();

  if (files.length) {
    const items: Item[] = [];
    for (const file of files) {
      const data = parse(JSON.parse(rfs(`./dist/${folder}/${file}`)));
      let lib = data.name;
      if (data.merge) lib += " 🔹";
      if (!data.relevant) lib += " 🔸";
      items.push({ lib, ops: data.ops });
    }
    await write(folder, items);
  }
}
