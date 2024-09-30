import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
    stdin.pipe(reverseStream).pipe(stdout);
};

const reverseStream = new Transform({
    transform(data, encoding, callback) {
        callback(null, data.reverse());
    }
})

await transform();