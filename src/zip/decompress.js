import {createGunzip} from "zlib";
import { pipeline } from "stream";
import { fileURLToPath } from "url";
import path from "path";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    const sourceDir = "files";
    const sourceFile = "archive.gz";
    const destinationFile = "fileToCompress.txt";
    const destinationFilePath = path.join(__dirname, sourceDir, destinationFile);
    const filePath = path.join(__dirname, sourceDir, sourceFile);
    
    const gunzip = createGunzip();
    const stream = createReadStream(filePath);
    const destination = createWriteStream(destinationFilePath);
    
    pipeline(stream, gunzip, destination, (err) => {
            if (err) {
              console.error('An error occurred:', err);
              process.exitCode = 1;
            }
          });
};

await decompress();