import {readFile} from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const read = async () => {
   try {
    const sourceDir = "files";
    const sourceFile = "fileToRead.txt";
    if (existsSync(path.join(sourceDir, sourceFile))) {
        const file = await readFile(path.join(sourceDir, sourceFile));
        console.log(`Read file ${sourceFile}:`);
        console.log(file.toString());
    } else {
        throw new Error("FS operation failed");
    }
   } catch (err) {
    console.log(err)
   } 
};

await read();