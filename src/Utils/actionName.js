const ActionName = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  USER: "USER",
  ALL_USER: "ALL_USER",
  LOADING: "loading",
  US_TIN_TYPE: "US_TIN_TYPE",
  COUNTRIES: "COUNTRIES",

  LANGUAGES: "LANGUAGE",
  CREATE_LANGUAGE: "CREATE_LANGUAGE",
  GET_LANGUAGE_BY_ID: "GET_LANGUAGE_BY_ID",
  UPDATE_LANGUAGE: "UPDATE_LANGUAGE",
  DELETE_LANGUAGE: "DELETE_LANGUAGE",
  LANG_BY_SEARCH: "LANG_BY_SEARCH",

  //Page API's
  GET_ALL_PAGES: "GET_ALL_PAGES",
  DELETE_PAGE: "DELETE_PAGE",
  CREATE_PAGE: "CREATE_PAGE",
  PARENT_DROPDOWN: "PARENT_DROPDOWN",
  GET_PAGE_BY_ID: "GET_PAGE_BY_ID",
  UPDATE_PAGE: "UPDATE_PAGE",
  GET_SUBPAGE_NO: "GET_SUBPAGE_NO",
  ADD_SUB_PAGE: "ADD_SUB_PAGE",
  GET_PAGE_LANGUAGES: "GET_PAGE_LANGUAGES",

  //countries
  GET_ALL_COUNTRIES: "GET_ALL_COUNTRIES",
  POST_UPSERT_COUNTRIES: "POST_UPSERT_COUNTRIES",
  GET_COUNTRY_BY_ID: "GET_COUNTRY_BY_ID",
  POST_UPSERT_COUNTRY_ARTICLE: "POST_UPSERT_COUNTRY_ARTICLE",
  GET_YEARS: "GET_YEARS",
  GET_MAXNUMBER: "GET_MAXNUMBER",
  GET_COUNTERY_CODE:"GET_COUNTERY_CODE",
  GET_INCOME_CODE: "GET_INCOME_CODE",
  GET_IGA: "GET_IGA",
  IMPORT_COUNTRIES:"IMPORT_COUNTRIES",
 EXPORT_COUNTRIES:"EXPORT_COUNTRIES",

  //HELP
  GET_ALL_HELP_VIDEOS: "GET_ALL_HELP_VIDEOS",
  POST_HELP_VIDEOS: "POST_HELP_VIDEOS",

  //Content API's
  GET_ALL_CONTENT: "GET_ALL_CONTENT",
  GET_CONTENT_BY_ID: "GET_CONTENT_BY_ID",
  UPDATE_CONTENT: "UPDATE_CONTENT",
  IMPORT_CONTENT: "IMPORT_CONTENT",
  EXPORT_CONTENT: "EXPORT_CONTENT",
  GET_CONTENT_LANGUAGE: "GET_CONTENT_LANGUAGE",
  GET_CONTENT_TRANSLATION: "GET_CONTENT_TRANSLATION",
  POST_CONTENT_TRANSLATION: "POST_CONTENT_TRANSLATION",

  // AGENTS API's
  GET_ALL_AGENTS: "GET_ALL_AGENTS",
  CREATE_AGENT: "CREATE_AGENT",
  UPDATE_AGENT: "UPDATE_AGENT",
  DELETE_AGENT: "DELETE_AGENT",

  //Edit Agents
  GET_IMPORTANT_COUNTRIES: "GET_IMPORTANT_COUNTRIES",
  GET_HIDDEN_COUNTRIES: "GET_HIDDEN_COUNTRIES",
  GET_CHAPTER3_HIDDEN_ENTITY: "GET_CHAPTER3_HIDDEN_ENTITY",
  GET_CHAPTER4_HIDDEN_ENTITY: "GET_CHAPTER4_HIDDEN_ENTITY",
  GET_CHAPTER4_IMPORTANT_ENTITY: "GET_CHAPTER4_IMPORTANT_ENTITY",
  GET_CAPACITY_HIDDEN: "GET_CAPACITY_HIDDEN",
  GET_DOCUMENT_MANDATORY: "GET_DOCUMENT_MANDATORY",
  GET_EXEMPTION_CODE_DISABLE: "GET_EXEMPTION_CODE_DISABLE",
  GET_INCOME_CODE_HIDDEN: "GET_INCOME_CODE_HIDDEN",
  GET_US_VISATYPE_HIDDEN: "GET_US_VISATYPE_HIDDEN",

  GET_FATCA_HIDDEN: "GET_FATCA_HIDDEN",
  GET_PAYMENT_TYPE: "GET_PAYMENT_TYPE",
  GET_FATCA_GIIN_DISABLED: "GET_FATCA_GIIN_DISABLED",
  GET_AGENT_SPT_HIDDEN: "GET_AGENT_SPT_HIDDEN",

  POST_IMPORTANT_COUNTRIES: "POST_IMPORTANT_COUNTRIES",
  POST_HIDDEN_COUNTRIES: "POST_HIDDEN_COUNTRIES",
  POST_CHAPTER3_HIDDEN_ENTITY: "POST_CHAPTER3_HIDDEN_ENTITY",
  POST_CHAPTER4_HIDDEN_ENTITY: "POST_CHAPTER4_HIDDEN_ENTITY",
  POST_CHAPTER4_IMPORTANT_ENTITY: "POST_CHAPTER4_IMPORTANT_ENTITY",
  POST_CAPACITY_HIDDEN: "POST_CAPACITY_HIDDEN",
  POST_DOCUMENT_MANDATORY: "POST_DOCUMENT_MANDATORY",
  POST_EXEMPTION_CODE_DISABLE: "POST_EXEMPTION_CODE_DISABLE",
  POST_INCOME_CODE_HIDDEN: "POST_INCOME_CODE_HIDDEN",
  POST_US_VISATYPE_HIDDEN: "POST_US_VISATYPE_HIDDEN",

  POST_FATCA_HIDDEN: "POST_FATCA_HIDDEN",
  POST_PAYMENT_TYPE: "POST_PAYMENT_TYPE",
  POST_FATCA_GIIN_DISABLED: "POST_FATCA_GIIN_DISABLED",
  POST_AGENT_SPT_HIDDEN: "POST_AGENT_SPT_HIDDEN",

  GET_E_FORM_SELECTION_WARNING: "GET_E_FORM_SELECTION_WARNING",
  POST_E_FORM_SELECTION_WARNING: "POST_E_FORM_SELECTION_WARNING",

  //US Income

  GET_SOURCED_INCOME_DATA: "GET_SOURCED_INCOME_DATA",
  POST_SOURCED_INCOME_DATA: "POST_SOURCED_INCOME_DATA",
  GET_SOURCED_INCOME_BY_ID: "GET_SOURCED_INCOME_BY_ID",
  POST_SOURCED_INCOME_HIDDEN: "POST_SOURCED_INCOME_HIDDEN",
  GET_SOURCED_INCOME_HIDDEN: "GET_SOURCED_INCOME_HIDDEN",
  GET_SOURCED_INCOME_ONBOARDED: "GET_SOURCED_INCOME_ONBOARDED",
  POST_SOURCED_INCOME_ONBOARDED: "POST_SOURCED_INCOME_ONBOARDED",

  //Form Types
  GET_ALL_FORM_TYPES: "GET_ALL_FORM_TYPES",
  CREATE_FORM_TYPES: "CREATE_FORM_TYPES",
  GET_FORM_TYPES_BY_ID: "GET_FORM_TYPES_BY_ID",
  GET_FORM_TYPES_SELF_TRANSLATION: "GET_FORM_TYPES_SELF_TRANSLATION",
  CREATE_FORM_TYPES_SELF_TRANSLATION: "CREATE_FORM_TYPES_SELF_TRANSLATION",
  UPDATE_FORM_TYPES: "UPDATE_FORM_TYPES",
  GET_ALL_US_FORM_TYPES: "GET_ALL_US_FORM_TYPES",
  GET_FORM_US_TYPES_BY_ID: "GET_FORM_US_TYPES_BY_ID",
  UPDATE_US_FORM_TYPES: "UPDATE_US_FORM_TYPES",
  GET_SELF_CERTIFICATION: "GET_SELF_CERTIFICATION",
  POST_SELF_CERTIFICATION: "POST_SELF_CERTIFICATION",
  POST_US_TRANSLATION: "POST_US_TRANSLATION",
  GET_US_TRANSLATION: "GET_US_TRANSLATION",

  //LOB
  GET_ALL_LOB: "GET_ALL_LOB",
  UPDATE_LOB: "UPDATE_LOB",
  GET_LOB: "GET_LOB",

  //CAPACITIES
  GET_CAPACITIES_BY_ID: "GET_CAPACITIES_BY_ID",
  GET_ALL_CAPACITIES: "GET_ALL_CAPACITIES",
  POST_INSERT_CAPACITIS: "POST_INSERT_CAPACITIS",
  UPDATE_FROM_CAPACITIES: "UPDATE_FROM_CAPACITIES",
  DELETE_CAPACITIES: "DELETE_CAPACITIES",

  //Documentations

  GET_ALL_DOCUMENTATION: "GET_ALL_DOCUMENTATION",
  DELETE_DOCUMENTAION: "DELETE_DOCUMENTAION",
  GET_DOCUMENTATION_TYPES: "GET_DOCUMENTATION_TYPES",
  CREATE_DOCUMENTATION: "CREATE_DOCUMENTATION",
  UPDATE_DOCUMENTATION: "UPDATE_DOCUMENTATION",

  GET_ALL_FORM_INSTRUCTIONS: "GET_ALL_FORM_INSTRUCTIONS",
  DELETE_FORM_INSTRUCTION: "DELETE_FORM_INSTRUCTION",
  GET_FORM_INSTRUCTION_BY_ID: "GET_FORM_INSTRUCTION_BY_ID",
  INSERT_FORM_INSTRUCTIONS: "INSERT_FORM_INSTRUCTIONS",
  UPDATE_FORM_INSTRUCTIONS: "UPDATE_FORM_INSTRUCTIONS",

  GET_CH3_DOC:"GET_CH3_DOC",
  GET_CH4_DOC:"GET_CH4_DOC",
  GET_CH3_DOC_BY_iD:"GET_CH3_DOC_BY_iD",
  GET_CH4_DOC_BY_iD:"GET_CH4_DOC_BY_iD",



  //Rules Api's

  GET_ALL_RULES: "GET_ALL_RULES",
  CREATE_RULES: "CREATE_RULES",
  UPDATE_RULES: "UPDATE_RULES",
  GET_RULES_BY_ID: "GET_RULES_BY_ID",
  DELETE_RULES: "DELETE_RULES",
  IMPORT_RULES: "IMPORT_RULES",
  EXPORT_RULES: "EXPORT_RULES",

  //Easy Help

  GET_ALL_EASY: "GET_ALL_EASY",
  INSERT_EASY: "INSERT_EASY",
  UPDATE_EASY: "UPDATE_EASY",
  GET_EASY_BY_ID: "GET_EASY_BY_ID",
  DELETE_EASY: "DELETE_EASY",
  IMPORT_EASY: "IMPORT_EASY",
  EXPORT_EASY: "EXPORT_EASY",

  //TRANSLATIONS
  GET_PAGE_TRANSLATION: "GET_PAGE_TRANSLATION",
  INSERT_PAGE_TRANSLATION: "INSERT_PAGE_TRANSLATION",
  GET_EASY_TRANSLATION: "GET_EASY_TRANSLATION",
  INSERT_EASY_TRANSLATION: "INSERT_EASY_TRANSLATION",
  GET_RULE_TRANSLATION: "GET_RULE_TRANSLATION",
  INSERT_RULE_TRANSLATION: "INSERT_RULE_TRANSLATION",

  //Settings API's
  UPSERT_SETTINGS: "UPSERT_SETTINGS",
  GET_SETTINGS: "GET_SETTINGS",
  GET_SETTINGS_QUESTIONS: "GET_SETTINGS_QUESTIONS",
  GET_SETTINGS_TRANSLATION: "GET_SETTINGS_TRANSLATION",
  INSERT_SETTING_TRANSLATION: "INSERT_SETTING_TRANSLATION",

  GET_SETTING_LANGUAGE: "GET_SETTING_LANGUAGE",
  GET_QUESTION_LANGUAGE: "GET_QUESTION_LANGUAGE",
  UPSERT_QUESTION_TRANSLATION: "UPSERT_QUESTION_TRANSLATION",
  GET_HINT_TRANSLATION: "GET_HINT_TRANSLATION",
  UPDATE_QUESTION:"UPDATE_QUESTION",
  COPY_AGENT:"COPY_AGENT",
  GET_AGENT_LANGUAGE: "GET_AGENT_LANGUAGE",
  UPSERT_AGENT_TRANSLATION: "UPSERT_AGENT_TRANSLATION",
  GET_AGENT_TRANSLATION: "GET_AGENT_TRANSLATION",
  EASY_LANGUAGE: "EASY_LANGUAGE",
  RULE_LANGUAGES: "RULE_LANGUAGES",
  US_FORM_LANGUAGES: "US_FORM_LANGUAGES",
  SELF_FORM_LANGUAGES: "SELF_FORM_LANGUAGES",

  GET_SECURITY_KEY: "GET_SECURITY_KEY",
  UPSERT_SECURITY_KEY: "UPSERT_SECURITY_KEY",

  // ADMIN
  GET_USER_BY_ID: "GET_USER_BY_ID",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  UPDATE_USER: "UPDATE_USER",
};

export default ActionName;
