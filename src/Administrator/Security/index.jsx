import React, { Fragment, useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ThemeOptions from "../../Layout/ThemeOptions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import DialogTransition from "../../../reusables/deleteDialog";
// import { getAllFormInstructions, deleteFormInstruction} from "../../../redux/Actions";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AppFooter from "../../Layout/AppFooter/";
import "./index.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
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
  Select,
  Breadcrumbs,
  MenuItem,
  Checkbox,
  Button,
  Tooltip,
  Link,
} from "@mui/material";
// import FormInstruction from "../../../reusables/FormInstruction"
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { getSecurityKeys, upsertSecurityKeys } from "../../redux/Actions";
import moment from "moment/moment";
function createData(agent, content, action) {
  return { agent, content, action };
}

export default function ContentManagement() {
  const history = useHistory();
  const row = [];
  const [open1, setOpen1] = useState(false);
  const handleClickOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [idData, setIdData] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.getSecurityKeysReducer);

  useEffect(() => {
    dispatch(getSecurityKeys());
  }, []);
  // {
  //   "id": 1,
  //   "key": "string",
  //   "keyType": "string",
  //   "createdOn": "2023-07-22T23:06:00.7",
  //   "modifiedOn": "0001-01-01T00:00:00"
  // }
  //   const setSubmit = (e) => {
  //     e.preventDefault();
  //     setPage(1);
  //     setSize(10);
  //     dispatch(getAllFormInstructions(page, size, search));
  //   };
  //   const deleteItems = async () => {
  //     dispatch(deleteFormInstruction(idData));
  //     dispatch(getAllFormInstructions(page, size));
  //   };

  //   useEffect(() => {
  //     dispatch(getAllFormInstructions(page, size));
  //   }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // upsertSecurityKeys(data)
  };

  return (
    <Fragment>
      <ThemeOptions />
      {/* <AppHeader /> */}
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className=" row mx-4"></div>
            <div role="presentation" className="bread_crumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="#171616" aria-current="page">
                  Security
                </Link>
              </Breadcrumbs>
            </div>
            {/* <div className=" row m-1  border p-3 box_style">
              <div className="col-8 d-flex ">
                <TextField
                  style={{ backgroundColor: "#fff" }}
                  name="search"
                  className="mx-md-3 mx-auto w-50 rounded-Input"
                  placeholder="Search"
                  type="search"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="col-4">
                <Button
                  size="small"
                  //   onClick={(e) => {
                  //     setSubmit(e);
                  //   }}
                  className="btn-cstm"
                  style={{ float: "right" }}
                >
                  Search
                </Button>
              </div>
            </div> */}
            <div className=" row m-1  card p-0">
              <Paper>
                <div className="headerText my-2 mx-4 ">Security Keys</div>

                <div className=" my-2  d-flex">
                  <div
                    className="col-5 borderbox maxdiv mx-4"
                    style={{ height: "320px" }}
                  >
                    <table class="table table-hover">
                      <thead>
                        <TableRow>
                          <TableCell
                            align="center"
                            scope="col"
                            style={{ fontSize: "20px" }}
                          ></TableCell>
                          <TableCell className="table_head" scope="col">
                            Incoming Request Key
                          </TableCell>
                          <TableCell scope="col" className="table_head">
                            Last Updated On
                          </TableCell>
                        </TableRow>
                      </thead>
                      <tbody>
                        {tableData?.securityKeyData?.map((i, ind) => {
                          if (i.keyId == 1) {
                            return (
                              <TableRow key={ind}>
                                <TableCell className="text" scope="row">
                                  {i.id}
                                </TableCell>
                                <TableCell>
                                  <TextField
                                    className="w-100 textFieldClass"
                                    value={i.key}
                                    name="name"
                                  />
                                </TableCell>
                                <TableCell>
                                  <div className="text">
                                    {/* For time add  HH:mm:ss */}
                                    {moment(i?.modifiedOnmoment).format(
                                      "YYYY-MM-DD"
                                    )
                                      ? moment(i?.modifiedOnmoment).format(
                                          "YYYY-MM-DD"
                                        )
                                      : moment(i?.createdOn).format(
                                          "YYYY-MM-DD"
                                        )}
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div
                    className="col-5 borderbox  maxdiv mx-4"
                    style={{ height: "320px" }}
                  >
                    <div></div>

                    <table class="table table-hover">
                      <thead>
                        <TableRow>
                          <TableCell
                            align="middle"
                            scope="col"
                            style={{ fontSize: "20px" }}
                          ></TableCell>
                          <TableCell className="table_head" scope="col">
                            Outgoing Request Key
                          </TableCell>
                          <TableCell scope="col" className="table_head">
                            Last Updated On
                          </TableCell>
                        </TableRow>
                      </thead>
                      <tbody>
                      {tableData?.securityKeyData?.map((i, ind) => {
                          if (i.keyId == 2) {
                            return (
                              <TableRow key={ind}>
                                <TableCell className="text" scope="row">
                                  {i.id}
                                </TableCell>
                                <TableCell>
                                  <TextField
                                    className="w-100 textFieldClass"
                                    value={i.key}
                                    name="name"
                                  />
                                </TableCell>
                                <TableCell>
                                  <div className="text">
                                    {/* For time add  HH:mm:ss */}
                                    {moment(i?.modifiedOnmoment).format(
                                      "YYYY-MM-DD"
                                    )
                                      ? moment(i?.modifiedOnmoment).format(
                                          "YYYY-MM-DD"
                                        )
                                      : moment(i?.createdOn).format(
                                          "YYYY-MM-DD"
                                        )}
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Paper>
            </div>
            <div className="actionBtn">
              <Button
                className="btn-cstm  mx-1 my-1"
                style={{ float: "right", marginLeft: "5px" }}
                size="small"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Save
              </Button>
            </div>
          </div>
          {/* {tableData?.formInstructionData?.totalPages > 1 ? ( */}
          {/* <Stack style={{ marginTop: "10px" }} spacing={2}>
              <Pagination
                count={tableData?.formInstructionData?.totalPages}
                onChange={(e, value) => setPage(value)}
              />
            </Stack> */}
          {/* ) : (
            ""
          )} */}
        </div>
      </div>

      {/* <FormInstruction
        open={open}
        idData={idData}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
       <DialogTransition
        open={open1}
        deleteItems={deleteItems}
        setOpen={setOpen1}
        handleClickOpen={handleClickOpen1}
        handleClose={handleClose1}
        deleteApi={deleteFormInstruction}
        getAllApi={getAllFormInstructions}
      /> */}
    </Fragment>
  );
}
