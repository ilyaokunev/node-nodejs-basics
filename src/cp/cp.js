import {fork} from 'node:child_process';
import { normalize } from 'node:path';

const MODULE_PATH = normalize(`${import.meta.dirname}/files/script`) 

const spawnChildProcess = async (args) => {
    fork(MODULE_PATH, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['meow', 'woof']);
