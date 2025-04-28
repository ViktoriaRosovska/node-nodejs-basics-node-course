import {fileURLToPath} from "url";
import { spawn } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceDir = "files";
    const sourceFile = "script.js";

    const filePath = path.join(__dirname, sourceDir, sourceFile);

    const childFile = spawn('node', [filePath, ...args]);

    process.stdin.pipe(childFile.stdin);

    childFile.stdout.pipe(process.stdout)

    childFile.on('error', (err) => {
        console.log("Error with start children process: ", err);
    })

    childFile.on('exit', (code) => {
        console.log(`Child precess finished with code ${code}`);
    })

};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["someArgument1", "someArgument2", "RSS"]);
