import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from 'url';
import './files/c.js';

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export let unknownObject;

if (random > 0.5) {
  const res = await import('./files/a.json', { with: { type: "json" }});
  unknownObject = res.default
} else {
  const res = await import('./files/b.json',{ with: { type: "json" } });
  unknownObject = res.default
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
