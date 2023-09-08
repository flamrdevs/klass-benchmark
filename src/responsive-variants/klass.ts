import { reklass } from "@klass/core";

import { start } from "./@";

start(
  "@klass/core",
  reklass({
    conditions: {
      initial: "",
      sm: "sm:",
      md: "md:",
      lg: "lg:",
      xl: "xl:",
      "2xl": "2xl:",
    },
    defaultCondition: "initial",
    variants: {
      m: {
        "0": "m-0",
        "1": "m-1",
        "2": "m-2",
        "3": "m-3",
        "4": "m-4",
        "5": "m-5",
        "6": "m-6",
        "7": "m-7",
        "8": "m-8",
      },
      p: {
        "0": "p-0",
        "1": "p-1",
        "2": "p-2",
        "3": "p-3",
        "4": "p-4",
        "5": "p-5",
        "6": "p-6",
        "7": "p-7",
        "8": "p-8",
      },
    },
  })
);
