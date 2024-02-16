import { exec } from "node:child_process";

import { rds, ws } from "./../node";

import { parse } from "./core";

const exe = (cmd: string) =>
  new Promise<string>((resolve, reject) =>
    exec(cmd, (error, stdout, stderr) => (error ? reject(error) : stderr ? reject(stderr) : resolve(stdout)))
  );

const folders = (() => {
  const result: string[] = [];
  for (const dirent of rds("dist")) if (dirent.isDirectory() && dirent.name.startsWith("@")) result.push(dirent.name);
  return result;
})();

for await (const folder of folders) {
  const files = (() => {
    const result: string[] = [];
    for (const dirent of rds(`dist/${folder}`)) if (dirent.isFile() && dirent.name.endsWith(".js")) result.push(dirent.name);
    return result;
  })();

  if (files.length) {
    for await (const file of files) {
      const data = parse(JSON.parse(await exe(`node ./dist/${folder}/${file}`)));
      ws(`./dist/${folder}/${file}.json`, JSON.stringify(data, null, 2));
    }
  }
}
