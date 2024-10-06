import { createReadStream, createWriteStream } from 'node:fs';
import {normalize} from 'node:path'
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';

const OUTPUT_FILE_PATH = normalize(`${import.meta.dirname}/files/fileToCompress.txt`);
const INPUT_FILE_PATH = normalize(`${import.meta.dirname}/files/archive.gz`);

const decompress = async () => {
    await pipeline(
        createReadStream(INPUT_FILE_PATH),
        createGunzip(),
        createWriteStream(OUTPUT_FILE_PATH)
    )
};

await decompress();