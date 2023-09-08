import run, { equal } from "~/@";

type Fn = (...args: any[]) => string;

const exe = <T extends Fn>(fn: T) => {
  return fn("block", ["mx-3 my-3", { [fn("px-3", "py-3")]: true }]);
};

const test = <T extends Fn>(fn: T) => {
  const result = exe(fn);

  equal(result, "block mx-3 my-3 px-3 py-3");
};

export const start = <T extends Fn>(key: string, fn: T) => {
  test(fn);

  run("class-concatenation", key, () => {
    exe(fn);
  });
};
