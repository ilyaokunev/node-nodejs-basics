import { promises as fs } from "node:fs";
import {normalize} from "node:path";

const NEW_PATH = normalize(`${import.meta.dirname}/files/properFilename.md`);
const FILE_PATH = normalize(`${import.meta.dirname}/files/wrongFilename.txt`);

const rename = async () => {
    try {
        await fs.access(FILE_PATH, fs.constants.F_OK);

            fs.access(NEW_PATH, fs.constants.F_OK).then(()=> {
                throw new Error("FS operation failed");
            }, ()=> fs.rename(FILE_PATH, NEW_PATH));

    } catch {
        throw new Error("FS operation failed");
    }

};

await rename();