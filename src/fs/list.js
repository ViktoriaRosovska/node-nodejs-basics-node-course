import { existsSync } from "fs";
import { readdir } from "fs/promises";

const list = async () => {
   const sourceDir = "files";
   if (existsSync(sourceDir)){
    const dir = await readdir(sourceDir);
    for (let file of dir){
        console.log(file);
    } 
   } else {
    throw new Error("FS operation failed")
   } 
};

await list();