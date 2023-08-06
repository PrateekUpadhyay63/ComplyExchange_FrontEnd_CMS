import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  TextField,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
  Card,
  Divider,
  Breadcrumbs,
  div,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Link,
  Input,
  Radio,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ThemeOptions from "../../../Layout/ThemeOptions/";
import AppHeader from "../../../Layout/AppHeader/";
import { Fragment } from "react";
import AppSidebar from "../../../Layout/AppSidebar/";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./index.scss";
import {
  GetDocumentationTypes,
  getDocById,
  createDocType,
  updateDocType,
  GetDocumentationCH3,
  GetDocumentationCH4,
  getch3ById,
  getch4ById,
} from "../../../redux/Actions";
export default function Language_details() {
  const dispatch = useDispatch();
  let params = useParams();
  const history = useHistory();

  // const DocCh3data = params?.id ? useSelector((state)=>state.getdocch3ReducerById) : ((state)=>state.getdocCH3Reducer)  
  // const DocCh4data = params?.id ? useSelector((state)=>state.getdocCH4Reducer): ((state)=>state.getdocCH4Reducer)


  const nameData = useSelector((state) => state.getdocTypeReducer);
  const [data, setData] = useState({
    name: "",
    documentationId: 0,
    documentationTypeId: 0,
    chapter3EntityItems: [
      {
        chapter3TypeId: 0
      }
    ],
    chapter4EntityItems: [
      {
        chapter4TypeId: 0
      }
    ]
  });
  const [DocCh3data,setDocCh3data]=useState([]);
  const [DocCh4data,setDocCh4data]=useState([]);


  const [error, setError] = useState({
    name: false,
    documentationId: false,
  });

  useEffect(()=>{
    if(params.id){
      dispatch(getch3ById(params?.id,(data)=>{setDocCh3data(data)}));
      dispatch(getch4ById(params?.id,(data)=>{setDocCh4data(data)}));

    }else{
    dispatch(GetDocumentationCH3((data)=>{setDocCh3data(data)}));
    dispatch(GetDocumentationCH4((data)=>{setDocCh4data(data)}));
    }
  },[params?.id])


  useEffect(()=>{
   
  
  },[])

  useEffect(() => {
    dispatch(GetDocumentationTypes());
    if (params.id) {
      dispatch(
        getDocById(params.id, (data) => {
          setData({ ...data, name: data.name });
          setData({ ...data, documentationId: data.documentTypeId });
        })
      );
    }
  }, []);
  const handleToogle = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.name == "" || data.documentationId <= 1) {
      if (data.name.trim() == "") {
        setError({ ...error, name: true });
      } else if (data.documentationId <= 0) {
        setError({
          ...error,
          documentationId: true,
        });
      }
    } else {
      setError({
        name: false,
        documentationId: false,
      });
      if (params?.id) {
        dispatch(updateDocType(data));
      } else {
        dispatch(createDocType(data));
      }
      history.push("/documentation");
    }
  };
console.log(DocCh3data,DocCh4data,"asdfghjkl")


  return (
    <Fragment>
      <ThemeOptions />
      
      <div className="app-main">
        <AppSidebar />
        {/* <form onSubmit={documentationI}> */}
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div role="presentation" className="bread_crumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <p
                  underline="hover"
                  color="#0c62a8"
                  onClick={() => {
                    history.push("/documentation");
                  }}
                >
                  Documentation
                </p>
                <Link underline="hover" color="#000000">
                  Documentation Details
                </Link>
              </Breadcrumbs>
            </div>
            <div className="col-12 my-3"></div>
            <div className=" row m-1 border p-3 box_style">
              {
                <div className="row headingLabel complyColor">
                  {params.id ? " Edit Documentation" : "Add Documentation"}
                </div>
              }
              <div className="col-12 my-3 head">
                <div className="w-100 head">Document Name:<span style={{color:"red"}}>*</span></div>  
                <TextField
                  className="textFieldClass w-50 bg-white"
                  required
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              
                {error.name ? (<p className="errorClass">Please Enter Name</p>):""}
              </div>
              <div className="col-12">
                <div className="w-100 head">Document Type:</div>
                <FormControl
                  required
                  className="w-50"
                  sx={{ minWidth: 120 }}
                  size="small"
                >
                  <Select
                    required
                    className="selectBox table_content"
                    name="documentationId"
                    value={data.documentationId}
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>---Select---</MenuItem>
                    {nameData?.docTypeData?.map((i, ind) => {
                      return (
                        <MenuItem key={i.id} value={i.id}>
                          {i.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {error.documentationId ? (<p className="errorClass">Please Enter Name</p>):""}
                </FormControl>
              </div>


              <div className="col-12">
                <div className="d-flex">
                  <span>
                    <Checkbox size="small" type="checkbox" />
                    <span className=" fw-500 table_content">
                      Auto Request Document Setting: Set to appear for all
                    </span>
                  </span>
                </div>
              </div>
<div className="d-flex mt-2">

<div className="col-5">
<div className="table_Content">Chapter 3 Entity Types:</div>
                <div className="d-flex row">
                {DocCh3data?.map((i,ind)=>{
   return ( 
                  <span key={ind}>
                    <Checkbox onClick={(e) => handleToogle(e)}size="small" type="checkbox" />
                    <span className="  table_contentt">
                    {i.name}
                    </span>
                  </span>
                    )
                  })}
                </div>
              </div>
             


              <div className="col-5">
                <div className="table_Content">Chapter 4 Status:</div>
                <div className="d-flex row">
                {DocCh4data?.map((i,ind)=>{
   return ( 
                  <span key={ind}>
                    <Checkbox onClick={(e) => handleToogle(e)} size="small" type="checkbox" />
                    <span className="table_contentt">
                    {i.name}
                    </span>
                  </span>
                    )
                  })}
                </div>
              </div>
</div>
              

             

              <div className="col-12 my-2 mx-auto">
                <div className="col-12 ">
                  <Button
                    size="small"
                    variant="contained"
                    type="submit"
                    style={{ float: "right" }}
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    className="mx-2"
                    style={{ float: "right" }}
                    onClick={() => history.push("/documentation")}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </Fragment>
  );
}
