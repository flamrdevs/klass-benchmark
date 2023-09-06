import run from "~/@";

type Fn = (...args: any[]) => string;

const exe = <T extends Fn>(fn: T) => {
  return [fn("block", ["mx-3 my-3", { [fn("px-3", "py-3")]: true }])] as const;
};

const equal = (value: string, expect: string) => {
  if (value !== expect) throw new Error("Not matches");
};

const test = <T extends Fn>(fn: T) => {
  const [r1] = exe(fn);

  equal(r1, "block mx-3 my-3 px-3 py-3");
};

export const start = <T extends Fn>(key: string, fn: T) => {
  test(fn);

  run("class-concatenation", key, () => {
    exe(fn);
  });
};
