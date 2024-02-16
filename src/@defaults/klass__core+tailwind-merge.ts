import { klass } from "@klass/core";
import { twMerge } from "tailwind-merge";

import run from "./~/run";

const fn = klass(
  {
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
  },
  {
    end: twMerge,
  }
);

run(
  {
    name: "@klass/core",
    merge: true,
  },
  fn
);
