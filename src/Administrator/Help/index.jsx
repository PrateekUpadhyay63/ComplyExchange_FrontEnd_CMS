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
import {GetAllHelpVideos,postHelpVideo } from "../../redux/Actions";

export default function Language_details() {
  const dispatch = useDispatch();
  let params = useParams();
  let history= useHistory();
  const formData = useSelector((state) => state?.getAllHelpVideoReducer?.helpData);
  console.log("form",formData)
  const [arr,setArr]=useState()
  const [data, setData] = useState( {
  // enableVideoTab: false,
  // loginPageId: 0,
  // loginPage: "",
  // formSelectionPageId: 0,
  // formSelectionPage: "",
  // onboardingPageId: 0,
  // onboardingPage: "",
  // w8BENEId: 0,
  // w8BENE: "",
  // w8BEN: "",
  // w8BENId: 0,
  // w8BCIId: 0,
  // w8BCI: "",
  // w8EXPId: 0,
  // w8EXP: "",
  // w8IMYId: 0,
  // w8IMY: "",
  // w9Id: 0,
  // w9: "",
  // help8233Id: 0,
  // help8233: "",
  // selfCertId: 0,
  // selfCert: "",
  // scrollbars: false,
  // resizable: false,
  // status: false,
  // location: false,
  // toolbar: false,
  // menubar: false,
  // width: "",
  // height: "",
  // left: "",
  // top: "",
  }
  
   
  );




  useEffect(() => {
    dispatch(GetAllHelpVideos((data)=>{ setArr(data) ;console.log(data,"qazswsxcfrtgh")}));
  }, []);

  const handleSubmit = async (e, id) => {
    e.preventDefault();
  console.log(data,"djfthcg")
    let updateData = {
      enableVideoTab: data?.enableVideoTab,
      loginPageId: data?.loginPageId,
      loginPage: data?.loginPage,
      formSelectionPageId: data?.formSelectionPageId,
      formSelectionPage: data?.formSelectionPage,
      onboardingPageId: data?.onboardingPageId,
      onboardingPage: data?.onboardingPage,
      w8BENEId: data?.w8BENEId,
      w8BENE: data?.w8BENE,
      w8BEN: data?.w8BEN,
      w8BENId: data?.w8BENId,
      w8BCIId: data?.w8BCIId,
      w8BCI: data?.w8BCI,
      w8EXPId: data?.w8EXPId,
      w8EXP: data?.w8EXP,
      w8IMYId: data?.w8IMYId,  
      w8IMY: data?.w8IMY,
      w9Id: data?.w9Id,
      w9: data?.w9,
      help8233Id: data?.help8233Id,
      help8233: data?.help8233,
      selfCertId: data?.selfCertId,
      selfCert: data?.selfCert,
      scrollbars: data?.scrollbars,
      resizable: data?.resizable,
      status: data?.status,
      location: data?.location,
      toolbar: data?.toolbar,
      menubar: data?.menubar,
      width: data?.width,
      height: data?.height,
      left: data?.left,
      top: data?.top,

    }
   
    dispatch(postHelpVideo(data));
   
   
    history.push("/help");
  };

 
  const handleToogle = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const arrHandleChange = (e) => {
    setData((prevState) => {
      return({
        ...prevState,
        [e.target.name]: e.target.value
      });
    });
    console.log(e.target.name,e.target.value,"eeeeeeeeeeeeeeeeeeeeeeeeeeeee")

    // setData({...data,  [e.target.name]: e.target.value})

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
            <div className="row d-flex">
                <div className="col-2">
                  <div
                    className="table_content mt-3"
                  >
                  Enable Video Tab:
                  </div>
                </div>
                <div className="col-10 mt-1">
                <Checkbox  name="enableVideoTab" checked={data?.enableVideoTab} onClick={(e) => handleToogle(e)}/>
                </div>
              </div>
              {console.log( "xcvbnm,",arr)}
              {arr?.map((row, ind) =>{
                // console.log("roww1",row);
          return  (    
          <div className="row">
                <div className="col-2" >
                  <div
                    className="table_content"
                  >
                    {row.pageName}:
                  </div>
                </div>
                <div className="col-10">
                  <div
                    className="table_content"
                  ></div>

                  <TextField
                  className=" table_content "
                    size="small"
                    name={row.pageName}
                    value={data[row?.pageName]}
                    onChange={(e) => arrHandleChange(e, row.id)}
                    required
                  />
                  <span className="table_content mx-4">{row.name}:{row.pageCount}</span>
                </div>
              </div>
  )})}

              {/* <div className="row">
                <div className="col-2">
                  <div
                   
                    
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
              </div> */}
              <div className="row">
                <div className="col-2">
                  <div
                  
                    
                    className="table_content"
                  >
                 

                 Popup Settings:
                  </div>
                </div>
                <div className="col-10">
              <div className="table_content">
              Window features:
              </div>
              <span> <Checkbox  name="scrollbars" checked={data?.scrollbars} onClick={(e) => handleToogle(e)}/>
              <span  className="table_content">Scrollbars - allows to disable the scrollbars for the new window. Not recommended.</span>
                </span>
                <br/>
                <span> <Checkbox  name="resizable" checked={data?.resizable} onClick={(e) => handleToogle(e)}/>
              <span  className="table_content">Resizable - allows to disable the resize for the new window. Not recommended.</span>
                </span>
                <br/>
                <span> <Checkbox  name="status" checked={data?.status} onClick={(e) => handleToogle(e)} />
              <span  className="table_content">Status - shows or hides the status bar. Again, most browsers force it to show.</span>
                </span>
                <br/>
                <span> <Checkbox  name="location" checked={data?.location} onClick={(e) => handleToogle(e)}/>
              <span  className="table_content">Location - shows or hides the URL field in the new window. FF and IE don’t allow to hide it by default.</span>
                </span>
                <br/>
                <span> <Checkbox  name="toolbar" checked={data?.toolbar} onClick={(e) => handleToogle(e)}/>
              <span  className="table_content">Toolbar - shows or hides the browser navigation bar (back, forward, reload etc) on the new window.</span>
                </span>
                <br/>
                <span> <Checkbox  name="menubar" checked={data?.menubar} onClick={(e) => handleToogle(e)}/>
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
                    name="width"
                    type="number"
                    value={data?.width}
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
                    name="height"
                    value={data?.height}
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
                    name="left"
                    value={data?.left}
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
                    name="top"
                    value={data?.top}
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
                onClick={handleSubmit}
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