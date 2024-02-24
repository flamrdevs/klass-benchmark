import slots from "@klass/core/slots";

import run from "./~/run";

const fn = slots({
  base: {
    root: "root-base",
    label: "label-base",
    input: "input-base",
  },
  variants: {
    color: {
      red: {
        root: "root-color-red",
        label: "label-color-red",
        input: "input-color-red",
      },
      green: {
        root: "root-color-green",
        label: "label-color-green",
        input: "input-color-green",
      },
      blue: {
        root: "root-color-blue",
        label: "label-color-blue",
        input: "input-color-blue",
      },
    },
    size: {
      sm: {
        root: "root-size-sm",
        label: "label-size-sm",
        input: "input-size-sm",
      },
      md: {
        root: "root-size-md",
        label: "label-size-md",
        input: "input-size-md",
      },
      lg: {
        root: "root-size-lg",
        label: "label-size-lg",
        input: "input-size-lg",
      },
    },
    active: {
      true: {
        label: "label-active",
        input: "input-active",
      },
    },
  },
  defaults: {
    color: "green",
    size: "md",
  },
});

run(
  {
    name: "@klass/core",
  },
  fn
);
