import { promises as fs } from "node:fs";
import {normalize} from "node:path";

const FILE_PATH = normalize(`${import.meta.dirname}/files/fileToRead.txt`);

const read = async () => {
  try {
    await fs.access(FILE_PATH);
    const fileData = await fs.readFile(FILE_PATH, 'utf8');
    console.log(fileData);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
