import React, { Fragment, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import "bootstrap/dist/css/bootstrap.css";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { Editor } from "react-draft-wysiwyg";
import AppHeader from "../../../Layout/AppHeader/";
import AppSidebar from "../../../Layout/AppSidebar/";

// Theme Options
import {
  TextField,
  Typography,
  Collapse,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
  Card,
  Breadcrumbs,
  Divider,
  Grid,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import "./index.scss";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
// Charts
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import table from "@mui/material/table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import AppFooter from "../../../Layout/AppFooter/";

import {
  getSelfCertificationById,
  postSelfCertificationHidden,
} from "../../../redux/Actions";

import ThemeOptions from "../../../Layout/ThemeOptions/";
import { CheckBox } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./index.scss";
import { useParams, useHistory } from "react-router-dom";

function FormType({ match }) {
  const dispatch = useDispatch();
  let params = useParams();
  const history = useHistory();
  const [open, setOpen] = useState("");
  const [editorValue, setEditorValue] = useState(EditorState.createEmpty());

  const handleOpen = (val) => {
    if (open === val) {
      setOpen("");
    } else setOpen(val);
  };
  useEffect(() => {
    dispatch(
      getSelfCertificationById(params.id, (item) => {
        console.log("iittemm", item)
        if(item.length){
          setData(item[0]);
        }
        
      })
    );
  }, []);
  const nameData = useSelector((state) => state.getSelfCertificationReducer);
  const [data, setData] = useState({
    agentId: params?.id,
    selfcertvisibilty: false,
    visibilty8233: false,
    enableW9: false,
    enableW8BEN: false,
    enableW8BENE: false,
    enableW8IMY: false,
    enableW8ECI: false,
    enableW8EXP: false,
  });

  //getSelfCertificationReducer

  const handleToogle = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      agentId: params?.id,
      selfcertvisibilty: data.selfcertvisibilty,
      visibilty8233: data.visibilty8233,
      enableW9: data.enableW9,
      enableW8BEN: data.enableW8BEN,
      enableW8BENE: data.enableW8BENE,
      enableW8IMY: data.enableW8IMY,
      enableW8ECI: data.enableW8ECI,
      enableW8EXP: data.enableW8EXP,
    };
    dispatch(postSelfCertificationHidden(payload));
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
              <Breadcrumbs aria-div="breadcrumb">
                <Link
                  underline="hover"
                  color="#0e548c"
                  onClick={() => {
                    history.push("/agent");
                  }}
                >
                  Agents
                </Link>
                <Link underline="hover" color="#171616">
                  Agent Form Type
                </Link>
              </Breadcrumbs>
            </div>

            <div className="col-12 row m-1 border p-3 box_style">
              <h5 className="row headingLabel complyColor my-2">Antony Test</h5>
            </div>
            <div
              className=" row  m-md-1 card p-3"
              style={{ overflowX: "auto" }}
            >
              <div className="headings">
                Self Certification Activation Settings:
              </div>
              <div className="col-12 d-flex overflow-x-auto">
                <table class="table table-hover table-striped">
                  <TableHead>
                    <TableRow>
                      <TableCell scope="col" className="table_head">
                        Type
                      </TableCell>
                      <TableCell scope="col" className="w-25">
                        <div
                          style={{ minWidth: "max-content" }}
                          className="table_head"
                        >
                          W series
                        </div>
                      </TableCell>
                      <TableCell scope="col" className="table_head">
                        Self Certification
                      </TableCell>
                      <TableCell scope="col"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className="tableField">
                        <div className="text-start">
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content mx-1"
                          >
                            U.S. Individual
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <div className="d-flex align-items-center">
                          <Checkbox className="p-0" defaultChecked={true} />
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content"
                          >
                            W9
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <div className="d-flex align-items-center">
                          <Checkbox className="p-0" />
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content"
                          >
                            Self Certification
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <Select
                          className="selectBox"
                          style={{ textAlign: "center" }}
                          defaultValue={1}
                          fullWidth
                          name="parent"
                        >
                          <MenuItem value="1">---Select---</MenuItem>
                          <MenuItem value="">Affidavit</MenuItem>
                          <MenuItem value="">Connected documentation</MenuItem>
                          <MenuItem value="">---</MenuItem>
                          <MenuItem value="">Armed Forces Card</MenuItem>
                          <MenuItem value="">Birth Certificate</MenuItem>
                          <MenuItem value="">Work visa</MenuItem>
                          <MenuItem value="">---</MenuItem>
                          <MenuItem value="">Other</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="tableField">
                        <div className="text-start">
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content mx-1"
                          >
                            U.S. Entity
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <div className="d-flex align-items-center">
                          <Checkbox className="p-0" defaultChecked={true} />
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content"
                          >
                            W9
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <div className="d-flex align-items-center">
                          <Checkbox className="p-0" />
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content"
                          >
                            Self Certification
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <Select
                          className="selectBox"
                          style={{ textAlign: "center" }}
                          defaultValue={1}
                          fullWidth
                          name="parent"
                        >
                          <MenuItem value="1">---Select---</MenuItem>
                          <MenuItem value="">Affidavit</MenuItem>
                          <MenuItem value="">Connected documentation</MenuItem>
                          <MenuItem value="">---</MenuItem>
                          <MenuItem value="">Armed Forces Card</MenuItem>
                          <MenuItem value="">Birth Certificate</MenuItem>
                          <MenuItem value="">Work visa</MenuItem>
                          <MenuItem value="">---</MenuItem>
                          <MenuItem value="">Other</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="tableField">
                        <div className="text-start">
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content mx-1"
                          >
                            Non U.S. Individual
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="tableField">
                        <div className="d-flex align-items-center">
                          <Checkbox className="p-0" defaultChecked={true} />
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content"
                          >
                            W9
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <div className="d-flex align-items-center">
                          <Checkbox className="p-0" />
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content"
                          >
                            Self Certification
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <Select
                          className="selectBox"
                          defaultValue={1}
                          style={{ textAlign: "center" }}
                          fullWidth
                          name="parent"
                        >
                          <MenuItem value="1">---Select---</MenuItem>
                          <MenuItem value="">Affidavit</MenuItem>
                          <MenuItem value="">Connected documentation</MenuItem>
                          <MenuItem value="">---</MenuItem>
                          <MenuItem value="">Armed Forces Card</MenuItem>
                          <MenuItem value="">Birth Certificate</MenuItem>
                          <MenuItem value="">Work visa</MenuItem>
                          <MenuItem value="">---</MenuItem>
                          <MenuItem value="">Other</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="tableField">
                        <div className="text-start">
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content mx-1"
                          >
                            Non U.S. Entity
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <div className="d-flex align-items-center">
                          <Checkbox className="p-0" defaultChecked={true} />
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content m-0"
                          >
                            W9
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <div className="d-flex align-items-center">
                          <Checkbox className="p-0" />
                          <div
                            style={{ minWidth: "max-content" }}
                            className="table_content"
                          >
                            Self Certification
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="tableField">
                        <Select
                          className="selectBox"
                          defaultValue={1}
                          fullWidth
                          style={{ textAlign: "center" }}
                        >
                          <MenuItem value="1">---Select---</MenuItem>
                          <MenuItem value="">Affidavit</MenuItem>
                          <MenuItem value="">Connected documentation</MenuItem>
                          <MenuItem value="">---</MenuItem>
                          <MenuItem value="">Armed Forces Card</MenuItem>
                          <MenuItem value="">Birth Certificate</MenuItem>
                          <MenuItem value="">Work visa</MenuItem>
                          <MenuItem value="">---</MenuItem>
                          <MenuItem value="">Other</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </table>
              </div>
              <div className="col-12 d-flex">
                <table class="table table-hover table-striped">
                  <TableHead>
                    <TableRow className="col-12">
                      <TableCell className="table_header col-12">
                        Functionality to show and hide selfcert and 8233 in Form
                        Selection page
                      </TableCell>
                      <TableCell scope="col-12" colSpan={9}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className="tableField">
                      <TableCell>
                        {/* {console.log("dataa",nameData.selfCertificationById)} */}
                        <Checkbox
                        name="selfcertvisibilty"
                        onClick={(e) => handleToogle(e)}
                        checked={data?.selfcertvisibilty} className="p-0" defaultChecked={true} />
                        <div className="table_content align-items-center">
                          selfcert
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          className="p-0"
                          name="visibilty8233"
                          onClick={(e) => handleToogle(e)}
                          checked={data?.visibilty8233}
                        />
                        <div className="table_content align-items-center">
                          8233
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          className="p-0"
                          name="enableW9"
                          onClick={(e) => handleToogle(e)}
                          checked={data?.enableW9}
                        />
                        <div
                          className="table_content align-items-center"
                          style={{ width: "70px" }}
                        >
                          W9
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          className="p-0"
                          name="enableW8BEN"
                          onClick={(e) => handleToogle(e)}
                          checked={data?.enableW8BEN}
                        />
                        <div
                          className="table_content align-items-center"
                          style={{ width: "70px" }}
                        >
                          W-8BEN
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          className="p-0"
                          name="enableW8BENE"
                          onClick={(e) => handleToogle(e)}
                          checked={data?.enableW8BENE}
                        />
                        <div
                          className="table_content align-items-center"
                          style={{ width: "70px" }}
                        >
                          W-8BENE
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          className="p-0"
                          name="enableW8IMY"
                          onClick={(e) => handleToogle(e)}
                          checked={data?.enableW8IMY}
                        />
                        <div
                          className="table_content align-items-center"
                          style={{ width: "70px" }}
                        >
                          W-8IMY
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          className="p-0"
                          name="enableW8ECI"
                          onClick={(e) => handleToogle(e)}
                          checked={data?.enableW8ECI}
                        />
                        <div
                          className="table_content align-items-center"
                          style={{ width: "70px" }}
                        >
                          W-8ECI
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Checkbox
                          className="p-0"
                          name="enableW8EXP"
                          onClick={(e) => handleToogle(e)}
                          checked={data?.enableW8EXP}
                       
                        />
                        <div
                          className="table_content align-items-center"
                          style={{ width: "70px" }}
                        >
                          W-8EXP
                        </div>
                      </TableCell>
                     
                    </TableRow>
                  </TableBody>
                </table>
              </div>
            </div>

            <div
              className="actionBtn"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                size="small"
                className="btn-cstm mx-2 mt-1"
                style={{ float: "right" }}
              >
                Back
              </Button>
              <Button
                size="small"
                className="btn-cstm mt-1 "
                onClick={(e) => handleSubmit(e)}
                style={{ float: "right", margin: "0px !important" }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FormType;
