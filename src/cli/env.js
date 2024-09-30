const PREFIX = "RSS_";

const parseEnv = () => {
  const envs = process.env;

  const filtredEnvs = Object.entries(envs).filter(([key, _]) => key.startsWith(PREFIX));
  const parcedRes = filtredEnvs.reduce((prev, [key, value], currIndex, arr) => {
    return currIndex === arr.length - 1
      ? prev + key + "=" + value
      : prev + key + "=" + value + "; ";
  }, "");

  console.log(parcedRes);
};

parseEnv();
