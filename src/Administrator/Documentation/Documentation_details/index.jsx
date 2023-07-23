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
import { GetDocumentationTypes, getDocById,createDocType,updateDocType } from "../../../redux/Actions";
export default function Language_details() {
  const dispatch = useDispatch();
  let params = useParams();
  const history = useHistory();

  const formData = useSelector((state) => state.getdocByIdReducer);
  const nameData =useSelector((state)=>state.getdocTypeReducer);
  const [data, setData] = useState({
    name: "",
    documentationTypeId: 0,
  });

  useEffect(()=>{
    dispatch(GetDocumentationTypes());
    if(params.id){
      dispatch(getDocById(params.id,(data)=>{ setData(data)}));
    }
  },[])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params?.id) {
      dispatch(updateDocType(data));
    } else {
      dispatch(createDocType(data));
    }
    history.push("/documentation");
  };


  return (
    <Fragment>
      <ThemeOptions />
      {/* <AppHeader /> */}
      <div className="app-main">
        <AppSidebar />
        {/* <form onSubmit={documentationI}> */}
        <div className="app-main__outer">
          <div className="app-main__inner">
          <div role="presentation" className="bread_crumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                   underline="hover"
                   color="#0c62a8"
                   onClick={()=>{
                    history.push("/documentation")
                   }}
                   
                  
                >
                Documentation
                </Link>
                <Link
                   underline="hover"
                   color="#171616"
                   
                   
                  
                >
                Documentation Details
                </Link>
              </Breadcrumbs>
            </div>
              <div className="col-12 my-3">
               
              </div>
            <div className=" row m-1 border p-3 box_style">
            {
                  <div className="row headingLabel complyColor">
                    {params.id ? " Edit Documentation" : "Add Documentation"}
                  </div>
                }
              <div className="col-12 my-3 head">
                <div className="w-100 head">Document Name:</div>
                <TextField   className="textFieldClass w-50 bg-white" required name="name" value={data.name} onChange={handleChange} />
              </div>
              <div className="col-12">
                <div className="w-100 head">Document Type:</div>
                <FormControl
                required
                  className="w-50"
                  sx={{ minWidth: 120 }}
                  size="small"
                >
                  <Select required  className="selectBox table_content" name="documentationTypeId" value={data.documentationTypeId} onChange={handleChange} defaultValue={data?.documentationTypeId ? data?.documentationTypeId : 0}>
                    <MenuItem value={0}>---Select---</MenuItem>
                    {nameData?.docTypeData?.map((i,ind)=>{                    
                    return(<MenuItem key={i.id} value={i.id}>{i.name}</MenuItem>)
                    })}
                  </Select>
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
           
              <div className='col-12 my-2 mx-auto'>
                  <div className='col-12 '>
                    <Button
                      size='small'
                      variant='contained'
                      type="submit"
                      style={{ float: 'right' }}
                      onClick={handleSubmit}
                    >
                      Save
                    </Button>
                    <Button
                     variant='outlined'
                      size='small'
                      className='mx-2'
                      style={{ float: 'right' }}
                  
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
