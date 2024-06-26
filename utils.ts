import fs, { type Dirent } from "node:fs";
import path from "node:path";

export const cwd = process.cwd();
export const rds = (pathname: string) => fs.readdirSync(path.resolve(cwd, pathname), { withFileTypes: true });
export const rfs = (pathname: string) => fs.readFileSync(path.resolve(cwd, pathname), "utf-8");
export const ws = (pathname: string, data: string) => fs.writeFileSync(path.resolve(cwd, pathname), data);

const folders: string[] = [
  //
  "@base",
  "@defaults",
  "@compounds",
  "@responsive",
  "@slots",
];

export const isFolder = (dirent: Dirent) => dirent.isDirectory() && dirent.name.startsWith("@") && folders.includes(dirent.name);
export const isFile = (dirent: Dirent, ext: ".ts" | ".js" | ".json") => dirent.isFile() && dirent.name.endsWith(ext);
