const endPoint = {
   LOGIN: "Account/SignIn",
   SIGNUP: "Account/SignUp",
   USER:"Account/GetUser",
   ALL_USER:"Account/GetAllUser",
  // forgotPassword: "/forget-password",
  // resendOtp: "/resend-otp",
  // verifyOTP: "/verify-otp",
  // resetPassword: "/reset-password",
  COUNTRIES: "Country/GetAllCountries",
  //Languages
  LANGUAGES: "Language/GetAllLanguage",
  CREATE_LANGUAGE: "Language/InsertLanguage",
  GET_LANGUAGE_BY_ID: "Language/GetLanguageById",
  UPDATE_LANGUAGE: "Language/UpdateLanguage",
  DELETE_LANGUAGE: "Language/LangugaeDelete",
  LANG_BY_SEARCH:"Language/LanguageSearch",
  //PAGES API
  GET_ALL_PAGES: "Page/GetAllPages",
  DELETE_PAGE: "Page/Delete",
  CREATE_PAGE: "Page/InsertPage",
  PARENT_DROPDOWN: "Page/ParentDopDown",
  GET_PAGE_BY_ID: "Page/GetPageById",
  UPDATE_PAGE: "Page/Update",
  GET_SUBPAGE_NO: "Page/GetCountBySubPageId",
  ADD_SUB_PAGE: "Page/InsertSubPages",
  GET_PAGE_LANGUAGES:"/Page/GetAllLanguage",

 //Countries
 GET_ALL_COUNTRIES:"/Countries/GetAllCountries",
 POST_UPSERT_COUNTRIES:"/Countries/UpsertCountryArticle",

  //Content API
  GET_ALL_CONTENT: "ContentManagement/GetAllContent",
  GET_CONTENT_BY_ID: "ContentManagement/GetContentById",
  UPDATE_CONTENT: "ContentManagement/Update",
  IMPORT_CONTENT:"ContentManagement/Import",
  EXPORT_CONTENT:"ContentManagement/Export",
  GET_CONTENT_LANGUAGE:"ContentManagement/GetAllLanguage",
  GET_CONTENT_TRANSLATION:"ContentManagement/GetContentTranslation",
  POST_CONTENT_TRANSLATION:"ContentManagement/InsertContentTranslation",

  // Agents API's
  GET_ALL_AGENTS: "Agent/GetAllAgents",
  CREATE_AGENT: "Agent/Create",
  UPDATE_AGENT: "Agent/Update",
  DELETE_AGENT: "Agent/Delete",
  GET_AGENT_BY_ID: "Agent/GetAgentById",
  GET_AGENT_LANGUAGE: "Agent/GetAllLanguage",
  UPSERT_AGENT_TRANSLATION:"Agent/UpsertAgentTranslation",
  GET_AGENT_TRANSLATION:"Agent/GetAgentTranslation",


  //Edit Agents API's
  GET_IMPORTANT_COUNTRIES: "AgentEditList/GetAgentCountriesImportant",
  GET_HIDDEN_COUNTRIES: "AgentEditList/GetAgentCountriesHidden",
  GET_CHAPTER3_HIDDEN_ENTITY: "AgentEditList/GetAgentChapter3EntityTypeHidden",
  GET_CHAPTER4_HIDDEN_ENTITY: "AgentEditList/GetAgentChapter4EntityTypeHidden",
  GET_CHAPTER4_IMPORTANT_ENTITY: "AgentEditList/GetAgentChapter4EntityTypeImportant",
  POST_IMPORTANT_COUNTRIES: "AgentEditList/UpsertAgentCountriesImportant",
  POST_HIDDEN_COUNTRIES: "AgentEditList/UpsertAgentCountriesHidden",
  POST_CHAPTER3_HIDDEN_ENTITY:
    "AgentEditList/UpsertAgentChapter3EntityTypeHidden",
  POST_CHAPTER4_HIDDEN_ENTITY:
    "AgentEditList/UpsertAgentChapter4EntityTypeHidden",
  POST_CHAPTER4_IMPORTANT_ENTITY:
    "AgentEditList/UpsertAgentChapter4EntityTypeImportant",
    GET_CAPACITY_HIDDEN:"AgentEditList/GetAgentCapacityHidden",
    POST_CAPACITY_HIDDEN:"AgentEditList/UpsertAgentCapacityHidden",
    GET_DOCUMENT_MANDATORY:"AgentEditList/GetAgentDocumentationMandatory",
    POST_DOCUMENT_MANDATORY:"AgentEditList/UpsertAgentDocumentationMandatory",
    GET_EXEMPTION_CODE_DISABLE:"AgentEditList/GetAgentExemptionCodeDisabled",
    POST_EXEMPTION_CODE_DISABLE:"AgentEditList/UpsertAgentExemptionCodeDisabled",
    GET_INCOME_CODE_HIDDEN:"AgentEditList/GetAgentIncomeCodeHidden",
    POST_INCOME_CODE_HIDDEN:"AgentEditList/UpsertAgentIncomeCodeHidden",
    GET_US_VISATYPE_HIDDEN:"AgentEditList/GetAgentUSVisaTypeHidden",
    POST_US_VISATYPE_HIDDEN:"AgentEditList/UpsertAgentUSVisaTypeHidden",
    POST_FATCA_HIDDEN:"AgentEditList/UpsertAgentFATCAExemptionCodeHidden",
    POST_PAYMENT_TYPE:"AgentEditList/UpsertAgentPaymentType",
    POST_FATCA_GIIN_DISABLED:"AgentEditList/UpsertAgentFATCAEntityGIINChallengeDisabled",
    POST_AGENT_SPT_HIDDEN:"AgentEditList/UpsertAgentSPTQuestionHidden",
    GET_FATCA_HIDDEN:"AgentEditList/GetAgentFATCAExemptionCodeHidden",
    GET_PAYMENT_TYPE:"AgentEditList/GetAgentPaymentType",
    GET_FATCA_GIIN_DISABLED:"AgentEditList/GetAgentFATCAEntityGIINChallengeDisabled",
    GET_AGENT_SPT_HIDDEN:"AgentEditList/GetAgentSPTQuestionHidden",


    //US sourced Income
    GET_SOURCED_INCOME_DATA:"AgentUSSourceIncome/GetUSSourcedIncomeTypeSelection",
    POST_SOURCED_INCOME_DATA:"AgentUSSourceIncome/UpsertUSSourcedIncomeTypeSelection",
    GET_SOURCED_INCOME_BY_ID:"AgentUSSourceIncome/GetUSSourcedIncomeTypeSelectionById",
    POST_SOURCED_INCOME_HIDDEN:"AgentUSSourceIncome/UpsertAgentIncomeTypeHidden",
    GET_SOURCED_INCOME_HIDDEN:"AgentUSSourceIncome/GetAgentIncomeTypeHidden",
    GET_SOURCED_INCOME_ONBOARDED:"AgentUSSourceIncome/GetAgentHiddenIncomeCodeOnboarding",
    POST_SOURCED_INCOME_ONBOARDED:"AgentUSSourceIncome/UpsertAgentHiddenIncomeCodeOnboarding",
  //Form types

  GET_ALL_FORM_TYPES: "FormTypes/GetAllFormTypes",
  CREATE_FORM_TYPES: "FormTypes/InsertSC",
  GET_FORM_TYPES_BY_ID: "FormTypes/GetFormTypeById",
  GET_FORM_TYPES_SELF_TRANSLATION: "FormTypes/GetFormTypeSelfCertiTranslation",
  CREATE_FORM_TYPES_SELF_TRANSLATION: "FormTypes/InsertFormTypeSelfCertiTranslation",
  UPDATE_FORM_TYPES: "FormTypes/UpdateSC",
  GET_ALL_US_FORM_TYPES: "FormTypes/GetAllUSFormTypes",
  GET_FORM_US_TYPES_BY_ID: "FormTypes/GetUSFormTypeId",
  UPDATE_US_FORM_TYPES: "FormTypes/UpdateUSC",
  SELF_FORM_LANGUAGES:"FormTypes/GetAllSelfLanguage",
  US_FORM_LANGUAGES:"FormTypes/GetAllUSLanguage",
  GET_SELF_CERTIFICATION:"AgentSelfCertification/GetAgentSelfCertificationHidden",
  POST_SELF_CERTIFICATION:"AgentSelfCertification/UpsertAgentSelfCertificationHidden",
  POST_US_TRANSLATION:"FormTypes/InsertFormTypeUSCTranslation",
  GET_US_TRANSLATION:"FormTypes/GetFormTypeUSCTranslation",


  //LOB

  GET_ALL_LOB: "LOB/GetAllLOB",
  UPDATE_LOB: "LOB/InsertLOB",
  GET_LOB: "/LOB/GetLOB",

  //Capacities

  GET_CAPACITIES_BY_ID: "Capacities/GetCapacitiesById",
  GET_ALL_CAPACITIES: "Capacities/GetAllCapacities",
  POST_INSERT_CAPACITIS: "Capacities/InsertCapacities",
  UPDATE_FROM_CAPACITIES: "Capacities/UpdateCapacities",
  DELETE_CAPACITIES: "Capacities/DeleteCapacities",

  // Documentation

  GET_ALL_DOCUMENTATION: "Documentation/GetAllDocumentation",
  DELETE_DOCUMENTAION: "Documentation/DocumentationDelete",
  GET_DOCUMENTATION_TYPES: "Documentation/GetDocumentationTypes",
  GET_DOCUMENTAION_BY_ID: "Documentation/GetDocumentationById",
  CREATE_DOCUMENTATION: "Documentation/InsertDocumentation",
  UPDATE_DOCUMENTATION: "Documentation/UpdateDocumentation",

  GET_ALL_FORM_INSTRUCTIONS: "FormInstructions/GetAllFormInstructions",
  DELETE_FORM_INSTRUCTION: "FormInstructions/DeleteFormInstructions",
  GET_FORM_INSTRUCTION_BY_ID: "FormInstructions/GetFormInstructionsById",
  INSERT_FORM_INSTRUCTIONS: "FormInstructions/InsertFormInstructions",
  UPDATE_FORM_INSTRUCTIONS: "FormInstructions/UpdateFormInstructions",

  //Rules Api's

  GET_ALL_RULES: "Rule/GetAllRules",
  CREATE_RULES: "Rule/InsertRules",
  UPDATE_RULES: "Rule/UpdateRules",
  GET_RULES_BY_ID: "Rule/GetRulesById",
  DELETE_RULES: "Rule/RulesDelete",
  RULE_LANGUAGES:"Rule/GetAllLanguage",
  IMPORT_RULES:"Rule/Import",
  EXPORT_RULES:"Rule/Export",

  //EASY HELP

  GET_ALL_EASY: "EasyHelp/GetAllEasyHelp",
  INSERT_EASY: "EasyHelp/InsertEasyHelp",
  UPDATE_EASY: "EasyHelp/UpdateEasyHelp",
  GET_EASY_BY_ID: "EasyHelp/GetEasyHelpById",
  DELETE_EASY: "EasyHelp/EasyHelpDelete",
  EASY_LANGUAGE:"EasyHelp/GetAllLanguage",
  IMPORT_EASY:"EasyHelp/Import",
  EXPORT_EASY:"EasyHelp/Export",
  //Translations
  GET_PAGE_TRANSLATION: "Page/GetPageTranslation",
  INSERT_PAGE_TRANSLATION: "Page/InsertTranslation",
  GET_EASY_TRANSLATION: "EasyHelp/GetEasyHelpTranslation",
  INSERT_EASY_TRANSLATION: "EasyHelp/InsertEasyHelpTranslation",
  GET_RULE_TRANSLATION: "Rule/GetRuleTranslation",
  INSERT_RULE_TRANSLATION: "Rule/InsertRuleTranslation",

  //Settings API's
  UPSERT_SETTINGS:"Setting/UpsertSetting",
  GET_SETTINGS:"Setting/GetSetting",
  GET_SETTINGS_QUESTIONS:"Setting/GetQuestion",
  GET_SETTINGS_TRANSLATION:"Setting/GetQuestionTranslation",
  INSERT_SETTING_TRANSLATION:"Setting/InsertQuestionTranslation",
  GET_SETTING_LANGUAGE:"Setting/GetAllLanguage",
  GET_QUESTION_LANGUAGE:"Setting/GetAllHintLanguage",
  UPSERT_QUESTION_TRANSLATION:"Setting/UpsertQuestionTranslation",
  GET_HINT_TRANSLATION:"Setting/GetQuestionHintTranslation",

  //Security keys
  GET_SECURITY_KEY:"SecurityKey/GetSecurity",
  UPSERT_SECURITY_KEY:"SecurityKey/UpsertSecurity",

  //Administrator
  GET_USER_BY_ID:"Account/GetUser",
  CHANGE_PASSWORD:"Account/ChangePassword",
  UPDATE_USER:"Account/UpdateUser",

 
  
};

export default endPoint;
