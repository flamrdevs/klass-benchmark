import { exec } from "node:child_process";

import { rds, ws, isFolder, isFile } from "./../utils";

import { parse } from "./core";

const exe = (cmd: string) =>
  new Promise<string>((resolve, reject) =>
    exec(cmd, (error, stdout, stderr) => (error ? reject(error) : stderr ? reject(stderr) : resolve(stdout)))
  );

const folders = (() => {
  const result: string[] = [];
  for (const dirent of rds("dist")) if (isFolder(dirent)) result.push(dirent.name);
  return result;
})();

for await (const folder of folders) {
  const files = (() => {
    const result: string[] = [];
    for (const dirent of rds(`dist/${folder}`)) if (isFile(dirent, ".js")) result.push(dirent.name);
    return result;
  })();

  if (files.length) {
    for await (const file of files) {
      const data = parse(JSON.parse(await exe(`node ./dist/${folder}/${file}`)));
      ws(`./dist/${folder}/${file}.json`, JSON.stringify(data, null, 2));
    }
  }
}
