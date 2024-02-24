import type { Config, Fn } from "~/~/types";
import run from "~/~/run";

export default <P>(config: Config, props: P, fn: Fn<P>) => {
  run(config, () => {
    fn(props);
  });
};
