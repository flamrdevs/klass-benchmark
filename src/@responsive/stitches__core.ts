import { createStitches } from "@stitches/core";

import run from "./~/run!";

const fn = createStitches({
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
}).css({
  variants: {
    m: {
      "1": {
        margin: "1px",
      },
      "2": {
        margin: "2px",
      },
      "3": {
        margin: "3px",
      },
      "4": {
        margin: "4px",
      },
      "5": {
        margin: "5px",
      },
    },
    p: {
      "1": {
        padding: "1px",
      },
      "2": {
        padding: "2px",
      },
      "3": {
        padding: "3px",
      },
      "4": {
        padding: "4px",
      },
      "5": {
        padding: "5px",
      },
    },
  },
});

run(
  {
    name: "@stitches/core",
    relevant: false,
  },
  {
    m: "1",
    p: {
      "@initial": "1",
      "@md": "2",
      "@xl": "3",
    },
  },
  fn
);
