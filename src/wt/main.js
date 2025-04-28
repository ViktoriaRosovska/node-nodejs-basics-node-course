import { fileURLToPath } from 'url';
import path from "path";
import { Worker } from 'worker_threads';


const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    const workerPath = path.join(__dirname, 'worker.js');
    const cpu = 4;
    const workerData = [10,11,12,13];
    
    const promices = [];
    for (let i = 0; i < cpu; i++){
        const promise = new Promise((resolve) => {
            const worker = new Worker(workerPath);

            worker.on('message', (message) => {
                if (message.error) {
                    resolve({ status: 'error', data: null });
                } else {
                    resolve({ status: 'resolved', data: message });
                }
            });

            worker.on('error', ()=> {
                resolve({status: 'error', data: null})
            });

            worker.postMessage(workerData[i]);
        });

        promices.push(promise);
    }

    const result = await Promise.all(promices);
    console.log(result);

};

await performCalculations();