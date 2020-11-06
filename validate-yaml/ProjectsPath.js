module.exports = paths = [

    {
        qa_yml: "../../api_notification_java/api-notificationqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_notification_java/api-notificationprod.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../back_crm_facs/back-facs-crmqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_facs/back-crmprod-fac.yaml",
        should_validate: false,
        values: ["country_zipcode", "country_states", "state_locations",
            "location_neighborhoods", "dashboard_get", "dashboard_post",
            "dashboard_post_v2", "dashboard_post_v3", "fac_id_patch", "fac_id_get",
            "fac_id_get_v2", "fac_combos", "search_products", "fac_id_notes",
            "fac_autocomplete", "fac_autocomplete_v2", "fac_id_phone", "fac_id_email",
            "fac_id_history", "fac_id_archive", "fac_id_discard", "fac_id_transfer",
            "fac_bulk_transfer", "combo_product_types", "products_autocomplete",
            "products_address_autocomplete", "combos", "fac_id_search_profile",
            "fac_id_search_profile_id_patch", "fac_id_search_profile_id_delete",
            "task_id", "members", "favorite", "operation_markets", "fac_offered_products",
            "fac_chat_messages", "predefined_messages", "fac_id_chat_message_post",
            "is_leader", "validate_jwt_token", "fac_bulk_discard", "fac_bulk_archive",
            "fac_id_resend_chat_message_post", "fac_bulk_archive_discard_test",
            "create_chat_message_enforce_error", "resend_chat_message_enforce_error"]
    },

    {
        qa_yml: "../../api_fac_java/api-facqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_fac_java/api_facprod.yaml",
        should_validate: false,
        values: []
    },
    {
        qa_yml: "../../api_agent_java/api_agentqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_agent_java/api_agentprod.yaml",
        should_validate: false
    },

    {
        qa_yml: "../../back_crm_agent/back-crm-agentqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_agent/back-crm-agent.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../api_communication_java/api_communicationqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_communication_java/api_communicationprod.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../back_crm_home/back-home-crmqa-deployment.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_home/back-crm-homeprod.yaml",
        should_validate: true
    },
    {
        qa_yml: "../../api_search_fac/api-search-facqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_search_fac/apisearch.yaml",
        should_validate: false,
        values: ["autocomplete_facs", "search_facs", "card_info_token",
            "card_info_id", "scheduled_fac_overdue_notification",
            "scheduled_return_visit_notification", "sort_product_with_regex",
            "validate_jwt_token", "search_fac_notification"]
    },
    {
        qa_yml: "../../front_crm/front_crmqa_k8s.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/front_crm/front_crmprod.yaml",
        should_validate: false,
        values: ["feature_new_broker_profile", "feature_transfer_fac", "feature_table", "feature_operation_markets", "feature_distribution",
            "feature_queue_list", "feature_fac_lead_origin", "feature_log_tab", "feature_reports", "feature_calendar",
            "feature_product_sheet", "feature_check_is_leader_fac", "feature_product_services", "feature_fac_tour", "feature_facs_table_checkbox",
            "feature_refresh_token", "feature_lopes_lead", "feature_input_search"]
    },
    {
        qa_yml: "../../api_search_address/api-search-addressqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_search_address/api-search-addressprod.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../api_company_java/api_companyqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_company_java/api_companyprod.yaml",
        should_validate: false
    },

    {
        qa_yml: "../../back_crm_home/back-home-crmqa-deployment.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_home/back-crm-homeprod.yaml",
        should_validate: false
    },


    {
        qa_yml: "../../back_crm_profile/back-crm-profileqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_profile/back-crmprod-profile.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../back_crmlead_distribution/back-crmlead-distributionqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crmlead-distribution/back-crmlead-distributionprod.yaml",
        should_validate: false
    },

    {
        qa_yml: "../../api_lead_distribution/api_lead_distributionqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_lead_distribution/api_leadprod-distribution.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../api_fac_java/api-facqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_fac_java/api_facprod.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../back_crm_login/back-crm-loginqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_login/back-crm-loginprod.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../back_crm_profile/back-crm-profileqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_profile/back-crmprod-profile.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../api_agent_java/api_agentqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_agent_java/api_agentprod.yaml",
        should_validate: true
    },
    {
        qa_yml: "../../api_company_java/api_companyqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_company_java/api_companyprod.yaml",
        should_validate: false
    },

    {
        qa_yml: "../../api_notification_java/api-notificationqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_notification_java/api-notificationprod.yaml",
        should_validate: false
    },

    {
        qa_yml: "../../back_crm_home/back-home-crmqa-deployment.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_home/back-crm-homeprod.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../back_crm_profile/back-crm-profileqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_profile/back-crmprod-profile.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../api_address_java/api_addressqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/api_address_java/api-adressprod.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../back_crm_login/back-crm-loginqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_login/back-crm-loginprod.yaml",
        should_validate: false
    },
    {
        qa_yml: "../../back_crm_product/back-product-crmqa.yaml",
        prod_yml: "../../k8sprod_deploy_control/lopesk8s/back_crm_product/back-product-crmprod.yaml",
        should_validate: false
    }
]

    ;


