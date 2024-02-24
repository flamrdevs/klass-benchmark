import { defineConfig, defineRecipe } from "@pandacss/dev";

export default defineConfig({
  eject: true,
  preflight: false,
  include: [],
  exclude: [],
  theme: {
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      recipes: {
        responsive: defineRecipe({
          className: "@responsive",
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
        }),
      },
    },
  },
  outdir: "@pandacss/styled-system",
  emitPackage: true,
  gitignore: false,
});
