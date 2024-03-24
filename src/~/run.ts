import type { Config } from "./types";

const iteration = 5000;

const run = (config: Config, callback: () => void) => {
  for (let i = 0; i < 100; i++) callback();

  const start = performance.now();
  for (let i = 0; i < iteration; i++) callback();
  const end = performance.now();

  console.log(JSON.stringify({ ...config, ops: Math.floor(iteration / ((end - start) / 1000)) }));
};

export default run;
