import { cva } from "cva";

import run from "./~/run";

const fn = cva({
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
  defaultVariants: {
    color: "green",
    size: "md",
  },
});

run(
  {
    name: "cva",
  },
  fn
);
