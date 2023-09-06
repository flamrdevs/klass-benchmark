import { cva } from "@pandacss/out/css";

import { impostor } from "./@";

impostor(
  "pandacss (impostor!)",
  cva({
    base: { display: "inline-flex", alignItems: "center", justifyContent: "center", outline: "none", borderRadius: "1rem" },
    variants: {
      color: {
        red: { backgroundColor: "red", color: "white" },
        green: { backgroundColor: "green", color: "white" },
        blue: { backgroundColor: "blue", color: "white" },
      },
      size: {
        sm: { padding: "1.5px 3px", height: "2rem", fontWeight: 400 },
        md: { padding: "2px 4px", height: "2.25rem", fontWeight: 500 },
        lg: { padding: "2.5px 5px", height: "2.5rem", fontWeight: 600 },
      },
      disabled: {
        true: { opacity: 0.75 },
      },
    },
    defaultVariants: {
      color: "blue",
      size: "md",
    },
    compoundVariants: [
      {
        color: "red",
        disabled: true,
        css: { color: "red" },
      },
      {
        color: "green",
        disabled: true,
        css: { color: "green" },
      },
      {
        color: "blue",
        disabled: true,
        css: { color: "blue" },
      },
    ],
  })
);
