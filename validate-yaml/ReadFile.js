const yaml = require('js-yaml');
const fs = require('fs');
var HashMap = require('hashmap');


module.exports = ReadFile = (path) => {
    const map = new HashMap();
    try {
        const file = fs.readFileSync(path)
        const ymls = file.toString().split("---")
        let indexYml = 0 ;
        if(ymls[0] == ""){
            indexYml = 1 
        }
        const doc = yaml.load(ymls[indexYml])
        const ymlsVariables = doc.spec.template.spec.containers[0].env

        ymlsVariables.forEach(variable => {
            map.set(variable.name, variable.value)
        })
    } catch (e) {
        console.log(e);
    }
    return map
}

