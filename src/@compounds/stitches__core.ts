import { css } from "@stitches/core";

import run from "./~/run!";

const fn = css({
  display: "inline-flex",
  backgroundColor: "black",

  variants: {
    color: {
      red: {
        color: "red",
      },
      green: {
        color: "green",
      },
      blue: {
        color: "blue",
      },
    },
    size: {
      sm: {
        height: "0.5rem",
      },
      md: {
        height: "1.0rem",
      },
      lg: {
        height: "1.5rem",
      },
    },
    active: {
      true: {
        backgroundColor: "white",
      },
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
      css: {
        color: "black",
      },
    },
    {
      color: "green",
      active: true,
      css: {
        color: "black",
      },
    },
    {
      color: "blue",
      active: true,
      css: {
        color: "black",
      },
    },
  ],
});

run(
  {
    name: "@stitches/core",
    relevant: false,
  },
  fn
);
