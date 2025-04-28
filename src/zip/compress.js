import {createGzip} from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
import path from "path";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceDir = "files";
    const sourceFile = "fileToCompress.txt";
    const destinationFile = path.join(__dirname, sourceDir, "archive.gz");
    const filePath = path.join(__dirname, sourceDir, sourceFile);

    const gzip = createGzip();
    const stream = createReadStream(filePath);
    const destination = createWriteStream(destinationFile);

    pipeline(stream, gzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
      });
};

await compress();