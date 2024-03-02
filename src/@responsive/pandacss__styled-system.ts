import { responsive as fn } from "@pandacss/styled-system/recipes";

import run from "./~/run!";

run(
  {
    name: "@pandacss/styled-system",
    relevant: false,
  },
  {
    m: "1",
    p: {
      base: "1",
      md: "2",
      xl: "3",
    },
  },
  fn
);
