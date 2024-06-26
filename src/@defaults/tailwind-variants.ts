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
  },
  {
    twMerge: false,
  }
);

run(
  {
    name: "tailwind-variants",
  },
  fn
);
