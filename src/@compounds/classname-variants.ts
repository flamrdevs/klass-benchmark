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
  defaultVariants: {
    color: "green",
    size: "md",
  },
  compoundVariants: [
    {
      variants: {
        color: "red",
        active: true,
      },
      className: "color-red-active",
    },
    {
      variants: {
        color: "green",
        active: true,
      },
      className: "color-green-active",
    },
    {
      variants: {
        color: "blue",
        active: true,
      },
      className: "color-blue-active",
    },
  ],
});

run(
  {
    name: "classname-variants",
  },
  fn as Fn
);
