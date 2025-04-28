import {createReadStream} from "fs";
import { fileURLToPath } from "url";
import path from "path";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const sourceFile = "fileToRead.txt";
    const sourceDir = "files";
    const filePath = path.join(__dirname, sourceDir, sourceFile);
    
    const stream = createReadStream(filePath, 'utf-8');

    // stream.on('open', () => {
    //     console.log("Start to read file:\n");
    // })

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })

    // stream.on('end', () => {
    //     console.log("\nFinished read file");
    // });

    stream.on('error', (err) => {
        console.log("Error in reading file: ", err.message);
    })
};

await read();