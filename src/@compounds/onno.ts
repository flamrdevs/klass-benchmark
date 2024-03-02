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
  defaults: {
    color: "green",
    size: "md",
  },
  compound: [
    {
      color: "red",
      active: true,
      className: "color-red-active",
    },
    {
      color: "green",
      active: true,
      className: "color-green-active",
    },
    {
      color: "blue",
      active: true,
      className: "color-blue-active",
    },
  ],
});

run(
  {
    name: "onno",
  },
  fn
);
