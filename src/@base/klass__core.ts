import { klass } from "@klass/core";

import run from "./~/run";

const fn = klass({
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
    name: "@klass/core",
  },
  fn
);
