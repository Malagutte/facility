const ReadFile = require("./ReadFile")
const simpleGit = require('simple-git');
const { execSync } = require("child_process");
const { boolean } = require("yargs");
const { exec } = require("child_process").execSync;


const paths = [
    {
        qa_yml: "../../back_crm_home/back-home-crmqa-deployment.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_home/back-crm-homeprod.yaml"
    },
    {
        qa_yml: "../../back_crm_agent/back-crm-agentqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_agent/back-crm-agent.yaml"
    },
    {
        qa_yml: "../../api_search_fac/api-search-facqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_search_fac/apisearch.yaml"
    },
    {
        qa_yml: "../../api_search_address/api-search-addressqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_search_address/api-search-addressprod.yaml"
    },
    {
        qa_yml: "../../api_company_java/api_companyqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_company_java/api_companyprod.yaml"
    },
    {
        qa_yml: "../../api_agent_java/api_agentqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_agent_java/api_agentprod.yaml"
    },
    {
        qa_yml: "../../back_crm_facs/back-facs-crmqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_facs/back-crmprod-fac.yaml"
    },
    {
        qa_yml: "../../back_crm_home/back-home-crmqa-deployment.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_home/back-crm-homeprod.yaml"
    },


    {
        qa_yml: "../../back_crm_profile/back-crm-profileqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_profile/back-crmprod-profile.yaml"
    },
    {
        qa_yml: "../../back_crmlead_distribution/back-crmlead-distributionqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crmlead-distribution/back-crmlead-distributionprod.yaml"
    },

    {
        qa_yml: "../../api_lead_distribution/api_lead_distributionqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_lead_distribution/api_leadprod-distribution.yaml"
    },
    {
        qa_yml: "../../api_fac_java/api-facqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_fac_java/api_facprod.yaml"
    },
    {
        qa_yml: "../../back_crm_login/back-crm-loginqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_login/back-crm-loginprod.yaml"
    },



    {
        qa_yml: "../../back_crm_profile/back-crm-profileqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_profile/back-crmprod-profile.yaml"
    },
    {
        qa_yml: "../../api_agent_java/api_agentqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_agent_java/api_agentprod.yaml"
    },
    {
        qa_yml: "../../api_company_java/api_companyqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_company_java/api_companyprod.yaml"
    },

    {
        qa_yml: "../../api_notification_java/api-notificationqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_notification_java/api-notificationprod.yaml"
    },
    {
        qa_yml: "../../back_crm_facs/back-facs-crmqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_facs/back-crmprod-fac.yaml"
    },
    {
        qa_yml: "../../back_crm_home/back-home-crmqa-deployment.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_home/back-crm-homeprod.yaml"
    },
    {
        qa_yml: "../../back_crm_profile/back-crm-profileqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_profile/back-crmprod-profile.yaml"
    },
    {
        qa_yml: "../../api_address_java/api_addressqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_address_java/api-adressprod.yaml"
    },



    {
        qa_yml: "../../api_search_address/api-search-addressqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_search_address/api-search-addressprod.yaml"
    },


    {
        qa_yml: "../../back_crm_login/back-crm-loginqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_login/back-crm-loginprod.yaml"
    },
    {
        qa_yml: "../../back_crm_product/back-product-crmqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_product/back-product-crmprod.yaml"
    }

]


const returnFileName = (path) => {
    return path.split('/').pop()
}

const SEARCH_VALUE = "validate_jwt_token"



const printValue = () => {


    paths.forEach(path => {

        const files = path.qa_yml.split('/');
        files.pop()
        const directoryPath = files.join("/");


        const qaValues = ReadFile(path.qa_yml)
       /*  pullAndCheckoutForLastTag(directoryPath) */

        if (qaValues.has(SEARCH_VALUE)) {
            const value = qaValues.get(SEARCH_VALUE)
            const valueBoolean  =  value.split(":")[1]
            if (valueBoolean == "true") {
                console.log("Begin validate file: " + returnFileName(path.qa_yml) + "\n")
                console.log(`- name: ${SEARCH_VALUE} \n  value: \"${value}\"`)
                console.log("==========================================================")
            }

        }
    });
}

const pullAndCheckoutForLastTag = (path) => {

    const commandUpdate = `cd ${path}  && git stash && git checkout develop && git pull`;
    const command = `cd ${path} && git describe --abbrev=0 --tags`;
    execSync(commandUpdate)
    const tag = execSync(command).toString()
    /* const commandCheckout = `cd ${path}  && git stash && git checkout ${tag}`;
    execSync(commandCheckout) */
}

printValue()