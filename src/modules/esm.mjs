import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

const pathA = path.join(__dirname, "files", "a.json");
const pathB = path.join(__dirname, "files", "b.json");
const pathC = path.join(__dirname, "files", "c.cjs");

const pathCdata = readFileSync(pathC, 'utf-8');
console.log(pathCdata);

if (random > 0.5) {
    unknownObject = JSON.parse(readFileSync(pathA, 'utf-8'));
} else {
    unknownObject = JSON.parse(readFileSync(pathB, 'utf-8'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

