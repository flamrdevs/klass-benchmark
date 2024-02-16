import { defineConfig } from "tsup";
import type { Options } from "tsup";

import { rds } from "./node";

const options: Options[] = [];

const folders = (() => {
  const result: string[] = [];
  for (const dirent of rds("src")) if (dirent.isDirectory() && dirent.name.startsWith("@")) result.push(dirent.name);
  return result;
})();

for (const folder of folders) {
  const files = (() => {
    const result: string[] = [];
    for (const dirent of rds(`src/${folder}`)) if (dirent.isFile() && dirent.name.endsWith(".ts")) result.push(dirent.name);
    return result;
  })();

  if (files.length) {
    options.push({
      entry: files.map((file) => `./src/${folder}/${file}`),
      outDir: `./dist/${folder}`,
      format: "esm",
      minify: "terser",
      bundle: true,
      splitting: false,
    });
  }
}

export default defineConfig(options);
