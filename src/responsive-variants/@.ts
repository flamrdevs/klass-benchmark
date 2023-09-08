import run, { equal } from "~/@";

type Fn = (props: Record<PropertyKey, any>) => string;

const exe = <T extends Fn>(fn: T) => {
  return [
    fn({ m: "1", p: "1" }),
    fn({ m: { initial: "0", sm: "1", md: "2" }, p: "1" }),
    fn({ m: { initial: "0", sm: "1", md: "2" }, p: { initial: "0", lg: "3", xl: "4", "2xl": "5" } }),
  ] as const;
};

const test = <T extends Fn>(fn: T) => {
  const [r1, r2, r3] = exe(fn);

  // sort only for test

  equal(r1.split(" ").sort().join(" "), "m-1 p-1");
  equal(r2.split(" ").sort().join(" "), "m-0 md:m-2 p-1 sm:m-1");
  equal(r3.split(" ").sort().join(" "), "2xl:p-5 lg:p-3 m-0 md:m-2 p-0 sm:m-1 xl:p-4");
};

export const start = <T extends Fn>(key: string, fn: T) => {
  test(fn);

  run("responsive-variants", key, () => {
    exe(fn);
  });
};

export const impostor = <T extends Fn>(key: string, fn: T) => {
  const exe = <T extends Fn>(fn: T) => {
    return [
      fn({ m: "1", p: "1" }),
      fn({ m: { base: "0", sm: "1", md: "2" }, p: "1" }),
      fn({ m: { base: "0", sm: "1", md: "2" }, p: { base: "0", lg: "3", xl: "4", "2xl": "5" } }),
    ] as const;
  };

  run("responsive-variants", key, () => {
    exe(fn);
  });
};
