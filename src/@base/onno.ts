import { onno } from "onno";

import run from "./~/run";

const fn = onno({
  baseline: "base",
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
    active: "active",
  },
});

run(
  {
    name: "onno",
  },
  fn
);
