import type { Config, Fn } from "~/~/types";
import run from "~/~/run";
import test from "~/~/test/string-sort-equal";

const props = {
  m: "1",
  p: {
    initial: "1",
    md: "2",
    xl: "3",
  },
} as const;

export default (config: Config, fn: Fn<typeof props>) => {
  test(fn, {
    ["m-1 p-1 md:p-2 xl:p-3"]: props,
  });

  run(config, () => {
    fn(props);
  });
};
