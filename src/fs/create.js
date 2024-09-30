import fs from 'node:fs'

const FILE_CONTENT = 'I am fresh and young';
const FILE_PATH = './files/fresh.txt';


const create = async () => {
   fs.access(FILE_PATH, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(FILE_PATH, FILE_CONTENT, () => {});
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await create();