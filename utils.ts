type Extension = "ts" | "js";

const createEntry = (folder: string, extension: Extension, filenames: string[]) =>
  filenames.map((filename) => `${folder}/${filename}.${extension}`);

export const entries = Object.entries({
  "class-concatenation": (extension: Extension) => createEntry("class-concatenation", extension, ["classnames", "clsx", "cx", "cxs"]),
  variants: (extension: Extension) =>
    createEntry("variants", extension, [
      "classnamevariant",
      "cva-merge",
      "cva",
      "intrnlcv",
      "klass-merge",
      "klass",
      "pandacss",
      "tailwindvariants-merge",
      "tailwindvariants",
      "twclassed",
      "vanillaextract",
    ]),
  "variants-compound": (extension: Extension) =>
    createEntry("variants-compound", extension, [
      "classnamevariant",
      "cva-merge",
      "cva",
      "intrnlcv",
      "klass-merge",
      "klass",
      "pandacss",
      "tailwindvariants-merge",
      "tailwindvariants",
      "twclassed",
      "vanillaextract",
    ]),
} satisfies Record<string, (extension: Extension) => string[]>);

export const src = (path: string) => `./src/${path}`;
export const dist = (path: string) => `./dist/${path}`;
