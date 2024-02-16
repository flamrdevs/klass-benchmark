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
    ["base color-green size-md"]: {},
    ["base color-red size-lg active color-red-active"]: props,
  });

  run(config, () => {
    fn(props);
  });
};
