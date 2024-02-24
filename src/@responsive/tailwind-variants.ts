import { tv } from "tailwind-variants";

import run from "./~/run";

const fn = tv(
  {
    variants: {
      m: {
        "1": "m-1",
        "2": "m-2",
        "3": "m-3",
        "4": "m-4",
        "5": "m-5",
      },
      p: {
        "1": "p-1",
        "2": "p-2",
        "3": "p-3",
        "4": "p-4",
        "5": "p-5",
      },
    },
  },
  {
    responsiveVariants: true,
    twMerge: false,
  }
);

run(
  {
    name: "tailwind-variants",
  },
  fn
);
