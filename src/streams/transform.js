import {Transform} from "stream";

const transform = async () => {

    const transformStream = new Transform({
        encoding: 'utf-8',
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split("").reverse().join(""));
    
            callback();
        }
    })

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();