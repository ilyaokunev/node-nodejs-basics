import { promises as fs } from "node:fs";
import {normalize, join} from "node:path";

const FILES_FOLDER_PATH = normalize(`${import.meta.dirname}/files`)
const FILES_COPY_FOLDER_PATH = normalize(`${import.meta.dirname}/files_copy`)

const copy = async () => {
    try {

      await fs.access(FILES_FOLDER_PATH, fs.constants.F_OK);
      await fs.mkdir(FILES_COPY_FOLDER_PATH, () => {});
      const files = await fs.readdir(FILES_FOLDER_PATH)

        for (let fileId = 0; fileId < files.length; fileId++) {
          fs.copyFile(
            join(FILES_FOLDER_PATH, files[fileId]),
            join(FILES_COPY_FOLDER_PATH, files[fileId])
        );
      };

    } catch {
      throw new Error("FS operation failed");
    }
};

await copy();
