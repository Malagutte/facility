const axios = require("axios");


const api = axios.create({
    baseURL: 'http://searchdbcrmqa.lpsbr.com:9200'
});

const apiLocal = axios.create({
    baseURL: 'http://localhost:9200'
});

const facsError = [];


const AddFacElastic = async function (fac) {
    try {
        let path = "/crm_fac/_doc/" + fac.id
        await apiLocal.put(path, fac)
    } catch (error) {
        console.log("Status: " + error.response.status)
        facsError.push(fac.id)
    }

}


const FacsByUser = async function () {
    console.log(new Date() + " Init request");
    const response = await api.post("/crm_fac/_search",
        {
            "size": 50000,
            "query": {
                "bool": {
                    "must": [
                        {
                            "match": {
                                "user.id": "PESS583926"
                            }
                        },
                        {
                            "match": {
                                "archived": false
                            }
                        },
                        {
                            "match": {
                                "discarded": false
                            }
                        }
                    ]
                }
            }
        }
    );
    return response;
}


const job = async function () {
    const response = await FacsByUser();

    console.log(new Date() + " End request")
    const json = JSON.parse(JSON.stringify(response.data));
    const hits = json.hits.hits;

    for (let index = 0; index < hits.length; index++) {
        const fac = hits[index]._source;

        try {
            await AddFacElastic(fac)
            let count = index + 1;
            console.log("Fac: " + fac.id + " " + count + "/" + hits.length)
        } catch (error) {
            facsError.push(fac.id)
        }



    }

    if (facsError.length > 0) {
        console.log("Facs error: " + facsError)
    }
}

job();