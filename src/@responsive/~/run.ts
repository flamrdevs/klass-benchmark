import type { Config, Fn } from "~/~/types";
import run from "~/~/run";
import test from "~/~/test/string-sort-equal";

export default <T extends Fn>(config: Config, fn: T) => {
  const props = {
    m: "1",
    p: {
      initial: "1",
      md: "2",
      xl: "3",
    },
  };

  test(fn, {
    ["m-1 p-1 md:p-2 xl:p-3"]: props,
  });

  run(config, () => {
    fn(props);
  });
};
