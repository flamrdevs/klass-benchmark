import { tv } from "tailwind-variants";

import run from "./~/run";

const fn = tv(
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
    defaultVariants: {
      color: "green",
      size: "md",
    },
    compoundVariants: [
      {
        color: "red",
        active: true,
        class: "color-red-active",
      },
      {
        color: "green",
        active: true,
        class: "color-green-active",
      },
      {
        color: "blue",
        active: true,
        class: "color-blue-active",
      },
    ],
  },
  {
    twMerge: true,
  }
);

run(
  {
    name: "tailwind-variants",
    merge: true,
  },
  fn
);
