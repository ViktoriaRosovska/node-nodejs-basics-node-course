import { existsSync } from "fs";
import {readdir, rename as renameFile} from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const sourceDir = "files";
        const sourceFile = path.join(__dirname, sourceDir,  "wrongFilename.txt");
        const distFile =  path.join(__dirname, sourceDir, "properFilename.md");
        await readdir(path.join(__dirname, sourceDir));
            if (existsSync(distFile) || !existsSync(sourceDir)) {
                throw new Error("FS operation failed");
            }
            await renameFile(sourceFile, distFile);
            console.log("file was renamed")
        } catch(err) {
            console.log(err);
        }
};

await rename();