import { defineConfig } from "@pandacss/dev";

import { defineRecipe } from "@pandacss/dev";

export default defineConfig({
  preflight: false,
  include: [],
  exclude: [],
  theme: {
    extend: {
      recipes: {
        variants: defineRecipe({
          className: "variants",
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
        }),
        variantsCompound: defineRecipe({
          className: "variants-compound",
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
            {
              size: "sm",
              disabled: true,
              css: { padding: "1.5px 3px", height: "2rem" },
            },
            {
              size: "md",
              disabled: true,
              css: { padding: "2px 4px", height: "2.25rem" },
            },
            {
              size: "lg",
              disabled: true,
              css: { padding: "2.5px 5px", height: "2.5rem" },
            },
          ],
        }),
        responsiveVariants: defineRecipe({
          className: "responsive-variants",
          variants: {
            m: {
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
            p: {
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
        }),
      },
    },
  },
  emitPackage: true,
  outdir: "@pandacss/out",
});
