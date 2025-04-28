const parseArgs = () => {
    const argumentsList = process.argv.slice(2);
    const props = [];
    for (let i = 0; i < argumentsList.length; i+=2) {
        if (i + 1 < argumentsList.length){
            if (argumentsList[i].indexOf("--") === -1) continue;
            const key = argumentsList[i].replace("--", "");
            const value = argumentsList[i+1];
            props.push(`${key} is ${value}`);
        }
    }
    console.log(props.join("\n"));
};

parseArgs();