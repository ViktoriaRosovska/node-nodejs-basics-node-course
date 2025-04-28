import {createWriteStream} from "fs";
import path from "path";
import { fileURLToPath } from "url";

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const sourceFile = "fileToWrite";
    const sourceDir = "files";
    const filePath = path.join(__dirname, sourceDir, sourceFile);

    const writeStream = createWriteStream(filePath, {flags: 'w', encoding: 'utf-8'});

    console.log("Enter you text. For exit press Ctrl+C:");
    
    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    })

    process.stdin.on('end', () => {
        writeStream.end();
        console.log(`Your text was written to file ${sourceFile}`);
    })

    process.stdin.on('error', (err) => {
        console.log("Error with enter text: ", err.message)
    })
};

await write();