import { defineConfig } from "tsup";
import type { Options } from "tsup";

import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

import { rds, isFolder, isFile } from "./utils";

const options: Options[] = [];

const esbuildPlugins = [vanillaExtractPlugin({ outputCss: false })];

const folders = (() => {
  const result: string[] = [];
  for (const dirent of rds("src")) if (isFolder(dirent)) result.push(dirent.name);
  return result;
})();

for (const folder of folders) {
  const files = (() => {
    const result: string[] = [];
    for (const dirent of rds(`src/${folder}`)) if (isFile(dirent, ".ts")) result.push(dirent.name);
    return result;
  })();

  if (files.length) {
    options.push({
      entry: files.map((file) => `./src/${folder}/${file}`),
      outDir: `./dist/${folder}`,
      format: "esm",
      minify: !"terser",
      bundle: true,
      splitting: false,
      esbuildPlugins,
    });
  }
}

export default defineConfig(options);
