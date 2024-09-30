import { promises as fs } from "node:fs";
import {normalize} from "node:path";

const FILES_FOLDER_PATH = normalize(`${import.meta.dirname}/files`);

const list = async () => {
  try {
    await fs.access(FILES_FOLDER_PATH);
    const files = await fs.readdir(FILES_FOLDER_PATH);

    for (let fileId = 0; fileId < files.length; fileId++) {
      console.log(files[fileId]);
    }
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
