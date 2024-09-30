import { availableParallelism } from "node:os";
import { Worker } from "node:worker_threads";
import { normalize } from "node:path";

const CPU_NUMBER = availableParallelism();
const WORKER_PATH = normalize(`${import.meta.dirname}/worker`);

const performCalculations = async () => {
  const resultsArr = [];
  let workingTreads = CPU_NUMBER;

  for (let i = 0; i < CPU_NUMBER; i++) {
    const worker = new Worker(WORKER_PATH, { workerData: { number: i + 10 } });

    worker.on("message", (data) => {

      resultsArr[i] = {status: 'resolved', data};

      --workingTreads;
      if (!workingTreads) {
        console.log(resultsArr);
      }
    });

    worker.on('error', ()=> {

        resultsArr[i] = {status: 'error', data: null}

        --workingTreads;
        if (!workingTreads) {
          console.log(resultsArr);
        }
    })
  }
};

await performCalculations();
