import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const properties = defineProperties({
  conditions: {
    base: {},
    sm: { "@media": "screen and (min-width: 640px)" },
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
    xl: { "@media": "screen and (min-width: 1280px)" },
    "2xl": { "@media": "screen and (min-width: 1536px)" },
  },
  defaultCondition: "base",
  properties: {
    margin: {
      "0": { margin: 0 },
      "1": { margin: 1 },
      "2": { margin: 2 },
      "3": { margin: 3 },
      "4": { margin: 4 },
      "5": { margin: 5 },
      "6": { margin: 6 },
      "7": { margin: 7 },
      "8": { margin: 8 },
    },
    padding: {
      "0": { padding: 0 },
      "1": { padding: 1 },
      "2": { padding: 2 },
      "3": { padding: 3 },
      "4": { padding: 4 },
      "5": { padding: 5 },
      "6": { padding: 6 },
      "7": { padding: 7 },
      "8": { padding: 8 },
    },
  },
  shorthands: {
    m: ["margin"],
    p: ["padding"],
  },
});

export default createSprinkles(properties);
