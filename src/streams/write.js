import { createWriteStream, createReadStream } from 'node:fs';
import {normalize} from 'node:path';
import { stdin } from 'node:process';

const FILE_PATH = normalize(`${import.meta.dirname}/files/fileToWrite.txt`);

const write = async () => {
    stdin.pipe(createWriteStream(FILE_PATH))
};

await write();