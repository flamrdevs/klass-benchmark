import { defineConfig } from "tsup";
import type { Options } from "tsup";

import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

import { entries, dist, src } from "./utils";

const config = (entry: Options["entry"], outDir: Options["outDir"]): Options => {
  return {
    entry,
    outDir,
    format: ["cjs"],
    target: "node20",
    minify: true,
    noExternal: [
      "@intrnl/cv",
      "@klass/core",
      "@pandacss/out",
      "@tw-classed/core",
      "@vanilla-extract/css",
      "@vanilla-extract/recipes",
      "classname-variants",
      "classnames",
      "clsx",
      "cva",
      "tailwind-merge",
      "tailwind-variants",
    ],
    esbuildPlugins: [vanillaExtractPlugin({ outputCss: false })] as unknown as Options["esbuildPlugins"],
    esbuildOptions: (options) => {
      options.legalComments = "none";
    },
  };
};

export default defineConfig(entries.map(([key, value]) => config(value("ts").map(src), dist(key))));
