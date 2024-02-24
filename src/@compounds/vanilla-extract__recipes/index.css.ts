import { recipe } from "@vanilla-extract/recipes";

export const fn = recipe({
  base: {
    display: "inline-flex",
    backgroundColor: "black",
  },
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
      variants: {
        color: "red",
        active: true,
      },
      style: {
        color: "black",
      },
    },
    {
      variants: {
        color: "green",
        active: true,
      },
      style: {
        color: "black",
      },
    },
    {
      variants: {
        color: "blue",
        active: true,
      },
      style: {
        color: "black",
      },
    },
  ],
});
