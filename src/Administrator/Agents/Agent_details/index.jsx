import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FormLabel from '@mui/material/FormLabel'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState } from 'draft-js'
import { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined'
import { Editor } from 'react-draft-wysiwyg'
import Utils from "../../../Utils";
import {
  TextField,
  div,
  Collapse,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
  Card,
  Divider,
  Grid,
  Breadcrumbs,Link,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Input
} from '@mui/material'
import './index.scss'
import draftToHtml from 'draftjs-to-html'
import {
  convertToRaw,
  convertFromRaw,
  ContentState,
  convertFromHTML
} from 'draft-js'
import { createAgents, getAgentById, getAllCountries, updateAgents } from '../../../redux/Actions'

// Layout

import AppHeader from '../../../Layout/AppHeader/'
import AppSidebar from '../../../Layout/AppSidebar/'
import AppFooter from '../../../Layout/AppFooter/'

// Theme Options

import ThemeOptions from '../../../Layout/ThemeOptions/'

function UserManagement ({ match }) {
  let params = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  const idAgentData = useSelector(state => state.getAgentByIdReducer)
  const countryList = useSelector(state => state.CountriesReducer)

  console.log(countryList)

  useEffect(() => {
    // Component mounted, initialize the editor states
    setEditorState1(EditorState.createEmpty())
    setEditorState2(EditorState.createEmpty())
    setEditorState3(EditorState.createEmpty())
    setEditorState4(EditorState.createEmpty())
    setEditorState5(EditorState.createEmpty())
    dispatch(getAllCountries())
  }, [])

  const [data, setData] = useState(
    params.id
      ? {
          id: params.id,
          name: '',
          w9RequestorName: '',
          line1: '',
          line2: '',
          cityTown: '',
          stateProvince: '',
          zipPostalCode: '',
          countryId: 0,
          other: '',
          defaultSelection: false,
          defaultLanguageId: 0,
          includeDefaultEnglish: false,
          logoId: 0,
          logoNavigateURL: '',
          pdfWatermark: '',
          displayVersion: false,
          displayRenderTime: false,
          formFeedUsername: '',
          formFeedPassword: '',
          tinCheckUsername: '',
          tinCheckPassword: '',
          supportsTINValidation: false,
          continueAfterTINValidationFailure: false,
          termsAndConditions: '',
          tokenEmail: '',
          onboardingAPIActive: false,
          skipAHDPage: false,
          skipTCPage: false,
          storeCDFOnTheFly: false,
          storeCDFAndFormOnAfterFormSubmission: false,
          showUIDEntryFieldInTheEntityDetailsScreen: false,
          showUIDEntryFieldInTheEntityDetailsScreenRequiredFormat: '',
          showUIDEntryFieldInTheEntityDetailsScreenIncludeUIDOnReferenceLine: false,
          updateCDFRecordOnTheFly: false,
          allowSecondSignatureSubmission: false,
          allowSecondSignatureSubmissionUseSameAgent: false,
          allowSecondSignatureSubmissionSecondSubmissionMandatory: false,
          includeAdditionalInformationOnESubmitPDF: false,
          showUSourcedIncomeDeclaration: false,
          showUSourcedIncomeDeclarationAndWhenNoUSSourcedIncomeHideChapter4AndDREPage: false,
          showRetroactiveStatementOnlyShowApplyForW8Forms: false,
          showRetroactiveStatementOnlyShowApplyForW8FormsRenderFullScreen: false,
          showRetroactiveStatementOnlyShowApplyForW8FormsMakeMandatory: false,
          enableSaveExitProcess: false,
          enableAllocationStatementCreation: false,
          consentToSendAnElectronic1042SOr1099: false,
          enableExemptFromBackupWithholdingPagePopUp: false,
          hideDownloadTemplateToCompleteWithholdingStatement: false,
          requestBankAccountInformation: false,
          requestBankAccountInformationAndWhenYesMakeMandatory: false,
          hideW8BENETreaty14C: false,
          forms: false,
          federalTax: false,
          singleUSOwnerDetails: false,
          taxpayerInformation_IndividualOnly: false,
          taxpayerInformation_EntityOnly: false,
          taxpayerInformation_NonUSEntityOnly: false,
          taxpayerInformation_GIIN: false,
          formSelection: false,
          w8IMYRelatedFiles: false,
          w8BENJuly2017PartIIWhenTreatyClaimNo: false,
          w8BENEPartIIIWhenTreatyClaimNo: false,
          penaltiesOfPerjuryCertification8233: false,
          electronicSignature8233: false,
          nameAndAddress: false,
          chapter3Status: false,
          usSourcedIncomeDeclarationOptional: false,
          incomeCode: false,
          unitedStatesCitizenshipStatus: false,
          unitedStatesSubstantialPresenceTestOptional: false,
          usfatcaClassification: false,
          chapter4Status: false,
          disregardedEntity: false,
          exemptionFromBackupWithholding: false,
          exemptionFromFATCAReporting: false,
          taxIdentificationNumber: false,
          specifiedUSPersonDetermination: false,
          eciIncomeReport: false,
          treatyClaimBEN: false,
          treatyClaimBENE: false,
          specialRatesAndConditions: false,
          supportingDocumentationW9: false,
          supportingDocumentationBEN: false,
          supportingDocumentationBENE: false,
          supportingDocumentationIMY: false,
          supportingDocumentationEXP: false,
          penaltiesOfPerjuryCertificationW9: false,
          supportingDocumentationECI: false,
          electronicSignatureW9: false,
          penaltiesOfPerjuryCertifcationBENE: false,
          penaltiesOfPerjuryCertificationBEN: false,
          electronicSignatureBEN: false,
          penaltiesOfPerjuryCertificationIMY: false,
          electronicSignatureIMY: false,
          penaltiesOfPerjuryCertificationEXP: false,
          electronicSignatureEXP: false,
          penaltiesOfPerjuryCertificationECI: false,
          electronicSignatureECI: false,
          usTaxCertificationComplete: false,
          substantialUSPresenceTest: false,
          identificationOfBeneficialOwner: false,
          supportingDocumentation8233: false,
          penaltiesOfPerjuryCertificationSelfCertEntity: false,
          electronicSignatureSelfCertEntity: false,
          penaltiesOfPerjuryCertificationSelfCertIndividual: false,
          electronicSignatureSelfCertIndividual: false,
          w9ExemptFromBUWIndividualSolePs: false,
          residencyInformationForm: false,
          addressLine3Optional: false,
          capacitydonotshowforEntities: false,
          capacitydonotshowforIndividuals: false,
          formSelectionGuideDirectRequestQuestion: false,
          formSelectionGuideREITQuestion: false,
          generalClassification: false,
          languageDropdown: false,
          multipleTaxJurisdictions: false,
          retroactiveStatement: '',
          retroactiveEffectiveDate: '',
          doNotAcceptURL: '',
          finishURL: '',
          exitURL: '',
          saveAndExitURL: '',
          taxpayerInformation_NonUSIndividualOnly: false
        }
      : {
          name: '',
          w9RequestorName: '',
          line1: '',
          line2: '',
          cityTown: '',
          stateProvince: '',
          zipPostalCode: '',
          countryId: 0,
          other: '',
          defaultSelection: false,
          defaultLanguageId: 0,
          includeDefaultEnglish: false,
          logoId: 0,
          logoNavigateURL: '',
          pdfWatermark: '',
          displayVersion: false,
          displayRenderTime: false,
          formFeedUsername: '',
          formFeedPassword: '',
          tinCheckUsername: '',
          tinCheckPassword: '',
          supportsTINValidation: false,
          continueAfterTINValidationFailure: false,
          termsAndConditions: '',
          tokenEmail: '',
          onboardingAPIActive: false,
          skipAHDPage: false,
          skipTCPage: false,
          storeCDFOnTheFly: false,
          storeCDFAndFormOnAfterFormSubmission: false,
          showUIDEntryFieldInTheEntityDetailsScreen: false,
          showUIDEntryFieldInTheEntityDetailsScreenRequiredFormat: '',
          showUIDEntryFieldInTheEntityDetailsScreenIncludeUIDOnReferenceLine: false,
          updateCDFRecordOnTheFly: false,
          allowSecondSignatureSubmission: false,
          allowSecondSignatureSubmissionUseSameAgent: false,
          allowSecondSignatureSubmissionSecondSubmissionMandatory: false,
          includeAdditionalInformationOnESubmitPDF: false,
          showUSourcedIncomeDeclaration: false,
          showUSourcedIncomeDeclarationAndWhenNoUSSourcedIncomeHideChapter4AndDREPage: false,
          showRetroactiveStatementOnlyShowApplyForW8Forms: false,
          showRetroactiveStatementOnlyShowApplyForW8FormsRenderFullScreen: false,
          showRetroactiveStatementOnlyShowApplyForW8FormsMakeMandatory: false,
          enableSaveExitProcess: false,
          enableAllocationStatementCreation: false,
          consentToSendAnElectronic1042SOr1099: false,
          enableExemptFromBackupWithholdingPagePopUp: false,
          hideDownloadTemplateToCompleteWithholdingStatement: false,
          requestBankAccountInformation: false,
          requestBankAccountInformationAndWhenYesMakeMandatory: false,
          hideW8BENETreaty14C: false,
          forms: false,
          federalTax: false,
          singleUSOwnerDetails: false,
          taxpayerInformation_IndividualOnly: false,
          taxpayerInformation_EntityOnly: false,
          taxpayerInformation_NonUSEntityOnly: false,
          taxpayerInformation_GIIN: false,
          formSelection: false,
          w8IMYRelatedFiles: false,
          w8BENJuly2017PartIIWhenTreatyClaimNo: false,
          w8BENEPartIIIWhenTreatyClaimNo: false,
          penaltiesOfPerjuryCertification8233: false,
          electronicSignature8233: false,
          nameAndAddress: false,
          chapter3Status: false,
          usSourcedIncomeDeclarationOptional: false,
          incomeCode: false,
          unitedStatesCitizenshipStatus: false,
          unitedStatesSubstantialPresenceTestOptional: false,
          usfatcaClassification: false,
          chapter4Status: false,
          disregardedEntity: false,
          exemptionFromBackupWithholding: false,
          exemptionFromFATCAReporting: false,
          taxIdentificationNumber: false,
          specifiedUSPersonDetermination: false,
          eciIncomeReport: false,
          treatyClaimBEN: false,
          treatyClaimBENE: false,
          specialRatesAndConditions: false,
          supportingDocumentationW9: false,
          supportingDocumentationBEN: false,
          supportingDocumentationBENE: false,
          supportingDocumentationIMY: false,
          supportingDocumentationEXP: false,
          penaltiesOfPerjuryCertificationW9: false,
          supportingDocumentationECI: false,
          electronicSignatureW9: false,
          penaltiesOfPerjuryCertifcationBENE: false,
          penaltiesOfPerjuryCertificationBEN: false,
          electronicSignatureBEN: false,
          penaltiesOfPerjuryCertificationIMY: false,
          electronicSignatureIMY: false,
          penaltiesOfPerjuryCertificationEXP: false,
          electronicSignatureEXP: false,
          penaltiesOfPerjuryCertificationECI: false,
          electronicSignatureECI: false,
          usTaxCertificationComplete: false,
          substantialUSPresenceTest: false,
          identificationOfBeneficialOwner: false,
          supportingDocumentation8233: false,
          penaltiesOfPerjuryCertificationSelfCertEntity: false,
          electronicSignatureSelfCertEntity: false,
          penaltiesOfPerjuryCertificationSelfCertIndividual: false,
          electronicSignatureSelfCertIndividual: false,
          w9ExemptFromBUWIndividualSolePs: false,
          residencyInformationForm: false,
          addressLine3Optional: false,
          capacitydonotshowforEntities: false,
          capacitydonotshowforIndividuals: false,
          formSelectionGuideDirectRequestQuestion: false,
          formSelectionGuideREITQuestion: false,
          generalClassification: false,
          languageDropdown: false,
          multipleTaxJurisdictions: false,
          retroactiveStatement: '',
          retroactiveEffectiveDate: '',
          doNotAcceptURL: '',
          finishURL: '',
          exitURL: '',
          saveAndExitURL: '',
          taxpayerInformation_NonUSIndividualOnly: false
        }
  )

  const [submit, setSubmit] = useState('1')
  const [countries, setCountries] = useState()
  const handleFile = event => {
    const selectedSubmit = event.target.value
    setSubmit(selectedSubmit)
  }

  const [open, setOpen] = useState('')
  const [editorState1, setEditorState1] = useState(EditorState.createEmpty())
  const [editorState2, setEditorState2] = useState(EditorState.createEmpty())
  const [editorState3, setEditorState3] = useState(EditorState.createEmpty())
  const [editorState4, setEditorState4] = useState(EditorState.createEmpty())
  const [editorState5, setEditorState5] = useState(EditorState.createEmpty())
  const [editorState6, setEditorState6] = useState(EditorState.createEmpty())

  useEffect(() => {
    if (params.id) {
      dispatch(
        getAgentById(params.id, data => {
          setData(data)
          console.log(data)
        })
      )
    }
  }, [params.id])

  useEffect(() => {
    const plainText = data?.pageContent
    // Component mounted, initialize the editor states
    setEditorState1(
      idAgentData?.agentDataById?.termsAndConditions
        ? () => {
            const blocksFromHTML = convertFromHTML(
              idAgentData?.agentDataById?.termsAndConditions
            )
            const contentState = ContentState.createFromBlockArray(
              blocksFromHTML.contentBlocks,
              blocksFromHTML.entityMap
            )
            console.log(blocksFromHTML, 'blocksFromHTML')

            return EditorState.createWithContent(contentState)
          }
        : () => EditorState.createEmpty()
    )

    setEditorState2(
      idAgentData?.agentDataById?.tokenEmail
        ? () => {
            const blocksFromHTML = convertFromHTML(
              idAgentData?.agentDataById?.tokenEmail
            )
            const contentState = ContentState.createFromBlockArray(
              blocksFromHTML.contentBlocks,
              blocksFromHTML.entityMap
            )
            console.log(blocksFromHTML, 'blocksFromHTML')

            return EditorState.createWithContent(contentState)
          }
        : () => EditorState.createEmpty()
    )
  }, [idAgentData])

  const handleEditorStateChange1 = editorState => {
    setEditorState1(editorState)
  }

  const handleEditorStateChange2 = editorState => {
    setEditorState2(editorState)
  }
  const handleEditorStateChange3 = editorState => {
    setEditorState3(editorState)
  }
  const handleEditorStateChange4 = editorState => {
    setEditorState4(editorState)
  }

  const handleEditorStateChange5 = editorState => {
    setEditorState5(editorState)
  }

  const handleEditorStateChange6 = editorState => {
    setEditorState6(editorState)
  }
  const convertToHtml1 = () => {
    const contentState = editorState1.getCurrentContent()
    const html = draftToHtml(convertToRaw(contentState))
    console.log(html, 'html')
    const convertedContentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          key: 'converted',
          text: html,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {}
        }
      ]
    })
    const convertedEditorState = EditorState.push(
      editorState1,
      convertedContentState,
      'insert-characters'
    )
    setEditorState1(convertedEditorState)
  }
  const convertToPlainText1 = () => {
    const contentState = editorState1.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState1(plainTextEditorState)
  }

  const convertToPreview1 = () => {
    const contentState = editorState1.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState1(plainTextEditorState)
  }
  const convertToHtml2 = () => {
    const contentState = editorState2.getCurrentContent()
    const html = draftToHtml(convertToRaw(contentState))
    const convertedContentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          key: 'converted',
          text: html,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {}
        }
      ]
    })
    const convertedEditorState = EditorState.push(
      editorState2,
      convertedContentState,
      'insert-characters'
    )
    setEditorState2(convertedEditorState)
  }

  const convertToPlainText2 = () => {
    const contentState = editorState2.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState2(plainTextEditorState)
  }

  const convertToPreview2 = () => {
    const contentState = editorState2.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState2(plainTextEditorState)
  }

  const convertToHtml3 = () => {
    const contentState = editorState3.getCurrentContent()
    const html = draftToHtml(convertToRaw(contentState))
    const convertedContentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          key: 'converted',
          text: html,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {}
        }
      ]
    })
    const convertedEditorState = EditorState.push(
      editorState3,
      convertedContentState,
      'insert-characters'
    )
    setEditorState3(convertedEditorState)
  }
  const convertToPlainText3 = () => {
    const contentState = editorState3.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState3(plainTextEditorState)
  }

  const convertToPreview3 = () => {
    const contentState = editorState3.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState3(plainTextEditorState)
  }

  const convertToHtml4 = () => {
    const contentState = editorState4.getCurrentContent()
    const html = draftToHtml(convertToRaw(contentState))
    const convertedContentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          key: 'converted',
          text: html,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {}
        }
      ]
    })
    const convertedEditorState = EditorState.push(
      editorState4,
      convertedContentState,
      'insert-characters'
    )
    setEditorState4(convertedEditorState)
  }
  const convertToPlainText4 = () => {
    const contentState = editorState4.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState4(plainTextEditorState)
  }

  const convertToPreview4 = () => {
    const contentState = editorState4.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState4(plainTextEditorState)
  }

  const convertToHtml5 = () => {
    const contentState = editorState5.getCurrentContent()
    const html = draftToHtml(convertToRaw(contentState))
    const convertedContentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          key: 'converted',
          text: html,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {}
        }
      ]
    })
    const convertedEditorState = EditorState.push(
      editorState5,
      convertedContentState,
      'insert-characters'
    )
    setEditorState5(convertedEditorState)
  }
  const convertToPlainText5 = () => {
    const contentState = editorState5.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState5(plainTextEditorState)
  }

  const convertToPreview5 = () => {
    const contentState = editorState5.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState5(plainTextEditorState)
  }

  const convertToHtml6 = () => {
    const contentState = editorState6.getCurrentContent()
    const html = draftToHtml(convertToRaw(contentState))
    console.log(html, 'html')
    const convertedContentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          key: 'converted',
          text: html,
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {}
        }
      ]
    })
    const convertedEditorState = EditorState.push(
      editorState1,
      convertedContentState,
      'insert-characters'
    )
    setEditorState1(convertedEditorState)
  }
  const convertToPlainText6 = () => {
    const contentState = editorState6.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState6(plainTextEditorState)
  }

  const convertToPreview6 = () => {
    const contentState = editorState6.getCurrentContent()
    const plainText = convertToRaw(contentState)
      .blocks.map(block => block.text)
      .join('\n')
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, '')
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags)
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    )
    setEditorState6(plainTextEditorState)
  }

  const handleOpen = val => {
    if (open === val) {
      setOpen('')
    } else setOpen(val)
  }

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleToogle = e => {
    setData({ ...data, [e.target.name]: e.target.checked })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(data.tokenEmail)
    // e.preventDefault();
    // let createData={
    //   name: data.name,
    //   // translations: "",
    //   parentId: data.parentId,
    //   displayOnTopMenu: data.displayOnTopMenu,
    //   displayOnFooter: data.displayOnFooter,
    //   redirectPageLabelToURL: data.redirectPageLabelToURL,
    //   menuBackgroundColor: data.menuBackgroundColor,
    //   unselectedTextColor: data.unselectedTextColor,
    //   selectedTextColor: data.selectedTextColor,
    //   displayOnLeftMenu: data.displayOnLeftMenu,
    //   pageContent:  data.pageContent,
    //   summary: data.summary,
    // }
    // let updateData={
    //   name: data.name,
    //   // translations: "",
    //   id: params.id ,
    //   // parentId: data.parentId,
    //   displayOnTopMenu: data.displayOnTopMenu,
    //   displayOnFooter: data.displayOnFooter,
    //   redirectPageLabelToURL: data.redirectPageLabelToURL,
    //   menuBackgroundColor: data.menuBackgroundColor,
    //   unselectedTextColor: data.unselectedTextColor,
    //   selectedTextColor: data.selectedTextColor,
    //   displayOnLeftMenu: data.displayOnLeftMenu,
    //   pageContent: data.pageContent,
    //   summary: data.summary,
    // }


    if (params?.id) {
      let updateData= data;
      updateData['id']=params.id
      dispatch(updateAgents(updateData));
    } else {
      dispatch(createAgents(data));
    }
    history.push(Utils.Pathname.agents);
  }

  return (
    <Fragment>
      <ThemeOptions />
      {/* <AppHeader /> */}
      <div className='app-main'>
        <AppSidebar />
        <div className='app-main__outer'>
          <div className='app-main__inner'>
          <div role="presentation" className="bread_crumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                   underline="hover"
                  color="#0e548c"
                  onClick={()=>{history.push("/agent")}}
                  
                >
                  Agents
                </Link>
                <p
                   underline="hover"
                  color="#000000"
                  
                  
                  
                >
                  Agent Details
                </p>
              </Breadcrumbs>
            </div>
            <form  onSubmit={e => handleSubmit(e)} className=' mx-3 my-2'>
              <div className='row flex-column  card p-4'>
                <div className=' col-10 expend-card'>
                  <CardHeader
                    className=''
                    title='Agent Detail & Domain Identification'
                    action={
                      <IconButton
                        onClick={() => handleOpen('testCollaple1')}
                        aria-label='expand'
                        size='small'
                      >
                        {open === 'testCollaple1' ? (
                          <RemoveCircleOutlineOutlinedIcon />
                        ) : (
                          <ControlPointOutlinedIcon />
                        )}
                      </IconButton>
                    }
                  ></CardHeader>
                  <Collapse
                    style={{ backgroundColor: 'white' }}
                    className='px-5'
                    in={open === 'testCollaple1'}
                    timeout='auto'
                    unmountOnExit
                  >
                    <div className='row mx-2 my-1 py-0 '>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                        
                        >
                          Name:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                        className='text textFieldClass'
                          fullWidth
                          name="name"
                          value={data?.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          W9 Requestor Name:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='w9RequestorName'
                          value={data?.w9RequestorName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Line 1:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='line1'
                          value={data?.line1}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Line 2:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='line2'
                          value={data?.line2}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          City / Town:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='cityTown'
                          value={data?.cityTown}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          State / Province:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='stateProvince'
                          onChange={handleChange}
                          value={data?.stateProvince}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Zip / Postal Code:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='zipPostalCode'
                          value={data?.zipPostalCode}
                         onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Country:
                        </div>
                      </div>
                      <div className='col-7 '>
                        <Select className='selectBox text'fullWidth name='parent'>
                          <MenuItem value='1'>Active</MenuItem>
                          <MenuItem value='0'>Inactive</MenuItem>
                        </Select>
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Other:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField  className='text textFieldClass'fullWidth name='other' value={data?.other} onChange = { handleChange }
/>
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Default Selection:
                        </div>
                      </div>
                      <div className='col-7'>
                        <FormControl>
                          <RadioGroup
                            className='d-flex flex-row table_content'
                            aria-labelledby='demo-radio-buttons-group-label'
                            defaultValue='female'
                            name='radio-buttons-group'
                          >
                            <FormControlLabel
                            className='table_content'
                              value='entity'
                              control={<Radio />}
                              label='Entity'
                            />
                            <FormControlLabel
                              value='individual'
                              control={<Radio />}
                              label='Individual'
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className=' col-10 mt-1 expend-card '>
                  <CardHeader
                    className=''
                    title='Look & Feel'
                    action={
                      <IconButton
                        onClick={() => handleOpen('testCollaple2')}
                        aria-label='expand'
                        size='small'
                      >
                        {open === 'testCollaple2' ? (
                          <RemoveCircleOutlineOutlinedIcon />
                        ) : (
                          <ControlPointOutlinedIcon />
                        )}
                      </IconButton>
                    }
                  ></CardHeader>
                  <Collapse
                    style={{ backgroundColor: 'white' }}
                    className='px-5'
                    in={open === 'testCollaple2'}
                    timeout='auto'
                    unmountOnExit
                  >
                    <div className='row  mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Default Language:
                        </div>
                      </div>
                      <div className='col-7'>
                        <Select  className='selectBox text'fullWidth name='parent'>
                          <MenuItem value='1'>Active</MenuItem>
                          <MenuItem value='0'>inactive</MenuItem>
                        </Select>
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Include Default English:
                        </div>
                      </div>
                      <div className='col-7'>
                        <Checkbox
                        name='includeDefaultEnglish'
                        value={data?.includeDefaultEnglish}
                        onClick={e => handleToogle(e)}
                        checked={data?.includeDefaultEnglish}
                        />
                        {/* <TextField
                           fullWidth
                         className='text textFieldClass'
                          name='includeDefaultEnglish'
                          value={data?.includeDefaultEnglish}
                          onChange={handleChange}
                        /> */}
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Logo:
                        </div>
                      </div>
                      <div className='col-7  justify-content-between d-flex input-file'>
                        <Select
                        className='text'
                          onChange={handleFile}
                          style={{
                            minWidth: '140px',
                            height: '30px',
                            marginRight: '10px'
                          }}
                        >
                          <MenuItem value='1'>Keep Existing</MenuItem>
                          <MenuItem value='2'>Upload</MenuItem>
                          <MenuItem value='3'>Remove</MenuItem>
                        </Select>

                        {submit === '2' && (
                          <Input style={{ fontSize: '13px' }} type='file' />
                        )}
                        <span className='my-auto text mx-2'>
                          <a>View..</a>
                        </span>
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Logo Navigate URL:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='logoNavigateURL'
                          value={data?.logoNavigateURL}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          PDF watermark:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='pdfWatermark'
                          value={data?.pdfWatermark}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Custom stylesheet:
                        </div>
                      </div>
                      <div className='col-7'>
                        <Card className='card-box' >
                          <CardContent>
                            <div
                              gutterBottom
                              className='heading customUpload'
                            >
                              Uploaded files
                            </div>
                          </CardContent>
                          <CardActions className='input-file'>
                            <Input style={{ fontSize: '11px' }} type='file' />
                            <span>
                              <div className='d-flex justify-content-end'>
                                <Button className='my-auto text'>
                                  {' '}
                                  <DeleteIcon />
                                </Button>
                              </div>
                            </span>

                            <Button
                             variant='contained'
                              style={{ float: 'right', fontSize: '8px' }}
                            >
                              Add
                            </Button>
                          </CardActions>
                        </Card>
                      </div>
                    </div>
                    <div className='row mx-2 my-2'>
                      <div className='col-12 my-2 '>
                        <div className="text"  color='text.secondary'>
                          Add any custom CSS files to further customize the look
                          and feel.
                        </div>
                       
                          <li className="text">
                            Custom CSS files will be loaded after the default
                            stylesheets.
                          </li>
                          <li className="text">
                            When multiple custom CSS files are uploaded, they
                            will be loaded in alphabetical order.
                          </li>
                          <li className="text">
                            Any images or fonts uploaded here should be
                            referenced from the CSS file(s) using relative
                            paths.
                          </li>
                     
                      </div>
                    </div>
                    <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Display Version:
                        </div>
                      </div>
                      <div className='col-7'>
                        <Checkbox
                          name='displayVersion'
                          onClick={e => handleToogle(e)}
                          checked={data?.displayVersion}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Display Render Time:
                        </div>
                      </div>
                      <div className='col-7'>
                        <Checkbox
                          name='displayRenderTime'
                          onClick={e => handleToogle(e)}
                          checked={data?.displayRenderTime}
                        />
                      </div>
                    </div>
                    {/* <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Display Quick Edit Icons on forms:
                        </div>
                      </div>
                      <div className='col-7'>
                        <Checkbox defaultChecked={true} />
                      </div>
                    </div> */}
                  </Collapse>
                </div>
                <div className='col-10 mt-1 expend-card'>
                  <CardHeader
                    className=''
                    title="User ID's & Passwords"
                    action={
                      <IconButton
                        onClick={() => handleOpen('testCollaple3')}
                        aria-label='expand'
                        size='small'
                      >
                        {open === 'testCollaple3' ? (
                          <RemoveCircleOutlineOutlinedIcon />
                        ) : (
                          <ControlPointOutlinedIcon />
                        )}
                      </IconButton>
                    }
                  ></CardHeader>
                  <Collapse
                    style={{ backgroundColor: 'white' }}
                    className='px-5'
                    in={open === 'testCollaple3'}
                    timeout='auto'
                    unmountOnExit
                  >
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Form feed username:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass' 
                          fullWidth
                          name='formFeedUsername'
                          value={data?.formFeedUsername}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Form feed password:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='formFeedPassword'
                          value={data?.formFeedPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          TIN check username:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                     className='text textFieldClass'
                          fullWidth
                          name='tinCheckUsername'
                          value={data?.tinCheckUsername}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          TIN check password:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField
                         className='text textFieldClass'
                          fullWidth
                          name='tinCheckPassword'
                          value={data?.tinCheckPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Supports TIN validation:
                        </div>
                      </div>
                      <div className='col-7'>
                        <FormControl>
                          <RadioGroup
                          className='d-flex flex-row'
                          aria-labelledby='demo-radio-buttons-group-label'
                          defaultValue='female'
                          name='radio-buttons-group'
                          onClick={e => handleToogle(e)}
                          checked={data?.supportsTINValidation}
                        >
                          <FormControlLabel
                            value='yes'
                            control={<Radio />}
                            label='Yes'
                          />
                          <FormControlLabel
                            value='no'
                            control={<Radio />}
                            label='No'
                          />
                        </RadioGroup>
                          {/* <Checkbox
                            name='supportsTINValidation'
                            onClick={e => handleToogle(e)}
                            checked={data?.supportsTINValidation}
                          /> */}
                        </FormControl>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Continue after TIN validation failure:
                        </div>
                      </div>
                      <div className='col-7 d-flex'>
                        <FormControl className='w-75'  checked={data?.continueAfterTINValidationFailure}  onClick={e => handleToogle(e)}>
                          <RadioGroup
                          className='d-flex flex-row'
                          onClick={e => handleToogle(e)}
                          aria-labelledby='demo-radio-buttons-group-label'
                          defaultValue='female'
                          name='radio-buttons-group'
                        >
                          <FormControlLabel
                            value='yes'
                            control={<Radio />}
                            label='Yes'
                          />
                          <FormControlLabel
                            value='no'
                            control={<Radio />}
                            label='No'
                          />
                        </RadioGroup>
                          {/* <Checkbox
                            name='continueAfterTINValidationFailure'
                            onClick={e => handleToogle(e)}
                            checked={data?.continueAfterTINValidationFailure}
                          /> */}
                        </FormControl>
                        <p className='text' style={{width: '-webkit-fill-available' ,margin: "auto",}}>(Max 2 attempts allowed per TIN per 24 hours)</p>
                      </div>
                    </div>

                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Email "TOKEN" URL destination:
                        </div>
                      </div>
                      <div className='col-7'>
                        <TextField  className='text textFieldClass'fullWidth name='name' />
                      </div>
                    </div>
                  </Collapse>
                </div>
              
                  <div className='row col-8 mt-2'>
                    <div className='col-12 editor-div headings'>
                      <lable>Terms and conditions:</lable>
                      <div
                        style={{
                         
                          backgroundColor: '#ffff'
                        }}
                      >
                        <Editor
                          wrapperClassName='wrapper-class'
                          editorClassName='editor-class'
                          toolbarClassName='toolbar-class'
                          editorState={editorState1}
                          onEditorStateChange={handleEditorStateChange1}
                        />
                      <div
                        style={{
                          display: 'flex',
                          
                          marginTop: '5px'
                        }}
                      >
                        <div>
                          {' '}
                          <button type='button' onClick={convertToHtml1}>
                            HTML
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          {' '}
                          <button type='button' onClick={convertToPlainText1}>
                            Text
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          <button type='button' onClick={convertToPreview1}>
                            Preview
                          </button>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
               
              
                  <div className='row col-8 mt-2'>
                    <div className='col-12 editor-div headings'>
                      <lable>"TOKEN" Email:</lable>
                      <div
                        style={{
                          backgroundColor: '#ffff'
                        }}
                      >
                        <Editor
                          wrapperClassName='wrapper-class'
                          editorClassName='editor-class'
                          toolbarClassName='toolbar-class'
                          editorState={editorState2}
                          onEditorStateChange={handleEditorStateChange2}
                        />
                        {/* <lable>
                The TOKEN email must contain the placeholder ##TOKEN##. This will be replaced with the actual TOKEN when the confirmation email is sent</lable> */}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          // justifyContent: "end",
                          marginTop: '5px'
                        }}
                      >
                        <div>
                          {' '}
                          <button type='button' onClick={convertToHtml2}>
                            HTML
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          {' '}
                          <button type='button' onClick={convertToPlainText2}>
                            Text
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          <button type='button' onClick={convertToPreview2}>
                            Preview
                          </button>
                        </div>
                      </div>
                             <lable className="label"> 
                The TOKEN email must contain the placeholder ##TOKEN##. This will be replaced with the actual TOKEN when the confirmation email is sent</lable> 
                    </div>
                  </div>
               
            
                  <div className='col-8 row mt-2'>
                    <div className='col-12 editor-div headings'>
                      <lable>Send for Signature Process(Continuation URL):
                </lable>
                      <div
                        style={{
                          backgroundColor: '#ffff'
                        }}
                      >
                        <Editor
                          wrapperClassName='wrapper-class'
                          editorClassName='editor-class'
                          toolbarClassName='toolbar-class'
                          editorState={editorState3}
                          onEditorStateChange={handleEditorStateChange3}
                        />
                        {/* <lable>The Send For Signatory email must contain the placeholder ##URL Link## , ##Name of signatory## , ##Name of the person who filled out the form## , ##Email address of the contact##. This will be replaced with the actual Continuation URL, Name of signatory ,Name of the person who filled out the form, Email address of the contact when the email is sent</lable> */}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          // justifyContent: "end",
                          marginTop: '5px'
                        }}
                      >
                        <div>
                          {' '}
                          <button type='button' onClick={convertToHtml3}>
                            HTML
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          {' '}
                          <button type='button' onClick={convertToPlainText3}>
                            Text
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          <button type='button' onClick={convertToPreview3}>
                            Preview
                          </button>
                        </div>
                      </div>
                       <lable className="label">The Send For Signatory email must contain the placeholder ##URL Link## , ##Name of signatory## , ##Name of the person who filled out the form## , ##Email address of the contact##. This will be replaced with the actual Continuation URL, Name of signatory ,Name of the person who filled out the form, Email address of the contact when the email is sent</lable>
                    </div>
                  </div>
           
                  <div className='col-8 row mt-2'>
                    <div className='col-12 editor-div headings'>
                      <lable>By Using Email ID and password:</lable>
                      <div
                        style={{
                          backgroundColor: '#ffff'
                        }}
                      >
                        <Editor
                          wrapperClassName='wrapper-class'
                          editorClassName='editor-class'
                          toolbarClassName='toolbar-class'
                          editorState={editorState4}
                          onEditorStateChange={handleEditorStateChange4}
                        />
                        {/* <label>The Send For Signatory email must contain the placeholder ##URL Link## , ##Name of signatory## , ##Name of the person who filled out the form## , ##Email address of the contact##. This will be replaced with the actual Continuation URL, Name of signatory ,Name of the person who filled out the form, Email address of the contact when the email is sent</label> */}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          // justifyContent: "end",
                          marginTop: '5px'
                        }}
                      >
                        <div>
                          {' '}
                          <button type='button' onClick={convertToHtml4}>
                            HTML
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          {' '}
                          <button type='button' onClick={convertToPlainText4}>
                            Text
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          <button type='button' onClick={convertToPreview4}>
                            Preview
                          </button>
                        </div>
                      </div>
                        <lable  className="label">The Send For Signatory email must contain the placeholder ##URL Link## , ##Name of signatory## , ##Name of the person who filled out the form## , ##Email address of the contact##. This will be replaced with the actual Continuation URL, Name of signatory ,Name of the person who filled out the form, Email address of the contact when the email is sent</lable> 
                    </div>
               
                </div>
                
                  <div className='row col-8 mt-2'>
                    <div className='col-12 editor-div headings'>
                      <lable>"SaveAndExit" Email:</lable>
                      <div
                        style={{
                          backgroundColor: '#ffff'
                        }}
                      >
                        <Editor
                          wrapperClassName='wrapper-class'
                          editorClassName='editor-class'
                          toolbarClassName='toolbar-class'
                          editorState={editorState5}
                          onEditorStateChange={handleEditorStateChange5}
                        />
                        {/* <lable>The SaveAndExit email must contain the placeholder ##URL Link## and ##URL Link1##. This will be replaced with the actual Continuation URL when the email is sent</lable> */}
                      <div
                        style={{
                          display: 'flex',
                          // justifyContent: "end",
                          marginTop: '5px'
                        }}
                      >
                        <div>
                          {' '}
                          <button type='button' onClick={convertToHtml5}>
                            HTML
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          {' '}
                          <button type='button' onClick={convertToPlainText5}>
                            Text
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          <button type='button' onClick={convertToPreview5}>
                            Preview
                          </button>
                        </div>
                      </div>
                      </div>
                      <lable  className="label"> The SaveAndExit email must contain the placeholder ##URL Link## and ##URL Link1##. This will be replaced with the actual Continuation URL when the email is sent</lable>
                    </div>
                  </div>
            
                <div className=' col-10 expend-card mt-2'>
                  <CardHeader
                    className=''
                    title='Process Options'
                    action={
                      <IconButton
                        onClick={() => handleOpen('testCollaple4')}
                        aria-label='expand'
                        size='small'
                      >
                        {open === 'testCollaple4' ? (
                          <RemoveCircleOutlineOutlinedIcon />
                        ) : (
                          <ControlPointOutlinedIcon />
                        )}
                      </IconButton>
                    }
                  ></CardHeader>
                  <Collapse
                    className='px-5'
                    in={open === 'testCollaple4'}
                    timeout='auto'
                    unmountOnExit
                  >
                    <div className='row mx-2 my-1 py-0'>
                      <div className='col-4 d-flex'>
                        <div
                          className='my-auto text'
                          
                          sx={{ fontWeight: 200, opacity: '.8 !important' }}
                        >
                          Client Onboarding - Skip AHD Page:
                        </div>
                      </div>
                      <div className='col-7 mx-4 d-flex'>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Onboarding API Active:
                          </div>
                          <Checkbox
                            name='onboardingAPIActive'
                            onClick={e => handleToogle(e)}
                            checked={data?.onboardingAPIActive}
                          />
                        </div>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Skip AHD Page:
                          </div>
                          <Checkbox
                            name='skipAHDPage'
                            onClick={e => handleToogle(e)}
                            checked={data?.skipAHDPage}
                          />
                        </div>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Skip T&C Page:
                          </div>
                          <Checkbox
                            name='skipTCPage'
                            onClick={e => handleToogle(e)}
                            checked={data?.skipTCPage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Store CDF on the fly:
                        </div>
                        <Checkbox
                          name='storeCDFOnTheFly'
                          onClick={e => handleToogle(e)}
                          checked={data?.storeCDFOnTheFly}
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Store CDF and Form on after form Submission:
                        </div>
                        <Checkbox
                          name='storeCDFAndFormOnAfterFormSubmission'
                          onClick={e => handleToogle(e)}
                          checked={data?.storeCDFAndFormOnAfterFormSubmission}
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Show UID entry field in the entity details screen:
                          </div>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            ** This function overwrites system generated UID **
                          </div>
                        </div>
                        <Checkbox
                          name='showUIDEntryFieldInTheEntityDetailsScreen'
                          onClick={e => handleToogle(e)}
                          checked={
                            data?.showUIDEntryFieldInTheEntityDetailsScreen
                          }
                        />
                      </div>
                      <div className='col-7 d-flex'>
                        <div className='d-flex justify-content-between formatClass'>
                          <div
                            className='my-auto text mx-1'
                            
                            
                          >
                            Required Format:
                          </div>
                          <TextField
                          className='mt-8 text textFieldClass'
                            name='showUIDEntryFieldInTheEntityDetailsScreenRequiredFormat'
                            value={
                              data?.showUIDEntryFieldInTheEntityDetailsScreenRequiredFormat
                            }
                           onChange={handleChange}
                          />
                        </div>
                        <div className='d-flex'>
                          <span
                            className='my-auto text mx-4'
                          
                            
                          >
                            Include UID on Reference Line:
                          </span>
                         <span> <Checkbox defaultChecked={false} /></span>
                        </div>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Update CDF Record on the fly:
                        </div>
                        <Checkbox
                          name='updateCDFRecordOnTheFly'
                          onClick={e => handleToogle(e)}
                          checked={data?.updateCDFRecordOnTheFly}
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Allow second signature submission:
                        </div>
                        <Checkbox
                          name='allowSecondSignatureSubmission'
                          onClick={e => handleToogle(e)}
                          checked={data?.allowSecondSignatureSubmission}
                        />
                      </div>
                      <div className='col-7 d-flex'>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Use same agent:
                          </div>
                          <Checkbox
                            name='allowSecondSignatureSubmissionUseSameAgent'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.allowSecondSignatureSubmissionUseSameAgent
                            }
                          />
                        </div>
                        <div className='d-flex '>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Second submission mandatory:
                          </div>
                          <Checkbox
                            name='allowSecondSignatureSubmissionSecondSubmissionMandatory'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.allowSecondSignatureSubmissionSecondSubmissionMandatory
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Include Additional Information on E-Submit PDF:
                        </div>
                        <Checkbox
                          name='includeAdditionalInformationOnESubmitPDF'
                          onClick={e => handleToogle(e)}
                          checked={
                            data?.includeAdditionalInformationOnESubmitPDF
                          }
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Treaty Country (Activate suppress warnings):
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Non Treaty Country (Activate suppress warnings):
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          IGA Process (Activate suppress warnings):
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Show U.S. sourced income declaration:
                        </div>
                        <Checkbox
                          name='showUSourcedIncomeDeclaration'
                          onClick={e => handleToogle(e)}
                          checked={data?.showUSourcedIncomeDeclaration}
                        />
                      </div>
                      <div className='col-7 d-flex'>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            And When No U.S Sourced Income, Hide Chapter 4 and
                            DRE page:
                          </div>
                          <Checkbox
                            name='showUSourcedIncomeDeclarationAndWhenNoUSSourcedIncomeHideChapter4AndDREPage'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.showUSourcedIncomeDeclarationAndWhenNoUSSourcedIncomeHideChapter4AndDREPage
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Show Retroactive statement (only show/apply for W-8
                          Forms):
                        </div>
                        <Checkbox
                          name='showRetroactiveStatementOnlyShowApplyForW8Forms'
                          onClick={e => handleToogle(e)}
                          checked={
                            data?.showRetroactiveStatementOnlyShowApplyForW8Forms
                          }
                        />
                      </div>
                      <div className='col-7 d-flex'>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Render full screen
                          </div>
                          <Checkbox
                            name='showRetroactiveStatementOnlyShowApplyForW8FormsRenderFullScreen'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.showRetroactiveStatementOnlyShowApplyForW8FormsRenderFullScreen
                            }
                          />
                        </div>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Make mandatory
                          </div>
                          <Checkbox
                            name='showRetroactiveStatementOnlyShowApplyForW8FormsMakeMandatory'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.showRetroactiveStatementOnlyShowApplyForW8FormsMakeMandatory
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Enable Save & Exit Process:
                        </div>
                        <Checkbox
                          name='enableSaveExitProcess'
                          onClick={e => handleToogle(e)}
                          checked={data?.enableSaveExitProcess}
                        />
                      </div>
                      <div className='col-7 d-flex'>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Send for Signature Process(Continuation URL):
                          </div>
                          <Checkbox defaultChecked={false} />
                        </div>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            
                          >
                            By Using Email ID and password:
                          </div>
                          <Checkbox defaultChecked={false} />
                        </div>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 py-0'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Enable allocation statement creation:
                        </div>
                        <Checkbox
                          name='enableAllocationStatementCreation'
                          onClick={e => handleToogle(e)}
                          checked={data?.enableAllocationStatementCreation}
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Enable Electronic Recipient Statement consent:
                        </div>
                        <Checkbox
                          name='consentToSendAnElectronic1042SOr1099'
                          onClick={e => handleToogle(e)}
                          checked={data?.consentToSendAnElectronic1042SOr1099}
                        />
                      </div>
                      <div className='col-7 d-flex p-0'>
                        <div
                          className='my-auto text'
                          
                          sx={{ fontWeight: 200, opacity: '1 !important' }}
                        >
                          Consent to send an electronic 1042-S or 1099
                        </div>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Enable Exempt from Backup Withholding Page Pop-Up:
                        </div>
                        <Checkbox
                          name='enableExemptFromBackupWithholdingPagePopUp'
                          onClick={e => handleToogle(e)}
                          checked={
                            data?.enableExemptFromBackupWithholdingPagePopUp
                          }
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Hide Download template to complete withholding
                          statement :
                        </div>
                        <Checkbox
                          name='hideDownloadTemplateToCompleteWithholdingStatement'
                          onClick={e => handleToogle(e)}
                          checked={
                            data?.hideDownloadTemplateToCompleteWithholdingStatement
                          }
                        />
                      </div>
                    </div>
                    {/* <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Name Confirmation :
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Address Confirmation :
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div> */}
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Request Bank/Account information :
                        </div>
                        <Checkbox
                          name='requestBankAccountInformation'
                          onClick={e => handleToogle(e)}
                          checked={data?.requestBankAccountInformation}
                        />
                      </div>
                      <div className='col-7 d-flex'>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            sx={{ fontWeight: 200, opacity: '1 !important' }}
                          >
                            and when 'Yes' make mandatory :
                          </div>
                          <Checkbox
                            name='requestBankAccountInformationAndWhenYesMakeMandatory'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.requestBankAccountInformationAndWhenYesMakeMandatory
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Request income type :
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                      <div className='col-7 d-flex'>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            sx={{ fontWeight: 200, opacity: '1 !important' }}
                          >
                            and when 'Yes' make mandatory :
                          </div>
                          <Checkbox defaultChecked={false} />
                        </div>
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-4 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Maximum number of Income Types allowed :
                        </div>
                      </div>
                      <div className='col-7 mx-4 d-flex'>
                        <TextField  className='text textFieldClass'fullWidth name='name' />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Enable VAT Number Collection:
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Hide W-8BEN-E Treaty 14c :
                        </div>
                        <Checkbox
                          name='hideW8BENETreaty14C'
                          onClick={e => handleToogle(e)}
                          checked={data?.hideW8BENETreaty14C}
                        />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Make controlling person mandatory :
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Hide W-8ECI Line 12:
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Show Download PDF option on Thank You page :
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Show MForms Mobile Wallet Flow on Thank You page :
                        </div>
                        <Checkbox defaultChecked={false} />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-4 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                        Welcome Code for MForms Mobile Wallet :
                        </div>
                      </div>
                      <div className='col-5 mx-4 d-flex'>
                        <TextField className='text textFieldClass'fullWidth name='name' />
                      </div>
                    </div>
                    <div className='row my-1 mx-2 d-flex'>
                      <div className='col-4 mx-1 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Show landing page welcome popup:
                        </div>
                       
                      </div>
                      <div className='col-7 d-flex'>
                        <div className='d-flex'>
                        <Checkbox defaultChecked={true} />
                          <div
                            className='my-auto text'
                            
                            
                          >
                           Include AHD API Simulator:
                          </div>
                          <Checkbox defaultChecked={false} />
                        </div>
                        <div className='d-flex'>
                          <div
                            className='my-auto text'
                            
                            sx={{ fontWeight: 200, opacity: '1 !important' }}
                          >
                            Note: For Test & Demonstration Purpose Only
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </div>
                {/* <div className='col-8 my-2 expend-card'> */}
                  {/* <div className='row m-2'> */}
                    {/* <div className='col-12 editor-div headings'>
                      <lable>
                        Next Agent Introduction Text (Shown on Congratulations
                        Page)
                      </lable>
                      <div
                        style={{
                          backgroundColor: '#ffff'
                        }}
                      >
                        <Editor
                          wrapperClassName='wrapper-class'
                          editorClassName='editor-class'
                          toolbarClassName='toolbar-class'
                          editorState={editorState6}
                          onEditorStateChange={handleEditorStateChange6}
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          marginTop: '10px'
                        }}
                      >
                        <div>
                          {' '}
                          <button type='button' onClick={convertToHtml6}>
                            HTML
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          {' '}
                          <button type='button' onClick={convertToPlainText6}>
                            Text
                          </button>
                        </div>
                        <div style={{ marginLeft: '5px' }}>
                          <button type='button' onClick={convertToPreview6}>
                            Preview
                          </button>
                        </div>
                      </div>
                    </div> */}
                  {/* </div> */}
                {/* </div> */}
                <div className=' col-8 my-2 expend-card'>
                  <div className='row m-2'>
                    <div className='col-6 headings'style={{ justifyContent: "space-between", display: "flex", flexDirection: "column" }}>
                      <div>

                      <lable>Skipped steps:</lable>
                      <span className='headings'>
                        (Removed from the submission process)
                      </span>
                      </div>
                      <div className='inner-scroll-div'>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0 '
                            name='forms'
                            onClick={e => handleToogle(e)}
                            checked={data?.forms}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Forms
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='federalTax'
                            onClick={e => handleToogle(e)}
                            checked={data?.federalTax}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Federal Tax
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='singleUSOwnerDetails'
                            onClick={e => handleToogle(e)}
                            checked={data?.singleUSOwnerDetails}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Single US Owner Details
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='taxpayerInformation_IndividualOnly'
                            onClick={e => handleToogle(e)}
                            checked={data?.taxpayerInformation_IndividualOnly}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Taxpayer Information (Individual only)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='taxpayerInformation_NonUSIndividualOnly'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.taxpayerInformation_NonUSIndividualOnly
                            }
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Taxpayer Information (Non US Individual only)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='taxpayerInformation_EntityOnly'
                            onClick={e => handleToogle(e)}
                            checked={data?.taxpayerInformation_EntityOnly}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Taxpayer Information (Entity only)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='taxpayerInformation_NonUSEntityOnly'
                            onClick={e => handleToogle(e)}
                            checked={data?.taxpayerInformation_NonUSEntityOnly}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Taxpayer Information (Non US Entity only)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='taxpayerInformation_GIIN'
                            onClick={e => handleToogle(e)}
                            checked={data?.taxpayerInformation_GIIN}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Taxpayer Information (GIIN)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='formSelection'
                            onClick={e => handleToogle(e)}
                            checked={data?.formSelection}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Form selection
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='w8IMYRelatedFiles'
                            onClick={e => handleToogle(e)}
                            checked={data?.w8IMYRelatedFiles}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            W-8IMY Related Files
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='w8BENJuly2017PartIIWhenTreatyClaimNo'
                            onClick={e => handleToogle(e)}
                            checked={data?.w8BENJuly2017PartIIWhenTreatyClaimNo}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            W-8BEN Oct 2021 Part II (When Treaty Claim = No)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='w8BENEPartIIIWhenTreatyClaimNo'
                            onClick={e => handleToogle(e)}
                            checked={data?.w8BENEPartIIIWhenTreatyClaimNo}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            W-8BEN-E Part III (When Treaty Claim = No)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='electronicSignature8233'
                            onClick={e => handleToogle(e)}
                            checked={data?.electronicSignature8233}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Electronic Signature (8233)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='nameAndAddress'
                            onClick={e => handleToogle(e)}
                            checked={data?.nameAndAddress}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Name and Address
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox className='p-0' defaultChecked={false} />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            ECI Mandatory Information
                          </div>
                        </div>
                        {/* <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='usSourcedIncomeDeclarationOptional'
                            onClick={e => handleToogle(e)}
                            checked={data?.usSourcedIncomeDeclarationOptional}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            US Sourced Income Declaration (optional)
                          </div>
                        </div> */}
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='incomeCode'
                            onClick={e => handleToogle(e)}
                            checked={data?.incomeCode}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Income Code
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='unitedStatesCitizenshipStatus'
                            onClick={e => handleToogle(e)}
                            checked={data?.unitedStatesCitizenshipStatus}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            United States Citizenship Status
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='unitedStatesSubstantialPresenceTestOptional'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.unitedStatesSubstantialPresenceTestOptional
                            }
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            United States substantial Presence Test (Optional)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='chapter4Status'
                            onClick={e => handleToogle(e)}
                            checked={data?.chapter4Status}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Chapter 4 Status
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='usfatcaClassification'
                            onClick={e => handleToogle(e)}
                            checked={data?.usfatcaClassification}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            U.S. FATCA Classification
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='disregardedEntity'
                            onClick={e => handleToogle(e)}
                            checked={data?.disregardedEntity}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Disregarded Entity
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='exemptionFromBackupWithholding'
                            onClick={e => handleToogle(e)}
                            checked={data?.exemptionFromBackupWithholding}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Exemption from Backup Withholding
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='exemptionFromFATCAReporting'
                            onClick={e => handleToogle(e)}
                            checked={data?.exemptionFromFATCAReporting}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Exemption from FATCA reporting
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='taxIdentificationNumber'
                            onClick={e => handleToogle(e)}
                            checked={data?.taxIdentificationNumber}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Tax Identification Number
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='specifiedUSPersonDetermination'
                            onClick={e => handleToogle(e)}
                            checked={data?.specifiedUSPersonDetermination}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Specified U.S. Person Determination
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='eciIncomeReport'
                            onClick={e => handleToogle(e)}
                            checked={data?.eciIncomeReport}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            ECI Income report
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='treatyClaimBENE'
                            onClick={e => handleToogle(e)}
                            checked={data?.treatyClaimBENE}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Treaty Claim Ben-E
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='specialRatesAndConditions'
                            onClick={e => handleToogle(e)}
                            checked={data?.specialRatesAndConditions}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Special Rates and Conditions
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='supportingDocumentationW9'
                            onClick={e => handleToogle(e)}
                            checked={data?.supportingDocumentationW9}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Supporting Documentation (W9)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='supportingDocumentationBEN'
                            onClick={e => handleToogle(e)}
                            checked={data?.supportingDocumentationBEN}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Supporting Documentation (BEN)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='supportingDocumentationBENE'
                            onClick={e => handleToogle(e)}
                            checked={data?.supportingDocumentationBENE}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Supporting Documentation (BEN-E)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='supportingDocumentationIMY'
                            onClick={e => handleToogle(e)}
                            checked={data?.supportingDocumentationIMY}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Supporting Documentation (IMY)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='supportingDocumentationEXP'
                            onClick={e => handleToogle(e)}
                            checked={data?.supportingDocumentationEXP}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Supporting Documentation (EXP)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='penaltiesOfPerjuryCertificationW9'
                            onClick={e => handleToogle(e)}
                            checked={data?.penaltiesOfPerjuryCertificationW9}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Penalties of Perjury Certification (W9)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='supportingDocumentationECI'
                            onClick={e => handleToogle(e)}
                            checked={data?.supportingDocumentationECI}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Supporting Documentation (ECI)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='electronicSignatureW9'
                            onClick={e => handleToogle(e)}
                            checked={data?.electronicSignatureW9}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Electronic Signature (W9)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='penaltiesOfPerjuryCertifcationBENE'
                            onClick={e => handleToogle(e)}
                            checked={data?.penaltiesOfPerjuryCertifcationBENE}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Penalties of Perjury Certification (BEN-E)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            // name='electronicSignatureW9'
                            // onClick={(e) => handleToogle(e)}
                            checked={false}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Electronic Signature (BEN-E)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='penaltiesOfPerjuryCertificationBEN'
                            onClick={e => handleToogle(e)}
                            checked={data?.penaltiesOfPerjuryCertificationBEN}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Penalties of Perjury Certification (BEN)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='electronicSignatureBEN'
                            onClick={e => handleToogle(e)}
                            checked={data?.electronicSignatureBEN}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Electronic Signature (BEN)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='penaltiesOfPerjuryCertificationIMY'
                            onClick={e => handleToogle(e)}
                            checked={data?.penaltiesOfPerjuryCertificationIMY}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Penalties of Perjury Certification (IMY)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='electronicSignatureIMY'
                            onClick={e => handleToogle(e)}
                            checked={data?.electronicSignatureIMY}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Electronic Signature (IMY)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='penaltiesOfPerjuryCertificationEXP'
                            onClick={e => handleToogle(e)}
                            checked={data?.penaltiesOfPerjuryCertificationEXP}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Penalties of Perjury Certification (EXP)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='electronicSignatureEXP'
                            onClick={e => handleToogle(e)}
                            checked={data?.electronicSignatureEXP}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Electronic Signature (EXP)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='penaltiesOfPerjuryCertificationECI'
                            onClick={e => handleToogle(e)}
                            checked={data?.penaltiesOfPerjuryCertificationECI}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Penalties of Perjury Certification (ECI)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='electronicSignatureECI'
                            onClick={e => handleToogle(e)}
                            checked={data?.electronicSignatureECI}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Electronic Signature (ECI)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='usTaxCertificationComplete'
                            onClick={e => handleToogle(e)}
                            checked={data?.usTaxCertificationComplete}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            US Tax Certification Complete
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox className='p-0' defaultChecked={false} />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Penalties of Perjury Certification (8233)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='substantialUSPresenceTest'
                            onClick={e => handleToogle(e)}
                            checked={data?.substantialUSPresenceTest}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Substantial U.S. Presence Test
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox className='p-0' defaultChecked={false} />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Tax Identification Number
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='identificationOfBeneficialOwner'
                            onClick={e => handleToogle(e)}
                            checked={data?.identificationOfBeneficialOwner}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Identification of Beneficial Owner
                          </div>
                        </div>{' '}
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='treatyClaimBEN'
                            onClick={e => handleToogle(e)}
                            checked={data?.treatyClaimBEN}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Treaty Claim BEN
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='supportingDocumentation8233'
                            onClick={e => handleToogle(e)}
                            checked={data?.supportingDocumentation8233}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Supporting Documentation (8233)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='penaltiesOfPerjuryCertificationSelfCertEntity'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.penaltiesOfPerjuryCertificationSelfCertEntity
                            }
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Penalties of Perjury Certification (Self-Cert
                            Entity)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='electronicSignatureSelfCertEntity'
                            onClick={e => handleToogle(e)}
                            checked={data?.electronicSignatureSelfCertEntity}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Electronic Signature (Self-Cert Entity)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='penaltiesOfPerjuryCertificationSelfCertIndividual'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.penaltiesOfPerjuryCertificationSelfCertIndividual
                            }
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Penalties of Perjury Certification (Self-Cert
                            Individual)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='electronicSignatureSelfCertIndividual'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.electronicSignatureSelfCertIndividual
                            }
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Electronic Signature (Self-Cert ind)
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='w9ExemptFromBUWIndividualSolePs'
                            onClick={e => handleToogle(e)}
                            checked={data?.w9ExemptFromBUWIndividualSolePs}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            W-9 Exempt from BUW (Individual & Sole P's')
                          </div>
                        </div>
                        <div className='d-flex '>
                          <Checkbox
                            className='p-0'
                            name='residencyInformationForm'
                            onClick={e => handleToogle(e)}
                            checked={data?.residencyInformationForm}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Residency InformationForm
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-6 headings' style={{ justifyContent: "space-between", display: "flex", flexDirection: "column" }}>
                    <div>
                      <lable>Hidden sections:</lable>
                      <span className='headings'>
                        (Not shown in the web page)
                      </span>
                      </div>
                      <div className='inner-scroll-div'>
                        <div className='d-flex'>
                          <Checkbox
                            className='p-0'
                            name='addressLine3Optional'
                            onClick={e => handleToogle(e)}
                            checked={data?.addressLine3Optional}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Address Line 3 (Optional)
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox
                            className='p-0'
                            name='capacitydonotshowforEntities'
                            onClick={e => handleToogle(e)}
                            checked={data?.capacitydonotshowforEntities}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Capacity (do not show for entities)
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox
                            className='p-0'
                            name='capacitydonotshowforIndividuals'
                            onClick={e => handleToogle(e)}
                            checked={data?.capacitydonotshowforIndividuals}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Capacity (do not show for individuals)
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox className='p-0' defaultChecked={false} />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Form Guides
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox className='p-0' defaultChecked={false} />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Form Reveal
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox
                            className='p-0'
                            name='formSelectionGuideDirectRequestQuestion'
                            onClick={e => handleToogle(e)}
                            checked={
                              data?.formSelectionGuideDirectRequestQuestion
                            }
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Form Selection Guide - Direct Request question
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox
                            className='p-0'
                            name='formSelectionGuideREITQuestion'
                            onClick={e => handleToogle(e)}
                            checked={data?.formSelectionGuideREITQuestion}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Form Selection Guide - REIT question
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox
                            className='p-0'
                            name='generalClassification'
                            onClick={e => handleToogle(e)}
                            checked={data?.generalClassification}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            General Classification
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox className='p-0' defaultChecked={false} />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Hide Account Holder Details Non-US Individual DBA
                            Field
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox className='p-0' defaultChecked={false} />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Hide Account Holder Details Selector Buttons
                          </div>
                        </div>
                        {/* <div className='d-flex'>
                          <Checkbox className='p-0' defaultChecked={false} />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Hide Account Holder Details Selector Buttons
                          </div>
                        </div> */}
                        <div className='d-flex'>
                          <Checkbox
                            className='p-0'
                            name='languageDropdown'
                            onClick={e => handleToogle(e)}
                            checked={data?.languageDropdown}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Language drop down
                          </div>
                        </div>
                        <div className='d-flex'>
                          <Checkbox
                            className='p-0'
                            name='multipleTaxJurisdictions'
                            onClick={e => handleToogle(e)}
                            checked={data?.multipleTaxJurisdictions}
                          />
                          <div
                            className='my-auto text'
                            
                            
                          >
                            Multiple tax jurisdictions
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-9 headings my-2'>
                      <lable>Retroactive statement:</lable>
                      <div className='retro'>
                      <TextField
                      
                     
                     
                      multiline
                     
                      name='retroactiveStatement'
                      value={data?.retroactiveStatement}
                    
                      fullWidth
                      onChange={handleChange}
                    />
                      </div>
                      <div className=' headings my-2'>
                        <lable>Retroactive Effective Date:</lable>
                        <br></br>
                        <TextField
                        className='text textFieldClass' 
                       
                        
                       
                        name='retroactiveEffectiveDate'
                        value={data?.retroactiveEffectiveDate}
                        // onChange={handleChange}
                        fullWidth
                        onChange={handleChange}
                      />
                      </div>

                    </div>
                  </div>
                </div>
                <div className='col-10 my-2 expend-card'>
                  <CardHeader
                    className=''
                    title='
          URL Options'
                    action={
                      <IconButton
                        onClick={() => handleOpen('testCollaple5')}
                        aria-label='expand'
                        size='small'
                      >
                        {open === 'testCollaple5' ? (
                          <RemoveCircleOutlineOutlinedIcon />
                        ) : (
                          <ControlPointOutlinedIcon />
                        )}
                      </IconButton>
                    }
                  ></CardHeader>
                  <Collapse
                    className='px-5'
                    in={open === 'testCollaple5'}
                    timeout='auto'
                    unmountOnExit
                  >
                    
                  
                
                    {/* <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                         Enable Finish/Exit/Save And Exit URL:
                        </div>
                      </div>
                      <div className='col-5'>
                      <Checkbox  className='col-1' defaultChecked={false} />
                      </div>
                    </div> */}
                   
                    <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Do Not Accept URL:
                        </div>
                      </div>
                      <div className='col-5'>
                        <TextField
                        className='textFieldClass text'
                          fullWidth
                          name='doNotAcceptURL'
                          value={data?.doNotAcceptURL}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Finish URL:
                        </div>
                      </div>
                      <div className='col-5'>
                        <TextField
                        className='textFieldClass text'
                          fullWidth
                          name='finishURL'
                          value={data?.finishURL}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Exit URL:
                        </div>
                      </div>
                      <div className='col-5'>
                        <TextField
                        className='textFieldClass text'
                          fullWidth
                          name='saveAndExitURL'
                          value={data?.saveAndExitURL}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          Save And Exit URL:
                        </div>
                      </div>
                      <div className='col-5'>
                        <TextField className='textFieldClass text'fullWidth name='name' />
                      </div>
                    </div>
                    {/* <div className='row mx-2 my-1'>
                      <div className='col-12 d-flex'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          For UUID API calls, entering URL settings here will
                          override the browser alert and close the tab process.
                        </div>
                      </div>
                    </div>
                    <div className='row mx-2 my-1'>
                      <div className='col-5 d-flex justify-content-between'>
                        <div
                          className='my-auto text'
                          
                          
                        >
                          GetUUID Service Exipration Time(Enable if greater than
                          0)
                        </div>
                      </div>
                      <div className='col-5'>
                        <TextField className='textFieldClass text' fullWidth name='name' />
                      </div>
                    </div> */}
                  </Collapse>
                </div>
                <div className='col-12 my-2 mx-auto'>
                  <div className='col-12 '>
                    <Button
                      size='small'
                      variant='contained'
                      type="submit"
                      style={{ float: 'right' }}
                    >
                      Save
                    </Button>
                    <Button
                     variant='outlined'
                      size='small'
                      className='mx-2'
                      style={{ float: 'right' }}
                      onClick={()=>{ history.push("/agent")}}     
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default UserManagement
