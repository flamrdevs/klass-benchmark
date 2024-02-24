import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const properties = defineProperties({
  conditions: {
    initial: {},
    sm: { "@media": "screen and (min-width: 640px)" },
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
    xl: { "@media": "screen and (min-width: 1280px)" },
    "2xl": { "@media": "screen and (min-width: 1536px)" },
  },
  defaultCondition: "initial",
  properties: {
    margin: {
      "1": "1px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "5": "5px",
    },
    padding: {
      "1": "1px",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "5": "5px",
    },
  },
  shorthands: {
    m: ["margin"],
    p: ["padding"],
  },
});

export const fn = createSprinkles(properties);
