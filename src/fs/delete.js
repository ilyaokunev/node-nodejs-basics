import { promises as fs } from "node:fs";
import {normalize} from "node:path";

const FILE_PATH = normalize(`${import.meta.dirname}/files/fileToRemoveCopy.txt`);

const remove = async () => {
    try {
        await fs.access(FILE_PATH);
        await fs.rm(FILE_PATH);
    } catch {
        throw new Error('FS operation failed')
    }
};

await remove();