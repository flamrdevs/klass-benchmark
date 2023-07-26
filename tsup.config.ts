import { defineConfig } from "tsup";

const src = (path: string) => `src/${path}`;

export default defineConfig({
  entry: [src("@.class-name-concatenation.ts"), src("@.variants-only.ts"), src("@.variants-compound.ts")],
  format: ["cjs"],
  target: "node20",
  minify: true,
  noExternal: [
    "@intrnl/cv",
    "@klass/core",
    "@tw-classed/core",
    "class-variance-authority",
    "classcat",
    "classname-variants",
    "classnames",
    "clsx",
    "tailwind-merge",
    "tailwind-variants",
  ],
  esbuildOptions: (options) => {
    options.legalComments = "none";
  },
});
