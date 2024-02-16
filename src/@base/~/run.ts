import type { Config, Fn } from "~/~/types";
import run from "~/~/run";
import test from "~/~/test/string-equal";

export default <T extends Fn>(config: Config, fn: T) => {
  const props = {
    color: "red",
    size: "lg",
    active: true,
  };

  test(fn, {
    ["base"]: {},
    ["base color-red size-lg active"]: props,
  });

  run(config, () => {
    fn(props);
  });
};
