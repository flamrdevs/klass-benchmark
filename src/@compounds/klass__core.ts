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
  compounds: [
    [
      {
        color: "red",
        active: true,
      },
      "color-red-active",
    ],
    [
      {
        color: "green",
        active: true,
      },
      "color-green-active",
    ],
    [
      {
        color: "blue",
        active: true,
      },
      "color-blue-active",
    ],
  ],
});

run(
  {
    name: "@klass/core",
    merge: false,
  },
  fn
);
