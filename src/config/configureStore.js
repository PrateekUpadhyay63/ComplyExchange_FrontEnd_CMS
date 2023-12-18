import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducers";
import {
  getAllCountriesDataReducer,
  getAllPagesReducer,
  getdocCH3Reducer,
  getYearsReducer,
  getdocch3ReducerById,
  getSecurityKeysReducer,
  getNumbersReducer,
  getCountryCodesReducer,
  getCountryArticleReducer,
  getAgentTranslationReducer,
  CountriesReducer,
  LanguagesReducer,
  ParentDropDownReducer,
  createPageReducer,
  getAllContentReducer,
  pageDataByIdReducer,
  getAllHelpVideoReducer,
  getAgentByIdReducer,
  getContentByIdReducer,
  updateContentReducer,
  getAllAgentReducer,
  getAllFormTypesReducer,
  getAllUSFormTypesReducer,
  getFormTypeByIdReducer,
  getUSFormTypeByIdReducer,
  getLanguageByIdReducer,
  getAllContentTypeByIdReducer,
  getLangReducer,
  getCountryByIdReducer,
  getAllLobReducer,
  getSubPageIDReducer,
  getLobReducer,
  getCapacitiesById,
  getAllDocumentaionReducer,
  getAllCapacitiesReducer,
  getAllAgentsReducer,
  getAllFormInstructionReducer,
  getFormInstructionByIdReducer,
  getdocTypeReducer,
  getIncomeReducer,
  getdocByIdReducer,
  getAgentsImpCountiesReducer,
  getAllRulesReducer,
  getRulesByIdReducer,
  getAgentsHiddenCountiesReducer,
  getCh3HiddenCountiesReducer,
  getCh4HiddenCountiesReducer,
  getCh4ImpCountiesReducer,
  getAllEasyReducer,
  getEasyByIdReducer,
  getTranslatedPageReducer,
  getTranslatedEasyReducer,
  agentDataByIdReducer,
  getUSVisaTypeHiddenReducer,
  getIncomeCodeHiddenReducer,
  getExemptCodeDisableReducer,
  getDocumentMandatoryReducer,
  getCapacityHiddenReducer,
  getRulesTranslationReducer,
  getFatcaHiddenReducer,
  getdocCH4Reducer,
  getdocCH4ReducerById,
  getPaymentTypeReducer,
  getFatcaGiinDiabledReducer,
  getAgentSptHiddenReducer,
  getPageLanguageReducer,
  getSourcedIncomeDataIdReducer,
  getSettingsQuestionsReducer,
  getSettingsReducer,
  getSettingsTranslationReducer,
  getSourcedIncomeHiddenReducer,
  getSelfFormTypesTranslation,
  getSourcedIncomeDataReducer,
  AgentLanguageReducer,
  EasyLanguageReducer,
  rulesLanguageReducer,
  usFormReducer,
  selfFormReducer,
  getSettingQuestionReducer,
  getSettingHintReducer,
  getHintTranslationReducer,
  getLangListReducer,
  ExportEasyReducer,
  getSourcedIncomeOnboardedReducer,
  ExportRuleReducer,
  getSelfCertificationReducer,
  getAllUsersReducer,
  getUserByIdReducer,
  getCountryArticleByIdReducer,
  getIgaDropDownReducer,
  getEformSelectionWarningReducer,

} from "../redux/Reducers";

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,

      getAllPagesReducer,
      getSecurityKeysReducer,
      getAgentTranslationReducer,
      LanguagesReducer,
      getdocch3ReducerById,
      getdocCH4Reducer,
      CountriesReducer,
      ParentDropDownReducer,
      createPageReducer,
      getAllContentReducer,
      getNumbersReducer,
      pageDataByIdReducer,
      getAgentByIdReducer,
      getdocCH3Reducer,
      getCountryArticleByIdReducer,
      getContentByIdReducer,
      updateContentReducer,
      getAllAgentReducer,
      getAllFormTypesReducer,
      getAllUSFormTypesReducer,
      getFormTypeByIdReducer,
      getUSFormTypeByIdReducer,
      getLanguageByIdReducer,
      getAllContentTypeByIdReducer,
      getLangReducer,
      getCountryByIdReducer,
      getdocCH4ReducerById,
      getAllLobReducer,
      getSubPageIDReducer,
      getLobReducer,
      getCapacitiesById,
      getAllDocumentaionReducer,
      getAllCapacitiesReducer,
      getAllHelpVideoReducer,
      getAllAgentsReducer,
      getAllFormInstructionReducer,
      getFormInstructionByIdReducer,
      getdocTypeReducer,
      getIncomeReducer,
      getCountryCodesReducer,
      getCountryArticleReducer,
      getdocByIdReducer,
      getAgentsImpCountiesReducer,
      getAllRulesReducer,
      getRulesByIdReducer,
      getAgentsHiddenCountiesReducer,
      getCh3HiddenCountiesReducer,
      getCh4HiddenCountiesReducer,
      getCh4ImpCountiesReducer,
      getAllEasyReducer,
      getUserByIdReducer,
      getYearsReducer,
      getEasyByIdReducer,
      getTranslatedPageReducer,
      getTranslatedEasyReducer,
      getSelfFormTypesTranslation,
      getSourcedIncomeDataReducer,
      agentDataByIdReducer,
      getUSVisaTypeHiddenReducer,
      getIncomeCodeHiddenReducer,
      getExemptCodeDisableReducer,
      getDocumentMandatoryReducer,
      getCapacityHiddenReducer,
      getRulesTranslationReducer,
      getFatcaHiddenReducer,
      getPaymentTypeReducer,
      getFatcaGiinDiabledReducer,
      getAgentSptHiddenReducer,
      getPageLanguageReducer,
      getSourcedIncomeHiddenReducer,
      getSourcedIncomeDataIdReducer,
      getSettingsQuestionsReducer,
      getSettingsReducer,
      getSettingsTranslationReducer,
      AgentLanguageReducer,
      EasyLanguageReducer,
      rulesLanguageReducer,
      usFormReducer,
      selfFormReducer,
      getSettingQuestionReducer,
      getSettingHintReducer,
      getHintTranslationReducer,
      getLangListReducer,
      ExportEasyReducer,
      ExportRuleReducer,
      getSelfCertificationReducer,
      getAllUsersReducer,
      getIgaDropDownReducer,
      getEformSelectionWarningReducer,
      getSourcedIncomeOnboardedReducer,
      getAllCountriesDataReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
}
