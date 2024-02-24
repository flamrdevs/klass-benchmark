import type { Config, Fn } from "~/~/types";
import run from "~/~/run";

export default <T extends Fn>(config: Config, fn: T) => {
  const props = {
    color: "red",
    size: "lg",
    active: true,
  };

  run(config, () => {
    fn(props);
  });
};
