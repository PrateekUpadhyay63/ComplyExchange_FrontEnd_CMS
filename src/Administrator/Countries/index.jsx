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

import DialogModal from "../../reusables/Countries";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AppFooter from "../../Layout/AppFooter/";
import "./index.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  TextField,
  Typography,
  Breadcrumbs,
  Collapse,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
  Card,
  Divider,
  Grid,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Tooltip,
  Link,
} from "@mui/material";
// import FormInstruction from "../../../reusables/FormInstruction"
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
function createData(agent, content, action) {
  return { agent, content, action };
}


export default function ContentManagement() {
  const history = useHistory();
const row=[]
  const [open1, setOpen1] = useState(false);
  const handleClickOpen1= () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);


  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [idData, setIdData] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
//   const tableData = useSelector((state) => state.getAllFormInstructionReducer);

//   useEffect(() => {
//     dispatch(getAllFormInstructions(page, size));
//   }, []);

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
                <Link
                   underline="hover"
                   color="#171616"
                 
                  
                >
            Countries
                </Link>
              </Breadcrumbs>
            </div>
            <div className="row headingLabel complyColor">List of Countries (Treaty Country, Applicable Articles, Withholding Rates & Income Code selection)</div>
            <div className=" row m-1  border p-3 box_style">
            <div className="col-8 d-flex ">
                  
                  <TextField
                    style={{ backgroundColor: "#fff", }}
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
            </div>
            <div
              className=" row m-1  card p-3"
              style={{ overflowX: "auto" }}
            >
              <Paper>

              <div className="col-12 d-flex">
                    <table class="table table-hover table-striped">
                      <TableHead>
                        <TableRow>
                          <TableCell
                           className='table_head'
                          >
                         Pre-set Treaty Rates: Auto populate all Treaty Countries
                          </TableCell>
                       
                    
                          <TableCell
                         style={{justifyContent:'flex-end'}}
                           className='table_head'
                          >
                            Actions
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      {/* {console.log(tableData,"tableData?.formInstructionData?.records")} */}
                      <TableBody>
                        {/* {tableData?.formInstructionData?.records?.map((row) => ( */}
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell className="table_content" component="th" scope="row">
                            0, 7.5, 10, 15
                            </TableCell>

                          

                            <TableCell className="table_content" align="end">
                              <div className="actionRow">
                              
                                  <EditIcon style={{ color: "green",fontSize:"20px" }}
                                  onClick={() => {
                                    setOpen1(true);
                            
                                  }} />
                             
                              
                                  {/* <DeleteIcon style={{ size:"small", color: "red",fontSize:"20px" ,marginLeft:"5px"}} 
                                  onClick={()=>{
                                    setOpen1(true);
                                    setIdData(row.id)
                                  }}   /> */}
                               
                            
                              </div>
                            </TableCell>
                          </TableRow>
                        {/* ))} */}
                      </TableBody>
                    </table>
                  </div>
                {/* <h1 >Forms Instructions</h1> */}
            
                  <div className="col-12 d-flex">
                    <table class="table table-hover table-striped">
                      <TableHead>
                        <TableRow>
                          <TableCell
                           className='table_head'
                          >
                           Name
                          </TableCell>
                          <TableCell
                            align="center"
                           className='table_head'
                          >
                           IGA Established
                          </TableCell>
                          <TableCell
                            align="center"
                           className='table_head'
                          >
                            Is tax treaty country
                          </TableCell>
                          <TableCell
                            align="center"
                           className='table_head'
                          >
                          	Treaty effective year
                          </TableCell>
                          <TableCell
                            align="center"
                           className='table_head'
                          >
               CRS Exchange In
                          </TableCell>

                          <TableCell
                            align="center"
                           className='table_head'
                          >
                   Articles List Set
                          </TableCell>
                          <TableCell
                            align="center"
                           className='table_head'
                          >
                 LOB
                          </TableCell>
                    
                          <TableCell
                            align="center"
                           className='table_head'
                          >
                            Actions
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      {/* {console.log(tableData,"tableData?.formInstructionData?.records")} */}
                      <TableBody>
                        {/* {tableData?.formInstructionData?.records?.map((row) => ( */}
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell className="table_content" component="th" scope="row">
                            Afghanistan
                            </TableCell>

                            <TableCell className="table_content" align="center">	Model 1</TableCell>
                            <TableCell className="table_content" align="center">{row.url}</TableCell>
                            <TableCell className="table_content" align="center">{row.url}</TableCell>
                            <TableCell className="table_content" align="center">1</TableCell>
                            <TableCell className="table_content" align="center">{row.url}</TableCell>
                            <TableCell className="table_content" align="center">{row.url}</TableCell>

                            <TableCell className="table_content" align="center">
                              <div className="actionRow">
                              
                                  <EditIcon style={{ color: "green",fontSize:"20px" }}
                                  onClick={() => {
                                   history.push("/countries_edit")
                                  }} />
                             
                              
                                  {/* <DeleteIcon style={{ size:"small", color: "red",fontSize:"20px" ,marginLeft:"5px"}} 
                                  onClick={()=>{
                                    setOpen1(true);
                                    setIdData(row.id)
                                  }}   /> */}
                               
                            
                              </div>
                            </TableCell>
                          </TableRow>
                        {/* ))} */}
                      </TableBody>
                    </table>
                  </div>
              
              </Paper>
         
            </div>
            <div className="col-12">
              <Button
                className="btn-cstm  mt-2 mx-1"
                style={{ float: "right",marginLeft:"5px" }}
                size="small"

                onClick={() => {
                  setOpen(true);
                  setIdData(row.id);
                }} 
              >
               import 
              </Button>
              <Button size="small"className="btn-cstm mt-2 " style={{ float: "right" }}>
                Export
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
    <DialogModal
        open={open1}

        setOpen={setOpen1}
        handleClickOpen={handleClickOpen1}
        handleClose={handleClose1}
 
      />
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
