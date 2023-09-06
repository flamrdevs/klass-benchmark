import { exec } from "node:child_process";

import { entries, dist } from "./utils";

const exe = (cmd: string) =>
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });

const start = async () => {
  for await (const [, value] of entries) {
    for await (const element of value("js")) {
      console.log(await exe(`node ${dist(element)}`));
    }
  }
};

start();
