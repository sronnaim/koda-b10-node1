import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const fileNames = [
  "Say You Won't Let Go - James Arthur",
  "Impossible - James Arthur",
  "Car's Outside - James Arthur",
  "Can I Be Him - James Arthur",
  "Naked - James Arthur",
  "Last Train Home - John Mayer",
  "New Light - John Mayer",
  "Shot in the Dark - John Mayer",
  "You're Gonna Live Forever in Me - John Mayer",
  "Wild Blue - John Mayer",
];

const ext = ".mp3";

const dirname = path.dirname(fileURLToPath(import.meta.url));

function createFile(
  dir, filename, ext
) {
  const filePath = path.join(dir, `${filename}${ext}`);
  return fs
    .writeFile(filePath, "")
    .then(() => 
      console.log(`${filename}${ext} created`));
}

function makeDir(p) {
  return fs
    .mkdir(p, { recursive: false })
    .then(() => 
      console.log(`Created: ${dirname}`));
}

function main() {
  const musicsPath = path.join(dirname, "musics");
  makeDir(musicsPath)
    .catch((err) => {
      if (err instanceof Error && err.code === "EEXIST")
        console.log("Musics folder already exists, skipping creation...");
    })
    .finally(() => {
      return fileNames.reduce((prev, file) => {
        return prev.then(() => {
          return createFile(
            musicsPath, file, ext
          );
        });
      }, Promise.resolve());
    });
}

main();
