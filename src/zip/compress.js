import { createReadStream, createWriteStream } from 'node:fs';
import {normalize} from 'node:path'
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const INPUT_FILE_PATH = normalize(`${import.meta.dirname}/files/fileToCompress.txt`);
const OUTPUT_FILE_PATH = normalize(`${import.meta.dirname}/files/archive.gz`);

const compress = async () => {
    await pipeline (
        createReadStream(INPUT_FILE_PATH),
        createGzip(),
        createWriteStream(OUTPUT_FILE_PATH)
    )
};

await compress();