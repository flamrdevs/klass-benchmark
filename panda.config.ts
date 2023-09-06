import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: false,
  include: [],
  exclude: [],
  theme: { extend: {} },
  emitPackage: true,
  outdir: "@pandacss/out",
});
