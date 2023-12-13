import React, { useEffect, useState, Fragment } from "react";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import { useDispatch, useSelector } from "react-redux";
import Transition from "../../reusables/languagesModal";
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
  FormControl,RadioGroup,Radio,
  Input,
  Breadcrumbs,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Paper,
  Link,
} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import InputAdornment from "@material-ui/core/InputAdornment";
import ThemeOptions from "../../Layout/ThemeOptions/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TableRow from "@mui/material/TableRow";
import SearchIcon from "@material-ui/icons/Search";
import SettingsModal from "../../reusables/settings";
import "./index.scss";


import {
  getAllSettingsQuestion,
  getAllSettings,
  getQuestionLanguageById  ,
  getHintLanguageById  ,
  upsertSettings,
  upsertQuestionTranslations,
  getHintTranslation ,


} from "../../redux/Actions";
import "./index.scss";
import { useHistory,useParams } from "react-router-dom";
// import { valueContainerCSS } from "react-select/dist/declarations/src/components/containers";


export default function Settings() {

const dispatch=useDispatch();
const history = useHistory();

const [checkboxValues, setCheckboxValues] = useState({
  threeMonths: false,
  sixMonths: false,
  nineMonths: false,
  twelveMonths: false,
});

const handleCheckboxChange = (name) => (event) => {
  setCheckboxValues({ ...checkboxValues, [name]: event.target.checked });
};
let params = useParams()
const arr=[1,2,3,4,5]
  const [submit , setSubmit] = useState("1");
  const tableData = useSelector((state) => state.getSettingsQuestionsReducer);
  const settingsData = useSelector((state) => state.getSettingsReducer);
  const questionLanguageData = useSelector((state) => state.getSettingQuestionReducer);
  const hintLanguageData = useSelector((state) => state.getSettingHintReducer);

  const [rowId, setRowId] = useState({});
  const [editId, setEditId] = useState()
  const [rowId1, setRowId1] = useState({});
  const [dropDownData, setDropDownData] = useState([]);
  const [dropDownData1, setDropDownData1] = useState([]);
  const [open1, setOpen1] = useState(false);
  const handleClickOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
    setRowId({});
  };
  const [data, setData] = useState({
    id: 0,
    DefaultCoverPagePdf:"",
    defaultCoverPagePdf_FileName: "",
    lengthOfConfirmationCode: "",
    defaultLogoType: "",
    defaultLogo_FileName: "",
    googleTranslateAPIKey: "",
    purgeRedundantSubmissionData: "",
    runExchangeInIframe: false,
    TaxformsAgent:"",
    DualformsAgent:"",
    CRSformsAgent:"",
    defaultRetroactiveStatement: "",
    underMaintenance: false,
    reSendTokenEmailFeature: false,
    activateNonEmailPINprocess: false,
    blockForeignCharacterInput: false,
    twilioAuthToken: null,
    APIURL:"",
    MaxNumPinAttempt:"",
    PinValidityMin:"",
    PinLockouttimeMin:"",

    twilioAccountSid: null,
    twilioSMSFromMobileNumber: null,
    
  });
  const [open, setOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null)
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setRowId({});
  };

  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => {
    setOpen2(false);
    setRowId1({});
  };
  useEffect(() => {
    dispatch(getAllSettingsQuestion());
    dispatch(getAllSettings());
  }, []);

  const handleFile = (event) => {
    console.log(event,"image")
    const selectedSubmit = event.target.value;
    setSubmit(selectedSubmit);
  }

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleImage = e => {
    var binaryData = []
    binaryData.push(e.target.files[0])
    // let image_as_base64 = URL.createObjectURL(
    //   new Blob(binaryData, { type: 'application/zip' })
    // )
    let imageFile = e.target.files[0]
    console.log(e.target.files[0], 'test')
    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      alert('Please select a valid image.')
    } else {
      setImageFile(imageFile)
    }
  }
  const handleToogle = e => {
    setData({ ...data, [e.target.name]: e.target.checked })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
      let updateData = {
        // count,ryId: parseInt(params?.id),
        id: params.id,
        DefaultCoverPagePdf:imageFile,
        TaxformsAgent:data?.TaxformsAgent,
    DualformsAgent:data?.DualformsAgent,
    CRSformsAgent:data?.CRSformsAgent,
      defaultCoverPagePdf_FileName: data?.defaultCoverPagePdf_FileName,
        lengthOfConfirmationCode: data?.lengthOfConfirmationCode,
        defaultLogoType: imageFile,
        defaultLogo_FileName: data?.defaultLogo_FileName,
        googleTranslateAPIKey: data?.googleTranslateAPIKey,
        APIURL:data?.APIURL,
        purgeRedundantSubmissionData: data?.purgeRedundantSubmissionData,
        runExchangeInIframe: data?.runExchangeInIframe,
        defaultRetroactiveStatement: data?.defaultRetroactiveStatement,
        underMaintenance: data?.underMaintenance,
        reSendTokenEmailFeature: data?.reSendTokenEmailFeature ,
        activateNonEmailPINprocess: data?.activateNonEmailPINprocess,
        blockForeignCharacterInput: data?.blockForeignCharacterInput,
        twilioAuthToken: data?.twilioAuthToken,
        MaxNumPinAttempt:data?.MaxNumPinAttempt,
        PinValidityMin:data?.PinValidityMin,
        PinLockouttimeMin:data?.PinLockouttimeMin,
        twilioAccountSid: data?.twilioAccountSid,
        twilioSMSFromMobileNumber: data?.twilioSMSFromMobileNumber,
      };
      dispatch(upsertSettings(updateData));
    }
    // history.push("/settings");


  return (
    <Fragment>
    <ThemeOptions />
    {/* <AppHeader /> */}
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
        <div role="presentation" className="bread_crumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <p
                  
                  color="#000000"
                   aria-current="page"
                 
                >
                  Settings
                </p>
              </Breadcrumbs>
            </div>
     
          <div className=" row m-1 border p-3 box_style" style={{ overflowX: "auto" }}>
            {/* <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                    Default domain:
                  </div>
                </div>
                <div className="col-7">
                <TextField className="w-50 textFieldClass" fullWidth name="name"/>
                </div>
              </div>
            </div> */}
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                   Default Cover Page Pdf File_Name:
                  </div>
                </div>
                <div className="col-7">
                <TextField className="w-50 textFieldClass" onChange={handleChange}fullWidth value={data?.defaultCoverPagePdf_FileName} name="defaultCoverPagePdf_FileName"/>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Default Logo File_Name:
                  </div>
                </div>
                <div className="col-7 ">
                <TextField className="w-50 textFieldClass" onChange={handleChange} fullWidth value={data?.defaultLogo_FileName} name="defaultLogo_FileName"/>
                </div>
              </div>
            </div>
 <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Default cover page pdf:
                  </div>
                </div>
                <div className="col-7 input-file text">
                 
                  <Input name="DefaultCoverPagePdf" onChange={(e) => handleImage(e)} value={data?.DefaultCoverPagePdf} type="file" className="text" />
                </div>
              </div>
            </div>

            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Length of Confirmation Code:
                  </div>
                </div>
                <div className="col-7">
                <TextField className="w-50 textFieldClass" fullWidth name="lengthOfConfirmationCode" value={data?.lengthOfConfirmationCode} onChange={handleChange}/>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Default Logo:
                  </div>
                </div>
                <div className="col-7 input-file text">
                  <select onChange={handleFile} style={{height:"30px",width:'30%'}}className="file-upload-option" >
                    <option value="KEEP">Keep Existing</option>
                    <option value="UPLOAD">Upload</option>
                    <option value="REMOVE">Remove</option>
                    
                  </select>
                  {submit === "UPLOAD" && <Input name="defaultLogoType" onChange={(e) => handleImage(e)} value={data?.defaultLogoType} type="file" className="mx-2 text" />}<span className="my-auto text mx-2"><a href="#">View..</a></span>
                </div>
              </div>
            </div>
         
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Google Translate API Key:
                  </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange}className="w-50 textFieldClass" fullWidth name="googleTranslateAPIKey" value={data?.googleTranslateAPIKey}/>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Crypto Key:
                  </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange}className="w-50 textFieldClass" fullWidth name="cryptoKey" value={data?.cryptoKey}/>
                {/* <Tooltip style={{top:"20%"}} className="cstm-tooltip checkBox" title="Key used for creating the HMAC signature hash for the form POST" arrow>
                  <InfoIcon/>
                </Tooltip> */}
                </div>
              </div>
            </div>
            {/* greg */}
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2"> 
                  Log Incoming Requests:
                  </div>
                </div>
                <div className="col-7">
                <Checkbox onChange={handleToogle} defaultChecked={false} />
                </div>
              </div>
            </div>
           {/* fgfbdr */}
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2"> 
                  Enable Warning Block:
                  </div>
                </div>
                <div className="col-7">
                <Checkbox className="complyColor" onChange={handleToogle} defaultChecked={false} />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Purge Redundant Submission Data:
                  </div>
                </div>
                <div className=" d-flex col-lg-6 col-12 text">
                {/* <FormGroup value={data?.purgeRedundantSubmissionData} name="purgeRedundantSubmissionData"className="d-block text">
                <FormControlLabel
    className="m-0 text"
    label="Aged: 3 months"
    control={<Checkbox checked={checkboxValues.threeMonths} onChange={handleCheckboxChange('threeMonths')} />}
  />
                 <FormControlLabel
    className="m-0 text"
    label="6 months"
    control={<Checkbox checked={checkboxValues.sixMonths} onChange={handleCheckboxChange('sixMonths')} />}
  />
                 <FormControlLabel
    className="m-0 text"
    label="9 months"
    control={<Checkbox checked={checkboxValues.nineMonths} onChange={handleCheckboxChange('nineMonths')} />}
  />
                  <FormControlLabel
    className="m-0 text"
    label="12 months"
    control={<Checkbox checked={checkboxValues.twelveMonths} onChange={handleCheckboxChange('twelveMonths')} />}
  />
                </FormGroup>  */}


    <FormControl>
  
  <RadioGroup
  row
   
   onChange={handleChange}
    name="purgeRedundantSubmissionData"
    value={data?.purgeRedundantSubmissionData}
  >
   <FormControlLabel
    className="m-0 text"
    label="3 months"
    value="3 months"
    control={<Radio />}
  />
                 <FormControlLabel
    className="m-0 text"
    label="6 months"
    value="6 months"
    control={<Radio />}
  />
                 <FormControlLabel
    className="m-0 text"
    label="9 months"
    value="9 months"
    control={<Radio />}
  />
                  <FormControlLabel
    className="m-0 text"
    label="12 months"
    value="12 months"
    control={<Radio />}
    />
  </RadioGroup>
</FormControl>
                <div  className="col-lg-2 mx-1 mt-2 ">
                <Button style={{fontSize:"8px",marginLeft:"3px"}}
                size="small"  
                  className="btn-cstm"
                >
                  Purge Now
                </Button>
                </div>
                </div>
               
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Run Exchange in an Iframe:
                  </div>
                </div>
                <div className="col-7">
                <Checkbox onChange={handleToogle} checked={data?.runExchangeInIframe} name="runExchangeInIframe" />
                </div>
              </div>
            </div>
           
             <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Default retroactive statement:
                  </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} rows={3} placeholder="MultiLine with rows: 2 and rowsMax: 4"className="w-50 h-20 textFieldClass"  fullWidth name="defaultRetroactiveStatement" value={data?.defaultRetroactiveStatement}/>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Under Maintenance :
                  </div>
                </div>
                <div className="col-7">
                <Checkbox onChange={handleToogle} checked={data?.underMaintenance} name="underMaintenance" />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Invalid Password Lock using Cookie - Time in Minutes:
                  </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} className="w-50 textFieldClass"  fullWidth name="name"/>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Invalid Password Lock using Cookie - Attempts:
                  </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} className="w-50 textFieldClass " fullWidth name="name"/>
                </div>
              </div>
            </div>
            {/* <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Enable MFA [multifactor authentication]:
                  </div>
                </div>
                <div className="col-7">
                <Checkbox onChange={handleToogle} defaultChecked={true} className="checkBox"/>
                </div>
              </div>
            </div> */}
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2" >
                  Twilio auth token
                  </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} className="w-50 textFieldClass" fullWidth name="twilioAuthToken" value={data?.twilioAuthToken}/>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Twilio account Sid
                  </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} className="w-50 textFieldClass" fullWidth name="twilioAccountSid" value={data?.twilioAccountSid}/>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Twilio SMS from mobile number
                  </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} className="w-50 textFieldClass" fullWidth name="twilioSMSFromMobileNumber" value={data?.twilioSMSFromMobileNumber}/>
                </div>
              </div>
            </div>
            {/* <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Invalid MFA time for Locking:
                  </div>
                </div>
                <div className="col-7">
                <TextField className="w-50 textFieldClass" fullWidth name="name"/>
                </div>
              </div>
            </div> */}
            {/* <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Invalid MFA attempts before Locking:
                  </div>
                </div>
                <div className="col-7">
                <TextField className="w-50 textFieldClass" fullWidth name="name"/>
                </div>
              </div>
            </div> */}
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Re-send token email feature:
                  </div>
                </div>
                <div className="col-7">
                <Checkbox onChange={handleToogle} checked={data?.reSendTokenEmailFeature } name="reSendTokenEmailFeature" />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Activate Non-email PIN process:
                  </div>
                </div>
                <div className="col-7 p-relative">
                <Checkbox onChange={handleToogle} checked={data?.activateNonEmailPINprocess} name="activateNonEmailPINprocess" /> 
                <Tooltip style={{top:"20%"}} className="cstm-tooltip checkBox" title="The below features will be amended by selecting this option: \n Email TOKEN feature – will be replaced by security question and answer process \n Resend confirmation code – will be replaced by security question and answer process" arrow>
                  <InfoIcon style={{fontSize:"14px",verticalAlign:"super"}}/>
                </Tooltip>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2"> 
                  No Token/PIN process:
                  </div>
                </div>
                <div className="col-7">
                <Checkbox onChange={handleToogle} defaultChecked={false}/>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Block Foreign Character Input
                  </div>
                </div>
                <div className="col-7">
                <Checkbox onChange={handleToogle} checked={data?.BlockForeignCharacterInput} name="BlockForeignCharacterInput" />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Hide header footer:
                  </div>
                </div>
                <div className="col-7">
                <Checkbox onChange={handleToogle}  />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Show Breadcrumbs:
                  </div>
                </div>
                <div className="col-7">
                <Checkbox  onChange={handleToogle}defaultChecked={true} />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Show Login Page:
                  </div>
                </div>
                <div className="col-7">
                <Checkbox onChange={handleToogle} defaultChecked={true}  />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
            Maximum number Of Attempts For Pin based Login:
            </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} className="w-50 textFieldClass" fullWidth name="MaxNumPinAttempt" value={data?.MaxNumPinAttempt}/>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Pin based Login Token Validity Time (Min):
            </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} className="w-50 textFieldClass" fullWidth name="PinValidityMin" value={data?.PinValidityMin} />
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Pin based Login Token Lock Out Time (Min):
            </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} className="w-50 textFieldClass" fullWidth  name="PinLockouttimeMin" value={data?.PinLockouttimeMin} />
                </div>
              </div>
            </div>
            {data?.activateNonEmailPINprocess ?( <div className="col-12 d-flex">
              <table class="table table-hover table-striped">
                <thead>
                  <TableRow>
                  <TableCell className="table_header"scope="col"  style={{backgroundColor:"white"}}>
                      Security Questions
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="table_head"scope="col" style={{ fontSize: "20px" }}>
                      Question
                    </TableCell>
                    <TableCell
                      scope="col"
                      style={{ fontSize: "20px" }}
                      className="w-25 table_head"
                    >
                      Question Hint
                    </TableCell>
                    <TableCell className="table_head"scope="col" style={{ fontSize: "20px" }}>
                      Question Translations
                    </TableCell>
                    <TableCell className="table_head"scope="col" style={{ fontSize: "20px" }}>
                    Question Hint Translations
                    </TableCell>
                    <TableCell className="table_head"scope="col" style={{ fontSize: "20px" }}>
                    Actions
                    </TableCell>
                  </TableRow>
                </thead>
                <TableBody>
                {tableData?.settingsQuestionData?.map((row, ind) => (
                  <TableRow key={row.id}>
                    <TableCell className="table_content"scope="row">{row.question}</TableCell>
                    <TableCell className="table_content">
                      {row.questionHint}
                    </TableCell>
                    {console.log(row,"ROW")}
                    <TableCell
                                 
                                  className="table_content"
                                  // onClick={() => getLangById(row.id)}
                                >
                                  <span
                                    className="addSubpage"
                                    onClick={() => {
                                      setOpen1(true);
                                      setDropDownData(row?.id);
                                      dispatch(
                                        getQuestionLanguageById (row?.id, (item) =>
                                          setRowId(item)
                                        )
                                      );
                                    }}
                                  >
                                    Select Languages
                                  </span>
                    {/* <Link className="table_content">Français US English Deutsch Español 日本人 Polish Chinese Content ID Italiano German Belgium India Brazil Colombia Finland Mexico Pakistan Slovakia Ukraine Canadian (English) Costa Rica</Link> */}
                    </TableCell>
                    <TableCell
                                 
                                  className="table_content"
                                  // onClick={() => getLangById(row.id)}
                                >
                                  <span
                                    className="addSubpage"
                                    onClick={() => {
                                      setOpen2(true);
                                      setDropDownData1(row?.id);
                                      dispatch(
                                        getHintLanguageById(
                                          row?.id,
                                          (item) => setRowId1(item)
                                        )
                                      );
                                    }}
                                  >
                                    Select Languages
                                  </span>
                    {/* <Link className="table_content">Français US English Deutsch Español 日本人 Polish Chinese Content ID Italiano German Belgium India Brazil Colombia Finland Mexico Pakistan Slovakia Ukraine Canadian (English) Costa Rica</Link> */}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <div className="d-flex">
                        <div className="d-flex mx-auto">
                         
                            <EditIcon   onClick={() => {
                              console.log(row.id,"oooo")
                                  setOpen(true);
                                  setEditId(row)
                               
                                 
                                }} style={{ color: "green",fontSize:"20px",cursor:'pointer' }} />
                      
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                    ))}
                  
                </TableBody>
              </table>
            </div>):""}
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2" >
                  API URL:
                  </div>
                </div>
                <div className="col-7">
                <TextField onChange={handleChange} className="w-100 textFieldClass" fullWidth name="APIURL" value={data?.APIURL}/>
                </div>
              </div>
            </div>


            <div className="col-12" >
            
                <div style={{fontSize:"13px",color:"black",fontWeight:'550'}} className="headerText custom_my_2">Request Headers:</div>

                <div className=" custom_my_2 mt-2  d-flex">
                  <div
                    className="col-5"
                    style={{ height: "370px",width:"50%" }}
                  >
                    <table class="table table-hover">
                      <thead>
                        <TableRow >
                          <TableCell
                            align="left"
                            style={{ fontSize: "20px" }}
                          ></TableCell>
                          <TableCell className="table_head" style={{backgroundColor:'#f3ededd9'}}>
                          Request Header Key
                          </TableCell>
                         
                        </TableRow>
                      </thead>
                      <tbody>
                      
                            {arr.map((i,ind)=>
                            {return(
                              <TableRow >
                                <TableCell className="text">
                               {ind+1}
                                </TableCell>
                                <TableCell className="textFieldClassInput">
                                  
                                  <TextField className="textFieldClassInput"
                                  fullWidth
                                    
                                 
                                    name="key"
                                   
                                  />
                                   
                                </TableCell>
                               
                              </TableRow>
                            )})  }
                      
                      </tbody>
                    </table>
                  </div>

                  <div
                    className="col-5 " style={{ height: "370px",width:"50%" }}
                    
                  >
                  

                    <table class="table table-hover">
                      <thead>
                        <TableRow>
                          <TableCell
                            align="middle"
                            scope="col"
                            style={{ fontSize: "20px" }}
                          ></TableCell>
                          <TableCell className="table_head" style={{backgroundColor:'#f3ededd9'}}>
                          Request Header Value
                          </TableCell>
                        
                        </TableRow>
                      </thead>
                      <tbody>
                       
                        
                           
                      {arr.map((i,ind)=>
                            {return(
                              <TableRow >
                                <TableCell className="text">
                              
                                </TableCell>
                                <TableCell className="textFieldClassInput">
                                  
                                  <TextField className="textFieldClassInput"
                                  fullWidth
                                    
                                
                                    name="key"
                                   
                                  />
                                    
                           
                                </TableCell>
                               
                              </TableRow>
                            )})  }
                        
                        
                      </tbody>
                    </table>
                  </div>
                  
                </div>
                <div className="col-12 d-flex">
              <div className="row my-1 w-100">
              <div className=" w-100  mb-2 " style={{fontWeight:'550'}}>
                  Agent Headers:
                  </div>
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Tax forms Agent:
                  </div>
                </div>
                <div className="col-7 input-file text">
                  <select name="TaxformsAgent" value={data?.TaxformsAgent}onChange={handleChange} style={{height:"30px",width:'30%'}}>
                  <option value="1">2022 Payout Foreign Tax v2 Test</option>
		<option value="2">Antony Testing</option>
		<option value="3">Anurag Testing</option>
		<option value="4">Ashok Testing</option>
		<option value="5">BU_SS_UAT_NAME_S1_123</option>
		<option value="6">BU_SS_UAT_NAME_S1_123_new12</option>
		<option value="7">Demo_BusinessPayPal</option>
		<option value="8">Demo_BusinessPayPal</option>
		<option value="9">Demo_BusinessPayPal</option>
		<option value="10">Demo_BusinessUnit</option>
		<option value="11">DINESHBUID</option>
		<option value="13">Group DC</option>
		<option value="14">Group SC</option>
		<option value="15">Group Tax</option>
		<option value="16">Hemraj Testing</option>
		<option value="17">Info Exchange Agent</option>
		<option value="18">LogTesting</option>
		<option value="19">Mahesh Testing</option>
		<option value="20">Oli Testing</option>
		<option value="21">Ritesh Testing</option>
		<option value="22">royBUIDname</option>
		<option value="23">Santosh Testing</option>
		<option value="24">Suresh Testing</option>
		<option value="25">Tanoy Testing</option>
		<option value="26">ValueCoders</option>
		<option value="27">ValueCoders DC</option>
		<option value="28">ValueCoders SC</option>
                    
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  Dual forms Agent:
                  </div>
                </div>
                <div className="col-7 input-file text">
                <select name="DualformsAgent" value={data?.DualformsAgent}onChange={handleChange} style={{height:"30px",width:'30%'}}>
                  <option value="00000000-0000-0000-0000-000000000000">--- Select ---</option>
                  <option value="1">2022 Payout Foreign Tax v2 Test</option>
		<option value="2">Antony Testing</option>
		<option value="3">Anurag Testing</option>
		<option value="4">Ashok Testing</option>
		<option value="5">BU_SS_UAT_NAME_S1_123</option>
		<option value="6">BU_SS_UAT_NAME_S1_123_new12</option>
		<option value="7">Demo_BusinessPayPal</option>
		<option value="8">Demo_BusinessPayPal</option>
		<option value="9">Demo_BusinessPayPal</option>
		<option value="10">Demo_BusinessUnit</option>
		<option value="11">DINESHBUID</option>
		<option value="13">Group DC</option>
		<option value="14">Group SC</option>
		<option value="15">Group Tax</option>
		<option value="16">Hemraj Testing</option>
		<option value="17">Info Exchange Agent</option>
		<option value="18">LogTesting</option>
		<option value="19">Mahesh Testing</option>
		<option value="20">Oli Testing</option>
		<option value="21">Ritesh Testing</option>
		<option value="22">royBUIDname</option>
		<option value="23">Santosh Testing</option>
		<option value="24">Suresh Testing</option>
		<option value="25">Tanoy Testing</option>
		<option value="26">ValueCoders</option>
		<option value="27">ValueCoders DC</option>
		<option value="28">ValueCoders SC</option>
                    
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="row my-1 w-100">
                <div className="col-5 d-flex">
                  <div className="my-auto text w-100" variant="body2">
                  CRS forms Agent:
                  </div>
                </div>
                <div className="col-7 input-file text">
                <select name="CRSformsAgent" value={data?.CRSformsAgent}onChange={handleChange} style={{height:"30px",width:'30%'}}>
                  <option value="00000000-0000-0000-0000-000000000000">--- Select ---</option>
		<option value="1">2022 Payout Foreign Tax v2 Test</option>
		<option value="2">Antony Testing</option>
		<option value="3">Anurag Testing</option>
		<option value="4">Ashok Testing</option>
		<option value="5">BU_SS_UAT_NAME_S1_123</option>
		<option value="6">BU_SS_UAT_NAME_S1_123_new12</option>
		<option value="7">Demo_BusinessPayPal</option>
		<option value="8">Demo_BusinessPayPal</option>
		<option value="9">Demo_BusinessPayPal</option>
		<option value="10">Demo_BusinessUnit</option>
		<option value="11">DINESHBUID</option>
		<option value="13">Group DC</option>
		<option value="14">Group SC</option>
		<option value="15">Group Tax</option>
		<option value="16">Hemraj Testing</option>
		<option value="17">Info Exchange Agent</option>
		<option value="18">LogTesting</option>
		<option value="19">Mahesh Testing</option>
		<option value="20">Oli Testing</option>
		<option value="21">Ritesh Testing</option>
		<option value="22">royBUIDname</option>
		<option value="23">Santosh Testing</option>
		<option value="24">Suresh Testing</option>
		<option value="25">Tanoy Testing</option>
		<option value="26">ValueCoders</option>
		<option value="27">ValueCoders DC</option>
		<option value="28">ValueCoders SC</option>
                    
                  </select>
                </div>
              </div>
            </div>
            </div>
            
           
          </div>
         {/* <div className=" row m-1 card p-3" style={{ overflowX: "auto" }}>
        
          </div> */}
                  </div>
                  
          <div className="col-12">
            <Button
            size="small"
            onClick={handleSubmit}
              className="btn-cstm mb-3 mt-1"
              style={{ float: "right"}}
            >
              Save
            </Button>
         
        </div>
        

        </div>
      </div>
       <SettingsModal
        open={open}
        setOpen={setOpen}
        EditId={editId}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose1}
      />
        <Transition
        open={open1}
        rowId={rowId}
        redirectFunc={(langId, i) => {
          history.push(`/content_language/${langId}/${i?.id}`);
        }}
        langId={dropDownData}
        setOpen={setOpen1}
        handleClickOpen={handleClickOpen1}
        handleClose={handleClose1}
      />
      <Transition
        open={open2}
        rowId={rowId1}
        redirectFunc={(langId, i) => {
          history.push(`/content_language/${langId}/${i?.id}`);
        }}
        langId={dropDownData1}
        setOpen={setOpen2}
        handleClickOpen={handleClickOpen2}
        handleClose={handleClose2}
      />
  </Fragment>
  );
}
