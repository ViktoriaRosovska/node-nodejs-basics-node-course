import {existsSync} from "fs";
import { unlink } from "fs/promises";
import path from "path";

const remove = async () => {
    try {
        const sourceDir = "files";
        const sourceFile = "fileToRemove.txt";
        if (existsSync(path.join(sourceDir, sourceFile))) {
            unlink(path.join(sourceDir, sourceFile));
        } else {
            throw new Error("FS operation failed");
        }
    } catch(err) {
        console.log(err)
    } 
};

await remove();