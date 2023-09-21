type Extension = "ts" | "js";

const createEntry = (folder: string, filenames: string[]) =>
  [folder, (extension: Extension) => filenames.map((filename) => `${folder}/${filename}.${extension}`)] as const;

export const entries = [
  createEntry("variants", [
    "classnamemanager",
    "classnamevariants",
    "cva-merge",
    "cva",
    "cvu-merge",
    "cvu",
    "intrnlcv",
    "klass-merge",
    "klass",
    "onno",
    "pandacss",
    "stitches",
    "tailwindvariants-merge",
    "tailwindvariants",
    "twclassed",
    "vanillaextract",
  ]),
  createEntry("variants-compound", [
    "classnamevariants",
    "cva-merge",
    "cva",
    "cvu-merge",
    "cvu",
    "intrnlcv",
    "klass-merge",
    "klass",
    "onno",
    "pandacss",
    "stitches",
    "tailwindvariants-merge",
    "tailwindvariants",
    "twclassed",
    "vanillaextract",
  ]),
  createEntry("responsive-variants", ["klass-merge", "klass", "pandacss", "tailwindvariants-merge", "tailwindvariants", "vanillaextract"]),
  createEntry("slots", ["klass-merge", "klass", "pandacss", "tailwindvariants-merge", "tailwindvariants"]),
].filter(() => true);

export const src = (path: string) => `./src/${path}`;
export const dist = (path: string) => `./dist/${path}`;
