const parseEnv = () => {
    const prefix = "RSS_";
    const envArray = Object.entries(process.env)
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value]) => `${key} = ${value}`)
        .join("; ");
    console.log(envArray);
};

parseEnv();