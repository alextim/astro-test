import { hrtime } from 'process';

const logExecutionTimeAsync = (f, message) => {
  const start = hrtime.bigint();
  const result = f();

  const end = hrtime.bigint();
  const time = (end - start) / BigInt(1000);
  const s = (Number(time.toString(10)) / 1000).toFixed(3);
  console.log(`${s} ms: ${message}`);
  return result;
};

export default logExecutionTimeAsync;
