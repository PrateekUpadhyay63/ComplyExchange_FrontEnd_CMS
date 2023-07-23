import React, { Fragment, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ThemeOptions from "../../../Layout/ThemeOptions/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AppHeader from "../../../Layout/AppHeader/";
import { useDispatch, useSelector } from "react-redux";
import Transition from "../../../reusables/languagesModal";
import AppSidebar from "../../../Layout/AppSidebar/";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {exportContent, getAllContentType , getAllLanguages ,getContentLanguageById,importContent} from "../../../redux/Actions";
import { Route, useHistory } from "react-router-dom";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AppFooter from "../../../Layout/AppFooter/";
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
  MenuItem,
  Checkbox,
  Button,
  Tooltip,
  Breadcrumbs,
  Link,
} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import DialogTransition from "../../../reusables/deleteDialog";
import Modal from "../../../reusables/htmlDialog"

// getAllContentTypeByIdReducer   getAllContentType


const typeIdList = [{ ContentBlock: 1 }, { EasyHelp: 2 }, { Phrases: 3 }];
export default function ContentManagement() {
  const dispatch = useDispatch();
  const history=useHistory();
  const [typeId, setTypeId] = React.useState(1);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rowId, setRowId] = useState({});
  const [fileData,setFileData] =useState();
  const [open1, setOpen1] = useState(false);
  const handleClickOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [idData, setIdData] = useState(0);
  const [dropDownData, setDropDownData] = useState([]);
  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => setOpen2(true);
  const handleClose2 = () => {
    setOpen2(false);
    setRowId({});
  };
  const languageData = useSelector((state) => state.LanguagesReducer);
  const [data,setData]=React.useState({
    // id: 4,
    name: "",
    text: "",
    moreText: "",
    language: null,
    translation: null,
    toolTip: "",
    typeId: null,
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const tableData = useSelector((state) => state.getAllContentTypeByIdReducer);

  useEffect(() => {
    dispatch(getAllContentType());
    dispatch(getAllLanguages())
  }, []);



  

  console.log(tableData,"tableData")
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
      Content Block
                </Link>
              </Breadcrumbs>
            </div>
            <div className=" row m-1  border p-3 box_style">
              <div className="col-8 d-flex">
               
                <TextField
                  style={{ backgroundColor: "#fff" }}
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
                <Button  size="small"className="btn-cstm" style={{ float: "right", display:"none" }}>
                  Search
                </Button>
              </div>
            </div>
            <div className=" row m-1  card p-3" style={{ overflowX: "auto" }}>
              <div className="col-12 d-flex">
                <table class="table table-hover table-striped">
                  <Paper>
                    <TableContainer sx={{}}>
                      <Table sx={{ minWidth: 650 }} class="table table-hover table-striped">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              className='table_head'
                            >
                              Name
                            </TableCell>
                           

                            <TableCell 
                              align="left"
                              className='table_head'
                            >
                              Translations
                            </TableCell>

                            <TableCell
                              align="right"
                              className='table_head'
                            >
                              Action
                            </TableCell>
                            
                          </TableRow>
                        </TableHead>
                         {tableData?.contentData && tableData?.contentData.length ? (
                        <TableBody>
                          {
                          tableData?.contentData.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell className="table_content "
                                
                              
                               
                              >
                                {row.name}
                              </TableCell>

                             
                              <TableCell
                              align="left"
                              className="table_content"
                              // onClick={() => getLangById(row.id)}
                            >
                              <span
                                className="addSubpage "
                                onClick={() => {
                                  setOpen2(true);
                                  setDropDownData(row?.id);
                                  dispatch(
                                    getContentLanguageById(row?.id, (item) =>
                                      setRowId(item)
                                    )
                                  );
                                }}
                              >
                                Select Languages
                              </span>
                            </TableCell>
                              <TableCell className="table_content" align="right">
                                {row.action}
                                <div className="actionRow">
                                 
                                    <EditIcon style={{ color: "green" , fontSize:'20px' }}
                                    onClick={() => {
                                      history.push(
                                        `/content_edits/${row.id}`
                                      );
                                    }}/>
                              
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                        ) : <div className="notDataDiv">No Data Available</div>} 
                      </Table>
                    </TableContainer>
                  </Paper>
                </table>
              </div>
            </div>
              <div className="col-12 mb-4 mt-2" >
                <Button  size="small"className="btn-cstm mx-1 mb-4" style={{ float: "right",marginLeft:'5px', }} onClick={()=>{
                   setOpen1(true)
                }}>
                  Import 
                </Button>
               
                <Button  size="small"className="btn-cstm  mb-4" style={{ float: "right" ,marginLeft:'5px'}} onClick={()=>{dispatch(exportContent())}}>
                  Export 
                </Button>
              </div>
            {/* <Stack style={{marginLeft:'20px'}}spacing={2}>
            <Pagination
                  count={tableData?.pageData?.totalPages}
                  onChange={(e, value) => setPage(value)}
                />
            </Stack> */}
          </div>
        </div>
      </div>
      <DialogTransition
        open={open}
        // deleteItems={deleteItems}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        // deleteApi={deletePAGES}
        // getAllApi={getAllPages}
      />

<Transition
        open={open2}
        rowId={rowId}
        redirectFunc={(langId,i) => {
          history.push(`/content_language/${langId}/${i?.id}`);
        }}
        langId={dropDownData}
        setOpen={setOpen2}
        handleClickOpen={handleClickOpen2}
        handleClose={handleClose2}
      />


      <Modal
       open={open1}
       // deleteItems={deleteItems}
       fileData={fileData}
       setFileData={setFileData}
       dispatch={dispatch}
       setOpen={setOpen1}
       handleClickOpen={handleClickOpen1}
       handleClose={handleClose1}
       Heading="Import Content Block Data"
       apiCall={(formData)=>{
    dispatch(importContent(formData))
       }}
      
      />
    </Fragment>
  );
}
