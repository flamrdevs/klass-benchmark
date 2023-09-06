import fs, { constants } from "node:fs/promises";
import path from "node:path";

type JSONResult = Record<string, number>;

const json = async (filename: string, key: string, value: number) => {
  const target = path.resolve(process.cwd(), `dist/${filename}.json`);

  let content: JSONResult = {};

  const read = async () => JSON.parse(await fs.readFile(target, "utf8")) as JSONResult;

  const write = async (json: JSONResult) => await fs.writeFile(target, JSON.stringify(json, null, 2), "utf8");

  try {
    await fs.access(target, constants.R_OK | constants.W_OK);
    content = await read();
  } catch (error) {
    await write({});
  }

  content[key] = value;

  await write(content);
};

type OPSCallback = () => void;

const ITERATIONS = 99_999;

const ops = (callback: OPSCallback, iterations: number = ITERATIONS) => {
  const startTime = performance.now();

  for (let i = 0; i < iterations; i++) callback();

  const endTime = performance.now();

  return Number(Math.floor(iterations / ((endTime - startTime) / 1000)).toFixed(0));
};

const run = async (filename: string, key: string, callback: OPSCallback) => {
  await json(filename, key, ops(callback));
  console.log(`${filename} | ${key}`);
};

export type { JSONResult, OPSCallback };
export default run;
