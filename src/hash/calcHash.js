import {createHash} from "crypto";
import { createReadStream, existsSync } from "fs";
import path from "path";
import Stream from "stream";
import { fileURLToPath } from 'url';

const calculateHash = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    const sourceFile = "fileToCalculateHashFor.txt";
    const sourceDir = "files";
    const sourceFilePath = path.join(__dirname, sourceDir, sourceFile);

    const secret = "rsschool";

    try {
        const hash = createHash('sha256', secret);
        if (existsSync(sourceFilePath)){
            const stream = createReadStream(sourceFilePath);

            stream.on('data', (chunk) => {
                hash.update(chunk);
            })

            stream.on('end', ()=> {
                const result = hash.digest('hex');
                console.log(result);
            })

            stream.on('error', (err) => {
                console.log("Error in reading file: ", err );
            })
        } else {
            throw new Error("FS operation failed");
        }

    } catch(err) {
        console.log(err);
    }
};

await calculateHash();