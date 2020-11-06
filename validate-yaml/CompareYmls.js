const ReadFile = require("./ReadFile")
const { execSync } = require("child_process");
const paths = require("./ProjectsPath")


const returnFileName = (path) => {
    return path.split('/').pop()
}


const compareMaps = (map, mapToCompare) => {

    const keys = map.keys();

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];

        if (!mapToCompare.has(key)) {
            console.log(`- name: ${key} \n  value: \"${map.get(key)}\"`)
        }

    }

}


const getDiffValues = (map, mapToCompare, values) => {

    const keys = values;

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];

        if (mapToCompare.has(key) && map.has(key)) {
            const value1 = map.get(key).toString();
            const value2 = mapToCompare.get(key).toString();

            if (value1 != value2) {
                console.log(`${key} - CURRENT: ${value1} - PROD: ${value2}`);
            }
        }

    }

}

const CompareQaToProd = () => {
    const pathsToValidate = paths.filter(path => path.should_validate)
    updateProjects(pathsToValidate)

    pathsToValidate.forEach(path => {

        const files = path.qa_yml.split('/');
        files.pop()
        const directoryPath = files.join("/");

        const prodValues = ReadFile(path.prod_yml)
        const qaValues = ReadFile(path.qa_yml)
        const qaTag = getLastTagGit(directoryPath)

        console.log("Begin validate file: " + returnFileName(path.prod_yml) + "\n")
        console.log("Qa Tag: " + qaTag)

        compareMaps(qaValues, prodValues)
        if (path.values) {
            getDiffValues(qaValues, prodValues, path.values)
        }


        console.log("==========================================================")
    });
}

const getLastTagGit = (path) => {
    const command = `cd ${path} && git describe --abbrev=0 --tags`;
    const tag = execSync(command).toString()
    return tag
}


const updateProjects = (paths) => {

    paths.forEach(p => {
        const files = p.qa_yml.split('/');
        files.pop()
        const path = files.join("/");

        const commandUpdate = `cd ${path}  && git stash && git checkout develop && git pull`;
        execSync(commandUpdate)

        const command = `cd ${path} && git describe --abbrev=0 --tags`;
        const tag = execSync(command).toString()

        const commandCheckout = `cd ${path}  && git stash && git checkout ${tag}`
        execSync(commandCheckout)
    })

    console.clear()

}

CompareQaToProd()