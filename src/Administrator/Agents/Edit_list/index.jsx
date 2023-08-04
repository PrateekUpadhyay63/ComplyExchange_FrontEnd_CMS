import React, { Fragment, useState } from "react";
import { Route, useParams, useHistory } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import DeleteIcon from "@mui/icons-material/Delete";
import FormLabel from "@mui/material/FormLabel";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import "bootstrap/dist/css/bootstrap.css";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { Editor } from "react-draft-wysiwyg";
import EditIcon from "@mui/icons-material/Edit";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import table from "@mui/material/table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import SPTModal from "../../../reusables/SPTEdit";
import Taxpayer from "../../../reusables/Taxpayer";

import {
  TextField,
  Typography,
  Collapse,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
  Card,
  Divider,
  Grid,
  Checkbox,
  Button,
  Breadcrumbs,
  Select,
  MenuItem,
  Link,
  Input,
} from "@mui/material";
import "./index.scss";
// Charts

// import ChartsSparklines1 from "./Sparklines1/";
// import ChartsSparklines2 from "./Sparklines2/";
// import ChartsChartJs from "./ChartJs/";
// import ChartsGauges from "./Gauges/";
// import ApexCharts from "./ApexCharts/";

// Layout

import AppHeader from "../../../Layout/AppHeader/";
import AppSidebar from "../../../Layout/AppSidebar/";
import AppFooter from "../../../Layout/AppFooter/";

// Theme Options

import ThemeOptions from "../../../Layout/ThemeOptions/";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getImpAgentsCountries,
  getHiddenAgentsCountry,
  getCH3HiddenCountries,
  getCH4HiddenCountries,
  getCH4ImpCountries,
  getDocMandatory,
  getUSVisaHidden,
  getCapacityHidden,
  getExemptCodeDisable,
  getIncomeCodeHidden,
  getFATCAHidden,
  getPaymentType,
  getFatcaGiinDisabled,
  getSpecialSptHidden,
  postHiddenAgentsCountry,
  postCH3HiddenCountries,
  postCH4HiddenCountries,
  postCH4ImpCountries,
  postDocMandatory,
  postUSVisaHidden,
  postCapacityHidden,
  postExemptCodeDisable,
  postIncomeCodeHidden,
  postImpAgentsCountries,
  postFatcaHidden,
  postPaymentType,
  postFatcaGiinDisabled,
  postAgentSptHidden,
  getAgentEformSelection,
} from "../../../redux/Actions";
function EditList({ match }) {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState("");
  const [getCh3HiddenState, setCh3HiddenState] = useState([]);
  const [getCountriesImpState, setCountriesImpState] = useState([]);
  const [getCountriesHiddenState, setCountriesHiddenState] = useState([]);
  const [getCh4HiddenState, setCh4HiddenState] = useState([]);
  const [getCh4ImpState, setCh4ImpState] = useState([]);
  const [getDocMandatoryState, setDocMandatoryState] = useState([]);
  const [getExmCodeDisabledState, setExmCodeDisabledState] = useState([]);
  const [getIncomeCodeHiddenState, setIncomeCodeHiddenState] = useState([]);
  const [getUSVisaHiddenState, StatesetUSVisaHiddenState] = useState([]);
  const [getFATCAHiddenState, setFATCAHiddenState] = useState([]);
  const [getPaymentTypeState, setPaymentTypeState] = useState([]);
  const [getGiinDisabledState, setGiinDisabledState] = useState([]);
  const [getSptQuestionState, setSptQuestionState] = useState([]);
  const [getCapacityHiddenState, setCapacityHiddenState] = useState([]);
  const [radioValue, setRadioValue] = useState();
  const [editorValue, setEditorValue] = useState(EditorState.createEmpty());
  const [isEdit, setIsEdit] = useState(false);

  const getImpAgentCountriesData = useSelector(
    (state) => state.getAgentsImpCountiesReducer
  );
  const getHiddenAgentsCountries = useSelector(
    (state) => state.getAgentsHiddenCountiesReducer
  );
  const getCh3Hidden = useSelector(
    (state) => state.getCh3HiddenCountiesReducer
  );
  const getCh4Hidden = useSelector(
    (state) => state.getCh4HiddenCountiesReducer
  );
  const getCh4Imp = useSelector((state) => state.getCh4ImpCountiesReducer);

  const getCapacityHiddenData = useSelector(
    (state) => state.getCapacityHiddenReducer
  );
  const getDocumentMandatoryData = useSelector(
    (state) => state.getDocumentMandatoryReducer
  );
  const getExemptCodeDisableData = useSelector(
    (state) => state.getExemptCodeDisableReducer
  );
  const getIncomeCodeHiddenData = useSelector(
    (state) => state.getIncomeCodeHiddenReducer
  );

  const getFatcaHiddenData = useSelector(
    (state) => state.getFatcaHiddenReducer
  );

  const getPaymentTypeData = useSelector(
    (state) => state.getPaymentTypeReducer
  );

  const getFatcaGiinDisabledData = useSelector(
    (state) => state.getFatcaGiinDiabledReducer
  );

  const specualSptHiddenData = useSelector(
    (state) => state.getAgentSptHiddenReducer
  );

  const getUSVisaTypeHiddenData = useSelector(
    (state) => state.getUSVisaTypeHiddenReducer
  );

  const getAgentEformSelectionData = useSelector(
    (state) => state.getEformSelectionWarningReducer.getAgentEformSelectionData
  );

  useEffect(() => {
    if (params?.id) {
      dispatch(getImpAgentsCountries(params.id));
      dispatch(getHiddenAgentsCountry(params.id));
      dispatch(getCH3HiddenCountries(params.id));
      dispatch(getCH4HiddenCountries(params.id));
      dispatch(getCH4ImpCountries(params.id));
      dispatch(getCapacityHidden(params.id));
      dispatch(getDocMandatory(params.id));
      dispatch(getExemptCodeDisable(params.id));
      dispatch(getIncomeCodeHidden(params.id));
      dispatch(getUSVisaHidden(params.id));
      dispatch(getFATCAHidden(params.id));
      dispatch(getPaymentType(params.id));
      dispatch(getFatcaGiinDisabled(params.id));
      dispatch(getSpecialSptHidden(params.id));
      dispatch(getAgentEformSelection(params.id));
    }
    // const result = getHiddenAgentsCountries?.getHiddenAgentsCountries?.filter((i)=>{
    //   if(i.agentId==params.id)
    //   return i.countryId
    //  });
    //  console.log(result,"result")
    //  pushArray(result)
  }, []);

  useEffect(() => {
    setCh3HiddenState(filterchapter3EntityTypeId(getCh3Hidden?.getCh3Hidden));
  }, [getCh3Hidden]);

  function filterchapter3EntityTypeId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.chapter3EntityTypeId);
  }

  useEffect(() => {
    setCountriesImpState(
      filterImpAgentCountriesTypeId(
        getImpAgentCountriesData?.getImpAgentsCountries
      )
    );
  }, [getImpAgentCountriesData]);

  function filterImpAgentCountriesTypeId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.countryId);
  }

  useEffect(() => {
    setCountriesHiddenState(
      filterImpAgentCountriesTypeId(
        getHiddenAgentsCountries?.getHiddenAgentsCountries
      )
    );
  }, [getHiddenAgentsCountries]);

  useEffect(() => {
    setCh4HiddenState(filterchapter4EntityTypeId(getCh4Hidden?.getCh4Hidden));
  }, [getCh4Hidden]);

  function filterchapter4EntityTypeId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.chapter4EntityTypeId);
  }
  useEffect(() => {
    setCh3HiddenState(filterchapter4EntityTypeId(getCh4Imp?.getCh4Imp));
  }, [getCh4Imp]);

  function filterchapter3EntityTypeId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.chapter3EntityTypeId);
  }
  // useEffect(()=>{
  //   setDocMandatoryState(filterMandetoryStateId(getDocumentMandatoryData?.getDocMandatoryData))
  // },[getDocumentMandatoryData])

  // function filterMandetoryStateId(objectsArray) {
  //   return objectsArray
  //     ?.filter(obj => obj?.agentId !== 0)
  //     ?.map(obj => {
  //       "documentationId":obj?.documentationId,
  //       "isUSSubmission":obj?.isUSSubmission,
  //       "isSelfCertification": obj?.isSelfCertification
  //     });
  // }
  useEffect(() => {
    setExmCodeDisabledState(
      filterexemptionCodeId(getExemptCodeDisableData?.getExemptCodeDisableData)
    );
  }, [getExemptCodeDisableData]);

  function filterexemptionCodeId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.exemptionCodeId);
  }

  useEffect(() => {
    setIncomeCodeHiddenState(
      filterincomeCodeId(getIncomeCodeHiddenData?.getIncomeCodeHidden)
    );
  }, [getIncomeCodeHiddenData]);

  function filterincomeCodeId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.incomeCodeId);
  }

  useEffect(() => {
    StatesetUSVisaHiddenState(
      filterusVisaTypeId(getUSVisaTypeHiddenData?.getusVisaHiddenData)
    );
  }, [getUSVisaTypeHiddenData]);

  function filterusVisaTypeId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.usVisaTypeId);
  }

  useEffect(() => {
    setFATCAHiddenState(
      filterfatcaExemptionCodeId(getFatcaHiddenData?.getFatcaHiddenData)
    );
  }, [getFatcaHiddenData]);

  function filterfatcaExemptionCodeId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.fatcaExemptionCodeId);
  }

  useEffect(() => {
    setFATCAHiddenState(
      filtercapacityId(getCapacityHiddenData?.getCapacityData)
    );
  }, [getCapacityHiddenData]);

  function filtercapacityId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.capacityId);
  }

  useEffect(() => {
    setFATCAHiddenState(
      filterfatcaEntityTypeId(
        getFatcaGiinDisabledData?.getFatcaGiinDisabledData
      )
    );
  }, [getFatcaGiinDisabledData]);

  function filterfatcaEntityTypeId(objectsArray) {
    return objectsArray
      ?.filter((obj) => obj?.agentId !== 0)
      ?.map((obj) => obj.fatcaEntityTypeId);
  }

  // const handleToogled = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.checked });
  // };

  function handleToggle(clientId, selectedData, setSelectedData) {
    let selectedClients = selectedData;
    const index = selectedClients?.indexOf(clientId);
    if (index >= 0) {
      selectedClients.splice(index, 1);
    } else {
      selectedClients.push(clientId);
    }
    console.log(selectedClients, "selectedClients");
    setSelectedData(selectedClients);
  }

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleOpen = (val) => {
    if (open === val) {
      setOpen("");
    } else setOpen(val);
  };

  //   const handleCheckboxChange = () => {
  //     setIsChecked(!isChecked);
  //   };
  // function CheckboxToggle() {
  //   return (
  //     <div>
  //       <label>
  //         <input
  //           type="checkbox"
  //           checked={isChecked}
  //           onChange={handleCheckboxChange}
  //         />
  //         Toggle Checkbox
  //       </label>
  //       <p>{isChecked ? 'Checkbox is checked' : 'Checkbox is unchecked'}</p>
  //     </div>
  //   );
  // }

  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleClickOpen = () => setOpen1(true);
  const handleClose = () => setOpen1(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(postHiddenAgentsCountry(getCountriesHiddenState,params?.id)),
    // dispatch(postCH3HiddenCountries(getCh3HiddenState,params?.id)),
    // dispatch(postCH4HiddenCountries(getCh4HiddenState,params?.id)),
    // dispatch(postCH4ImpCountries(getCh4ImpState,params?.id)),
    // // dispatch(postDocMandatory(getDocMandatoryState,params?.id)),
    // dispatch(postUSVisaHidden(getUSVisaHiddenState,params?.id)),
    // dispatch(postCapacityHidden(getCapacityHiddenState,params?.id)),
    // dispatch(postExemptCodeDisable(getExmCodeDisabledState,params?.id)),
    // dispatch(postIncomeCodeHidden(getIncomeCodeHiddenState,params?.id)),
    // dispatch(postImpAgentsCountries(getCountriesImpState,params?.id)),
    // dispatch(postFatcaHidden(getFATCAHiddenState,params?.id)),
    // // dispatch(postPaymentType(getPaymentTypeState,params?.id)),
    // dispatch(postFatcaGiinDisabled(getGiinDisabledState,params?.id)),
    // // dispatch(postAgentSptHidden(getSptQuestionState,params?.id)),
    history.push("/agent");
  };
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
                <Link
                  underline="hover"
                  color="#0e548c"
                  onClick={() => {
                    history.push("/agent");
                  }}
                >
                  Agents
                </Link>
                <p underline="hover" color="#000000">
                  Agent Edit List
                </p>
              </Breadcrumbs>
            </div>

            <div className="row m-1 border p-3 box_style">
              <div className="col-12">
                <label className="row headingLabel complyColor">
                  Antony Test
                </label>
              </div>
            </div>
            <div className=" row m-1  card p-3">
              <div className="col-12 d-flex overflow-x-auto p-0">
                <table class="table table-hover table-striped">
                  <TableHead>
                    <TableRow>
                      <TableCell className="table_head" scope="col">
                        <label>Documentary Evidence – replacement Q&A</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Not FTIN Provided</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Tax Jurisdiction Mismatch</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Tax Residency Mismatch</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Telephone Country Mismatch</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Address Country Mismatch</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>U.S. Citizenship Additional Info</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Bank Branch Country Mismatch</label>
                      </TableCell>
                      <TableCell scope="col"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">Advisor</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => history.push("/agent_content_edit")}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Another Person
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => history.push("/agent_content_edit")}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Government Individual
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => history.push("/agent_content_edit")}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Power Of Attorney
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => history.push("/agent_content_edit")}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">Spouse Etc</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">Student</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">Teacher</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Telephone Number
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Temporary Resident
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Virtual Office
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Not a Financial Account
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Jurisdiction on IRS List
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Exempt Organization
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            U.S. Territory
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </table>
              </div>
              <div className="col-12 d-flex overflow-x-auto p-0 mt-3">
                <table class="table table-hover table-striped">
                  <TableHead>
                    <TableRow>
                      <TableCell className="table_head" scope="col">
                        <label>Taxpayer id type</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>State</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Non U.S. Individual</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>U.S. Individual</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>U.S. Entity</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Non U.S. Entity</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Intermediary</label>
                      </TableCell>
                      <TableCell className="table_head" scope="col">
                        <label>Non U.S. Government</label>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">Applied for</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">More</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">EIN</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">Normal</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            Foreign (Non US) TIN
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">Normal</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">GIIN</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">Normal</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">QIEIN</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">Normal</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">SSN/ITIN</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">Normal</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            U.S. TIN not applicable
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">Normal</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">
                            U.S. TIN not available
                          </label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">Normal</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">WP/WTEIN</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">Normal</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">WPEIN</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            onClick={() => {
                              setOpen2(true);
                            }}
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">Normal</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <label className="table_content">WTEIN</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <EditIcon
                            style={{
                              color: "green",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          />
                          <label className="table_content">More</label>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={true} />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="d-flex">
                          <Checkbox className="p-0" defaultChecked={false} />
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </table>
              </div>
              <div className="col-12 d-flex overflow-x-auto p-0 mt-3">
                <table class="table table-hover table-striped">
                  <TableHead>
                    <TableRow>
                      <TableCell className="table_head" scope="col">
                        <label>SPT question</label>
                      </TableCell>
                      <TableCell
                        align="center"
                        className="table_head"
                        scope="col"
                      >
                        <label>Display Alias</label>
                      </TableCell>
                      <TableCell
                        align="center"
                        className="table_head"
                        scope="col"
                      >
                        <label>Hidden</label>
                      </TableCell>
                      <TableCell
                        align="right"
                        className="table_head"
                        scope="col"
                      >
                        <label>Action</label>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* specualSptHiddenData */}
                    {specualSptHiddenData?.specualSptHiddenData?.map(
                      (i, ind) => {
                        return (
                          <TableRow>
                            <TableCell>
                              <div>
                                <label className="table_content">
                                  {i.name}
                                </label>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="d-flex">
                                <label className="table_content">
                                  {i.alias}
                                </label>
                              </div>
                            </TableCell>
                            <TableCell align="center">
                              <div className="mr-2">
                                <Checkbox
                                  className="p-0"
                                  defaultChecked={i.hidden}
                                />
                              </div>
                            </TableCell>
                            <TableCell align="right">
                              <div className="justifyContent-flex-end">
                                <EditIcon
                                  onClick={() => {
                                    setOpen1(true);
                                  }}
                                  style={{
                                    color: "green",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    justifyContent: "flex-end ",
                                  }}
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </table>
              </div>

              {!isEdit ? (
                <div className="col-12 overflow-x-auto p-0">
                  <label className="headings mt-1">
                    E-Form Selection Warning
                  </label>
                  <table class="table table-hover table-striped ">
                    <TableHead>
                      <TableRow>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head">Form Type</label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head">Render</label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head">Continue</label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head">Opt out URL</label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head">
                              Content Block - Continue
                            </label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head">
                              Content Block - Opt-out Process
                            </label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <EditIcon
                              onClick={() => {
                                setIsEdit(true);
                              }}
                              style={{
                                color: "green",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {getAgentEformSelectionData?.map((i, ind) => {
                        return (
                          <TableRow>
                            <TableCell>
                              <div>
                                <label className="table_content">
                                  {i.formType}
                                </label>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="d-flex">
                                <Checkbox
                                  className="p-0 checkBox"
                                  name="isContinue"
                                  //  onClick={(e) => handleToogled(e)}
                                  checked={i.isContinue}
                                />
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="d-flex">
                                <Checkbox
                                  className="p-0 checkBox"
                                  name="isContinue"
                                  //  onClick={(e) => handleToogled(e)}
                                  checked={i.isContinue}
                                />
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="d-flex"> {i.optoutURL} </div>
                            </TableCell>
                            <TableCell>
                              <Link
                                onClick={() => {
                                  history.push("/agent_Form_edit_content");
                                }}
                                className="table_text"
                              >
                                Form Selection Warning - {i.formType}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <Link
                                onClick={() => {
                                  history.push("/OptOutForm");
                                }}
                                className="table_textt"
                              >
                                Form Selection Warning - Opt-out {i.formType}
                              </Link>
                            </TableCell>
                            <TableCell>
                              <div className="d-flex"></div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </table>
                </div>
              ) : (
                <div className="col-12 overflow-x-auto p-0">
                  <label className="headings mt-1">
                    E-Form Selection Warning
                  </label>
                  <table class="table table-hover table-striped ">
                    <TableHead>
                      <TableRow>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head"></label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head">
                              Check To Render
                            </label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head">
                              Check to Continue
                            </label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head">OR</label>
                          </div>
                        </TableCell>
                        <TableCell scope="col">
                          <div>
                            <label className="table_head"> Opt-out URL</label>
                          </div>
                        </TableCell>

                        <TableCell scope="col"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div>
                            <label className="table_content">W-8BEN</label>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>

                        <TableCell>
                          <TextField
                            fullWidth
                            className="text textFieldClass"
                            name="includeDefaultEnglish"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <label className="table_content">W-8BEN-E</label>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>

                        <TableCell>
                          <TextField
                            fullWidth
                            className="text textFieldClass"
                            name="includeDefaultEnglish"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <label className="table_content">W-8ECI</label>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>

                        <TableCell>
                          <TextField
                            fullWidth
                            className="text textFieldClass"
                            name="includeDefaultEnglish"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <label className="table_content">W-8EXP</label>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>

                        <TableCell>
                          <TextField
                            fullWidth
                            className="text textFieldClass"
                            name="includeDefaultEnglish"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <label className="table_content">W-8IMY</label>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>

                        <TableCell>
                          <TextField
                            fullWidth
                            className="text textFieldClass"
                            name="includeDefaultEnglish"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <label className="table_content">W-9</label>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>

                        <TableCell>
                          <TextField
                            fullWidth
                            className="text textFieldClass"
                            name="includeDefaultEnglish"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <label className="table_content">8233</label>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>

                        <TableCell>
                          <TextField
                            fullWidth
                            className="text textFieldClass"
                            name="includeDefaultEnglish"
                          />
                        </TableCell>
                        <TableCell>
                          <div className="d-flex"></div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </table>
                  <div>
                    <div className="actionBtn ">
                      <Button
                        onClick={() => {
                          setIsEdit(false);
                        }}
                        type="reset"
                        size="small"
                        variant="outlined"
                        sx={{ mr: 1 }}
                      >
                        cancel
                      </Button>

                      <Button
                        onClick={() => {
                          setIsEdit(false);
                        }}
                        size="small"
                        type="submit"
                        variant="contained"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="col-12  p-0">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <label className="headings">
                      Chapter 3 - Hidden Entity types:
                    </label>
                    <div className="maxdiv " style={{ height: "300px" }}>
                      <table class="table table-hover table-striped">
                        <TableBody>
                          {getCh3Hidden?.getCh3Hidden?.map((i, ind) => {
                            return (
                              <TableRow key={i.id}>
                                {/* {console.log(
                                  i.agentId,
                                  params.id,
                                  "CHECK",
                                  i.agentId == params.id
                                )} */}
                                <TableCell className="d-flex tableField">
                                  <Checkbox
                                    className="mx-1"
                                    defaultChecked={i.agentId == params.id}
                                    onClick={(e) =>
                                      handleToggle(
                                        i.chapter3EntityTypeId,
                                        getCh3HiddenState,
                                        setCh3HiddenState
                                      )
                                    }
                                  />
                                  <label className="d-flex table_content">
                                    {i.name}
                                  </label>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </table>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12 tableField">
                    <label className="headings">
                      Chapter 4 - Hidden Entity types:
                    </label>
                    <div
                      className="maxdiv tableField"
                      style={{ height: "300px" }}
                    >
                      <table className="table table-hover table-striped ">
                        <TableBody className="tableField">
                          {getCh4Hidden?.getCh4Hidden?.map((i, ind) => {
                            return (
                              <TableRow className="tableField" key={i.id}>
                                {/* {console.log(
                                  i.agentId,
                                  params.id,
                                  "CHECK",
                                  i.agentId == params.id
                                )} */}
                                <TableCell className="d-flex tableField">
                                  <Checkbox
                                    className="mx-1"
                                    defaultChecked={i.agentId == params.id}
                                    onClick={(e) =>
                                      handleToggle(
                                        i.chapter4EntityTypeId,
                                        getCh4HiddenState,
                                        setCh4HiddenState
                                      )
                                    }
                                  />
                                  <label className="mx-2 d-flex my-auto table_content">
                                    {i.name}
                                  </label>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </table>
                    </div>
                  </div>

                  <div className="col-12 ">
                    <label className="headings">
                      Chapter 4 - Mark Entity as "important" (appear at top of
                      list):
                    </label>
                    <div className="maxdiv " style={{ height: "300px" }}>
                      <table class="table table-hover table-striped">
                        <TableBody>
                          {getCh4Imp?.getCh4Imp?.map((i, ind) => {
                            return (
                              <TableRow key={i.id}>
                                <TableCell className="d-flex tableField">
                                  <Checkbox
                                    className="mx-1"
                                    defaultChecked={i.agentId == params.id}
                                    onClick={(e) =>
                                      handleToggle(
                                        i.chapter4EntityTypeId,
                                        getCh4ImpState,
                                        setCh4ImpState
                                      )
                                    }
                                  />
                                  <label className="mx-2 d-flex my-auto table_content">
                                    {i.name}
                                  </label>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 p-0">
                <div className="row">
                  <div className="col-12">
                    <label className="headings">
                      Chapter 4 - GIIN Challenge Question Disabled (GIIN is not
                      expected):
                    </label>
                    <div className="maxdiv" style={{ height: "300px" }}>
                      <table class="table table-hover table-striped">
                        <TableBody>
                          {/* fatcaEntityTypeId */}
                          {console.log(
                            getFatcaGiinDisabledData?.getFatcaGiinDisabledData,
                            "getFatcaGiinDisabledData?.getFatcaGiinDisabledData"
                          )}
                          {getFatcaGiinDisabledData?.getFatcaGiinDisabledData?.map(
                            (i, ind) => (
                              <TableRow>
                                <TableCell className="d-flex tableField">
                                  <Checkbox
                                    className="mx-1"
                                    defaultChecked={i.agentId == params.id}
                                    onClick={(e) =>
                                      handleToggle(
                                        i.fatcaEntityTypeId,
                                        getGiinDisabledState,
                                        setGiinDisabledState
                                      )
                                    }
                                  />
                                  <label className="mx-2 d-flex my-auto table_content">
                                    {i.name}
                                  </label>
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 ">
                    <label className="headings">Hidden Countries:</label>
                    <div className="maxdiv " style={{ height: "300px" }}>
                      <table class="table table-hover table-striped">
                        <TableBody>
                          {getHiddenAgentsCountries?.getHiddenAgentsCountries?.map(
                            (i, ind) => {
                              return (
                                <TableRow key={i.id}>
                                  <TableCell className="d-flex tableField">
                                    <Checkbox
                                      className="mx-1"
                                      defaultChecked={i.agentId == params.id}
                                      onClick={(e) =>
                                        handleToggle(
                                          i.countryId,
                                          getCountriesHiddenState,
                                          setCountriesHiddenState
                                        )
                                      }
                                    />
                                    <label className="mx-2 d-flex my-auto table_content">
                                      {i.name}
                                    </label>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 ">
                    <label className="headings">
                      Mark Countries as "important" (appear at top of list):
                    </label>
                    <div className="maxdiv" style={{ height: "300px" }}>
                      <table class="table table-hover table-striped">
                        <TableBody>
                          {getImpAgentCountriesData?.getImpAgentsCountries?.map(
                            (i, ind) => {
                              return (
                                <TableRow key={i.id}>
                                  <TableCell className="d-flex tableField">
                                    <Checkbox
                                      className="mx-1"
                                      defaultChecked={i.agentId == params.id}
                                      onClick={(e) =>
                                        handleToggle(
                                          i.countryId,
                                          getCountriesImpState,
                                          setCountriesImpState
                                        )
                                      }
                                    />
                                    <label className="mx-2 d-flex my-auto table_content">
                                      {i.name}
                                    </label>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12 ">
                    <label className="headings">Hidden Capacities:</label>
                    <div className="maxdiv " style={{ height: "300px" }}>
                      <table class="table table-hover table-striped">
                        <TableBody>
                          {getCapacityHiddenData?.getCapacityData?.map(
                            (i, ind) => {
                              return (
                                <TableRow key={i.capacityId}>
                                  <TableCell className="d-flex tableField">
                                    <Checkbox
                                      className="mx-1"
                                      defaultChecked={i.agentId == params.id}
                                      onClick={(e) =>
                                        handleToggle(
                                          i.capacityId,
                                          getCapacityHiddenState,
                                          setCapacityHiddenState
                                        )
                                      }
                                    />
                                    <label className="mx-2 d-flex my-auto table_content">
                                      {i.name}
                                    </label>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  p-0">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <label className="headings">
                      Hidden Income Codes (check to remove from drop down
                      selections):
                    </label>
                    <div className="maxdiv " style={{ height: "300px" }}>
                      <table className="table table-hover table-striped">
                        <TableBody>
                          {getIncomeCodeHiddenData?.getIncomeCodeHidden?.map(
                            (i, ind) => {
                              return (
                                <TableRow key={i.incomeCodeId}>
                                  <TableCell className="d-flex tableField">
                                    <Checkbox
                                      className="mx-1"
                                      type="Checkbox"
                                      defaultChecked={i.agentId == params?.id}
                                      onClick={(e) =>
                                        handleToggle(
                                          i.incomeCodeId,
                                          getIncomeCodeHiddenState,
                                          setIncomeCodeHiddenState
                                        )
                                      }
                                    />
                                    <label className="mx-2 d-flex my-auto table_content">
                                      {i.name}
                                    </label>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <label className="headings">Mandatory Documents:</label>
                    <div className="maxdiv " style={{ height: "300px" }}>
                      <table class="table table-hover table-striped">
                        <TableHead>
                          <TableRow className="table_head">
                            <TableCell className="table_head" scope="col">
                              Document Name
                            </TableCell>
                            <TableCell className="table_head" scope="col">
                              USSubmission
                            </TableCell>
                            <TableCell className="table_head" scope="col">
                              SelfCertification
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {getDocumentMandatoryData?.getDocMandatoryData?.map(
                            (i, ind) => {
                              return (
                                <TableRow>
                                  <TableCell className="tableField">
                                    <div className="d-flex">
                                      <label className="table_content mx-2">
                                        {i.name}
                                      </label>
                                    </div>
                                  </TableCell>
                                  <TableCell className="tableField">
                                    <div className="d-flex">
                                      <Checkbox
                                        className="mx-1"
                                        defaultChecked={i.isUSSubmission}
                                      />
                                    </div>
                                  </TableCell>
                                  <TableCell className="tableField">
                                    <div className="d-flex">
                                      <Checkbox
                                        className="mx-1"
                                        defaultChecked={i.isSelfCertification}
                                        //  onClick={(e) => handleToogle(e)}
                                      />
                                    </div>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12  p-0">
                <div className="row">
                  <div className=" col-12">
                    <label className="headings">
                      Disabled Exemption Codes (still visible but not
                      selectable):
                    </label>
                    <div className="maxdiv  " style={{ height: "300px" }}>
                      <table class="table table-hover table-striped">
                        <TableBody>
                          {getExemptCodeDisableData?.getExemptCodeDisableData?.map(
                            (i, ind) => {
                              return (
                                <TableRow>
                                  <TableCell className="d-flex tableField">
                                    <Checkbox
                                      className="mx-1"
                                      type="Checkbox"
                                      defaultChecked={i.agentId == params?.id}
                                      onClick={(e) =>
                                        handleToggle(
                                          i.exemptionCodeId,
                                          getExmCodeDisabledState,
                                          setExmCodeDisabledState
                                        )
                                      }
                                    />
                                    <label className="mx-2 d-flex my-auto table_content">
                                      {i.name}
                                    </label>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                  <div className="col-12 ">
                    <label className="headings">
                      Hidden FATCA Exemptions for U.S. Persons (check to remove
                      from drop down selections):
                    </label>
                    <div className="maxdiv " style={{ height: "300px" }}>
                      <table class="table table-hover table-striped">
                        <TableBody>
                          {getFatcaHiddenData?.getFatcaHiddenData?.map(
                            (i, ind) => {
                              return (
                                <TableRow>
                                  <TableCell className="d-flex tableField">
                                    <Checkbox
                                      className="mx-1"
                                      type="Checkbox"
                                      defaultChecked={i.agentId == params.id}
                                      onClick={(e) =>
                                        handleToggle(
                                          i.fatcaExemptionCodeId,
                                          getFATCAHiddenState,
                                          setFATCAHiddenState
                                        )
                                      }
                                    />
                                    {/* fatcaExemptionCodeId */}
                                    <label className="mx-2 d-flex my-auto table_content">
                                      {i.name}
                                    </label>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 p-0">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <label className="headings">
                      Hidden U.S. Visa Types (Form 8233):
                    </label>
                    <div className="maxdiv " style={{ height: "260px" }}>
                      <table class="table table-hover table-striped">

                        <TableBody>
                          {getUSVisaTypeHiddenData?.getusVisaHiddenData?.map(
                            (i, ind) => {
                              return (
                                <TableRow>
                                  <TableCell className="d-flex tableField">
                                    <Checkbox
                                      className="mx-1"
                                      type="Checkbox"
                                      defaultChecked={i.agentId == params.id}
                                      onClick={(e) =>
                                        handleToggle(
                                          i.usVisaTypeId,
                                          getUSVisaHiddenState,
                                          StatesetUSVisaHiddenState
                                        )
                                      }
                                    />
                                    <label className="mx-2 d-flex my-auto table_content">
                                      {i.name}
                                    </label>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </table>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-1">
                    <div className="headings">Payment Type:</div>
                    <div className="maxdiv " style={{ height: "180px" }}>
                      <table className="table table-hover table-striped">
                        <TableHead>
                          <TableRow className="table_head">
                            <TableCell className="table_head" scope="col">
                              Type
                            </TableCell>
                            <TableCell className="table_head" scope="col">
                              Hide
                            </TableCell>
                            <TableCell className="table_head" scope="col">
                              Make Default
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>

                          {getPaymentTypeData?.getPaymentTypeData?.map(
                            (i, ind) => {
                              return (
                                <TableRow>
                                  <TableCell className="tableField">
                                    <div className="d-flex">
                                      <label className="table_content mx-2">
                                        {i.name}
                                      </label>
                                      {/* paymentTypeId */}
                                    </div>
                                  </TableCell>
                                  <TableCell className="tableField mx-2">
                                    <div className="d-flex ">
                                      <Checkbox
                                        defaultChecked={i.agentId == params.id}
                                      />
                                    </div>
                                  </TableCell>
                                  <TableCell className="tableField mx-2">
                                    <div className="d-flex mx-4">
                                      <FormControlLabel
                                        defaultChecked={i.makeDefault}
                                        value={i.name}
                                        control={<Radio />}
                                      />
                                    </div>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )}
                          <RadioGroup
                            name="radioValue"
                            className="radioClass "
                            onChange={handleChange}
                          ></RadioGroup>
                        </TableBody>
                      </table>
                    </div>
                    <label className="table_content">
                      <b> Note:</b> If 2 types are hidden,'Payment Type' will
                      not show
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mx-1">
              <div className="col-12 mb-1 mx-auto p-0 ">
                <Button
                  size="small"
                  className="btn-cstm"
                  style={{ float: "right" }}
                  onClick={handleSubmit}
                >
                  Save and Return
                </Button>
                <Button
                  size="small"
                  className="btn-cstm mx-2"
                  style={{ float: "right" }}
                  onClick={() => history.push("/agent")}
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SPTModal
        open={open1}
        setOpen={setOpen1}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />

      <Taxpayer
        open={open2}
        setOpen={setOpen2}
        handleClickOpen={handleClickOpen2}
        handleClose={handleClose2}
      />
    </Fragment>
  );
}

export default EditList;
