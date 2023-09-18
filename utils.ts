type Extension = "ts" | "js";

const createEntry = (folder: string, extension: Extension, filenames: string[]) =>
  filenames.map((filename) => `${folder}/${filename}.${extension}`);

export const entries = Object.entries({
  variants: (extension: Extension) =>
    createEntry("variants", extension, [
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
  "variants-compound": (extension: Extension) =>
    createEntry("variants-compound", extension, [
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
  "responsive-variants": (extension: Extension) =>
    createEntry("responsive-variants", extension, [
      "klass-merge",
      "klass",
      "pandacss",
      "tailwindvariants-merge",
      "tailwindvariants",
      "vanillaextract",
    ]),
  slots: (extension: Extension) =>
    createEntry("slots", extension, ["klass-merge", "klass", "pandacss", "tailwindvariants-merge", "tailwindvariants"]),
} satisfies Record<string, (extension: Extension) => string[]>).filter(() => true);

export const src = (path: string) => `./src/${path}`;
export const dist = (path: string) => `./dist/${path}`;
