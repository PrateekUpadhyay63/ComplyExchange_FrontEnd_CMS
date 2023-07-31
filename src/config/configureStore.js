import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducers";
import {
  getAllCountriesDataReducer,
  getAllPagesReducer,
  getYearsReducer,
  getSecurityKeysReducer,
  getNumbersReducer,
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
  getUserByIdReducer,
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
  getIgaDropDownReducer,

} from "../redux/Reducers";

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,

      getAllPagesReducer,
      getSecurityKeysReducer,
      getAgentTranslationReducer,
      LanguagesReducer,
      CountriesReducer,
      ParentDropDownReducer,
      createPageReducer,
      getAllContentReducer,
      getNumbersReducer,
      pageDataByIdReducer,
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
      getUserByIdReducer,
      getCountryByIdReducer,
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
      getdocByIdReducer,
      getAgentsImpCountiesReducer,
      getAllRulesReducer,
      getRulesByIdReducer,
      getAgentsHiddenCountiesReducer,
      getCh3HiddenCountiesReducer,
      getCh4HiddenCountiesReducer,
      getCh4ImpCountiesReducer,
      getAllEasyReducer,
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
      getSourcedIncomeOnboardedReducer,
      getAllCountriesDataReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
}
