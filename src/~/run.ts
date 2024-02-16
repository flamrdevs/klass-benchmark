import type { Config } from "./types";

const I = 1000;

const run = (config: Config, callback: () => void) => {
  const start = performance.now();
  for (let i = 0; i < I; i++) callback();
  const end = performance.now();
  console.log(JSON.stringify({ ...config, ops: Math.floor(I / ((end - start) / 1000)) }));
};

export default run;
