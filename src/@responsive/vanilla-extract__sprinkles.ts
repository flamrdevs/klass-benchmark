import run from "./~/run!";

import { fn } from "./vanilla-extract__sprinkles/index.css";

run(
  {
    name: "@vanilla-extract/sprinkles",
    relevant: false,
  },
  {
    m: "1",
    p: {
      initial: "1",
      md: "2",
      xl: "3",
    },
  },
  fn
);
