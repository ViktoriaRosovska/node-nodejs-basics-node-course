import { readdir, writeFile } from 'node:fs/promises';
import path from "path";

const create = async () => {
    try {
        const files = await readdir("files");
        for (let file of files){
            if (file === "fresh.txt") {
                throw new Error("FS operation failed");
            } 
        }
        const newfile = writeFile(path.join("files", "fresh.txt"), "I am fresh and young");
        await newfile;
    } catch (err) {
        console.error(err);
    }
};

await create();