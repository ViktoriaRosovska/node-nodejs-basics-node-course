import { readdir, mkdir, copyFile} from "fs/promises";
import { existsSync} from "fs";
import path from "path";

const copy = async () => {
    try {
        const sourceDir = "files";
        const destDir = "files_copy";
        if (existsSync(sourceDir) && !existsSync(destDir)){
            const files = await readdir(sourceDir);
            await mkdir(destDir);
            for (let file of files) {
                const sourcePath = path.join(sourceDir, file);
                const destPath = path.join(destDir, file);
                await copyFile(sourcePath, destPath);
            }
            console.log('files were successeful copied to files_copy');
        } else {
            throw new Error("FS operation failed");
        }
    } catch(err) {
    console.log(err);
    }
};

await copy();
