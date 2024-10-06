import { createReadStream } from "node:fs";
import { normalize } from "node:path";
import { stdout } from "node:process";

const FILE_PATH = normalize(`${import.meta.dirname}/files/fileToRead.txt`);

const read = async () => {
  createReadStream(FILE_PATH).pipe(stdout);
};

await read();
