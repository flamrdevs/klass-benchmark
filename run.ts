import { exec } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const exe = (cmd: string) =>
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });

const start = async () => {
  const files = (await fs.readdir(path.resolve(process.cwd(), "dist"))).filter((el) => el.startsWith("@."));
  for await (const file of files) {
    console.log(await exe(`node dist/${file}`));
  }
};

start();
