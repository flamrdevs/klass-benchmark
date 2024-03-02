import { variants } from "classname-variants";

import type { Fn } from "~/~/types";

import run from "./~/run";

const fn = variants({
  base: "base",
  variants: {
    color: {
      red: "color-red",
      green: "color-green",
      blue: "color-blue",
    },
    size: {
      sm: "size-sm",
      md: "size-md",
      lg: "size-lg",
    },
    active: {
      true: "active",
    },
  },
});

run(
  {
    name: "classname-variants",
  },
  fn as Fn
);
