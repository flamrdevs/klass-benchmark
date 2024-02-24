import type { Config } from "~/~/types";
import run from "~/~/run";
import test from "~/~/test/string-equal";

type Props = Record<any, any>;

type Slots = (props?: Props) => Record<"root" | "input" | "label", (props?: Props) => string>;

export default <T extends Slots>(config: Config, fn: T) => {
  const props = {
    color: "red",
    size: "lg",
    active: true,
  };

  const t1 = fn();
  test(t1.root, {
    ["root-base root-color-green root-size-md"]: {},
  });
  test(t1.label, {
    ["label-base label-color-green label-size-md"]: {},
  });
  test(t1.input, {
    ["input-base input-color-green input-size-md"]: {},
  });

  const t2 = fn(props);
  test(t2.root, {
    ["root-base root-color-red root-size-lg"]: {},
  });
  test(t2.label, {
    ["label-base label-color-red label-size-lg label-active"]: {},
  });
  test(t2.input, {
    ["input-base input-color-red input-size-lg input-active"]: {},
  });

  run(config, () => {
    const { root, input, label } = fn(props);

    root();
    input();
    label();
  });
};
