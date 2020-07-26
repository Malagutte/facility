const ReadFile = require("./ReadFile")

const paths = []

const setPaths = () => {
    paths.push({
        qa_yml: "",
        prod_yml: ""
    })
}

const returnFileName = (path) => {
    const files = path.split('/')
    const indexFile = files.length - 1;
    return files[indexFile]
}


const compareMaps = (map, mapToCompare) => {

    const keys = map.keys();

    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];

        if (!mapToCompare.has(key)) {
            console.log(key)
        }

    }

}

const CompareQaToProd = () => {
    setPaths()

    paths.forEach(path => {


        console.log("Begin validate file: " + returnFileName(path.prod_yml) + "\n")

        let prodValues = ReadFile(path.prod_yml)
        let qaValues = ReadFile(path.qa_yml)

        compareMaps(qaValues, prodValues)

        console.log("==========================================================")


    });
}

CompareQaToProd()