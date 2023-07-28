import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useHistory } from "react-router-dom";
import {
  TextField,
  CardHeader,

  CardContent,
  CardActions,
  Card,
  Divider,
  div,
  Breadcrumbs,Link,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Input,
} from "@mui/material";


import ThemeOptions from "../../Layout/ThemeOptions";
import AppHeader from "../../Layout/AppHeader";
import { Fragment } from "react";
import AppSidebar from "../../Layout/AppSidebar";
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
import { CheckBox } from "@mui/icons-material";
import {GetAllHelpVideos } from "../../redux/Actions";

export default function Language_details() {
  const dispatch = useDispatch();
  let params = useParams();
  let history= useHistory();
  const formData = useSelector((state) => state?.getAllHelpVideoReducer?.helpData);
  console.log("form",formData)
  // createCapacities
  // getCapacitiesByfId
  const [data, setData] = useState(params.id ? {
    id: 0,
    name: "",
    isProxyMandatory: false,
    isCountryOfResidenceRequired: false,
    isImportant: false,
    isUSIndividual: false,
    isNonUSIndividual: false,
    isUSBusiness: false,
    isNonUSBusiness: false,
    isIntermediary: false,
    isNonUSGovernment: false,
  }:{
    name: "",
    isProxyMandatory: false,
    isCountryOfResidenceRequired: false,
    isImportant: false,
    isUSIndividual: false,
    isNonUSIndividual: false,
    isUSBusiness: false,
    isNonUSBusiness: false,
    isIntermediary: false,
    isNonUSGovernment: false,
  });


   useEffect(()=>{
    setData(formData?.GetAllHelpVideos)
   },[formData])

  useEffect(() => {
    // dispatch(getCapacitiesById(params.id),(data)=>{ setData(data) });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(params.id){
      // dispatch(updateCapacities(data));
    }
    else{
      // dispatch(createCapacities(data));
    }
    history.push("/help");
  };

 
  const handleToogle = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Card>
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
                   underline="hover"
                   color="#000000"
                 
                  
                >
   Help
                </p>
              </Breadcrumbs>
            </div>
          <div className=" row m-1 border p-3 box_style">
          <form onSubmit={handleSubmit}>
            <div  >
            {/* { <div className="row headingLabel complyColor">Help Video</div>} */}
            <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content mt-1"
                  >
                 

                  Enable Video Tab:
                  </div>
                </div>
                <div className="col-10">
                <CheckBox className="checkBox"/>
                </div>
              </div>
              <div className="row">
                <div className="col-2" >
                  <div
                    variant="body2"
                    className="table_content"
                  >
                    Login Page
                  </div>
                </div>
                <div className="col-10">
                  <div
                    variant="body2"
                    className="table_content"
                  ></div>

                  <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    // value={}
                    onChange={handleChange}
                    required
                  />
                  <span className="table_content mx-4">Default English:5, US English:5, 日本人:1 Total:11</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                  Onboarding Page:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                   <span className="table_content mx-4">Default English:3, US English:6, 日本人:1 Total:10</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                  Form Selection Page:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                   <span className="table_content mx-4">Default English:2, US English:3 Total:5</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                  W-8BEN-E:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                   <span className="table_content mx-4">Chinese:1, Default English:2, US English:4 Total:7</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                  W-8BEN:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                   <span className="table_content mx-4">Default English:2, US English:4 Total:6</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                 W-8BCI:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                  W-8EXP:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                 W-8IMY:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    className="table_content"
                  >
                  W-9:

            
                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                    <span className="table_content mx-4">US English:2 Total:2</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                 

                  8233:
                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                 
                 Self Cert:
                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="name"
                    
                    onChange={handleChange}
                    required
                  />
                    <span className="table_content mx-4">日本人:1 Total:1</span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                    variant="body2"
                    
                    className="table_content"
                  >
                 

                 Popup Settings:
                  </div>
                </div>
                <div className="col-10">
              <div className="table_content">
              Window features:
              </div>
              <span> <CheckBox className="checkBox"/>
              <span  className="table_content">Scrollbars - allows to disable the scrollbars for the new window. Not recommended.</span>
                </span>
                <br/>
                <span> <CheckBox className="checkBox"/>
              <span  className="table_content">Resizable - allows to disable the resize for the new window. Not recommended.</span>
                </span>
                <br/>
                <span> <CheckBox className="checkBox"/>
              <span  className="table_content">Status - shows or hides the status bar. Again, most browsers force it to show.</span>
                </span>
                <br/>
                <span> <CheckBox className="checkBox"/>
              <span  className="table_content">Location - shows or hides the URL field in the new window. FF and IE don’t allow to hide it by default.</span>
                </span>
                <br/>
                <span> <CheckBox className="checkBox"/>
              <span  className="table_content">Toolbar - shows or hides the browser navigation bar (back, forward, reload etc) on the new window.</span>
                </span>
                <br/>
                <span> <CheckBox className="checkBox"/>
              <span  className="table_content">Menubar - shows or hides the browser menu on the new window</span>
                </span>
                <div className="table_content mt-2">
              Position:
              </div>
              <div className="row">
                <div className="col-1">
                  <div
                    variant="body2"
                    
                    className="table_content mt-2"
                  >
                 

                  Width:
                  </div>
                </div>
                <div className="col-7">
                <TextField
                  className="table_content"
                    size="small"
                    type="number"
                    
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <div
                    variant="body2"
                    
                    className="table_content mt-2"
                  >
                 

                  Height:
                  </div>
                </div>
                <div className="col-7">
                <TextField
                  className="table_content"
                    size="small"
                    type="number"
                    
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <div
                    variant="body2"
                    
                    className="table_content mt-2"
                  >
                 

                  Left:
                  </div>
                </div>
                <div className="col-7">
                <TextField
                  className="table_content"
                    size="small"
                    type="number"
                    
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <div
                    variant="body2"
                    
                    className="table_content mt-2"
                  >
                 

                  Top:
                  </div>
                </div>
                <div className="col-7">
                <TextField
                  className="table_content"
                    size="small"
                    type="number"
                    
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

                </div>
              </div>
            </div>

            
          </form>
         
        </div>
        <div className="actionBtn">
              

              <Button
                size="small"
                type="submit"
                className="btn-cstm"
                sx={{my:1,mx:1 }}
                variant="contained"
              >
                Save
              </Button>
            </div>
        </div>
        </div>
        </div>
      </Fragment>
    </Card>
  );
}
