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
  defaults: {
    color: "green",
    size: "md",
  },
});

run(
  {
    name: "@klass/core",
  },
  fn
);
