import {  createHash} from 'node:crypto'
import { normalize } from 'node:path'
import { stdout } from 'node:process';
import { createReadStream }  from 'node:fs';

const FILE_PATH = normalize(`${import.meta.dirname}/files/fileToCalculateHashFor.txt`)

const calculateHash = async () => {
    const hashStream = createHash('sha256');
    const fileReadStream = createReadStream(FILE_PATH);
    fileReadStream.pipe(hashStream).setEncoding('hex').pipe(stdout)
};

await calculateHash();