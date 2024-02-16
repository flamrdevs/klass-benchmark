import { reklass } from "@klass/core";

import run from "./~/run";

const fn = reklass({
  conditions: [
    {
      initial: "",
      sm: "sm:",
      md: "md:",
      lg: "lg:",
      xl: "xl:",
      "2xl": "2xl:",
    },
    "initial",
  ],
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
});

run(
  {
    name: "@klass/core",
    merge: false,
  },
  fn
);
