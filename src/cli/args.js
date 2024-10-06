const PREFIX = '--';

const parseArgs = () => {
  const result = process.argv.slice(2).reduce((prev,curr) => {
    return curr.startsWith(PREFIX) ? prev + ' ' + curr.slice(2) + ' is ' : prev + curr + ','
  },'').slice(0 , -1);

  console.log(result)
};

parseArgs();