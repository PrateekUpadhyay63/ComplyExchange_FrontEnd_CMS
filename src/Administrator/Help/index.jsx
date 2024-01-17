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

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./index.scss";
import { CheckBox } from "@mui/icons-material";
import {GetAllHelpVideos,postHelpVideo,getAllHelpVideosDetails } from "../../redux/Actions";

export default function Language_details() {
  const dispatch = useDispatch();
  let params = useParams();
  let history= useHistory();
  const formData = useSelector((state) => state?.getAllHelpVideoReducer?.helpData);
  const GethelpData = useSelector((state) => state?.getAllHelpVideoDetailsReducer?.helpDetailsData);

  console.log("form",GethelpData)
  const [arr,setArr]=useState()
  const [data, setData] = useState( {

   
 }
  
   
  );


  useEffect(() => {
    console.log("Received settingsData:", GethelpData);

    if (GethelpData) {
      setData((prevData) => ({
        ...prevData,
        enableVideoTab: GethelpData?.[0]?.enableVideoTab,
        // Add other checkboxes here
        scrollbars: GethelpData?.[0]?.scrollbars,
        resizable: GethelpData?.[0]?.resizable,
        status: GethelpData?.[0]?.status,
        location: GethelpData?.[0]?.location,
        toolbar: GethelpData?.[0]?.toolbar,
        menubar: GethelpData?.[0]?.menubar,
        // Add other fields here
        width: GethelpData?.[0]?.width,
        height: GethelpData?.[0]?.height,
        left: GethelpData?.[0]?.left,
        top: GethelpData?.[0]?.top,
      }));
    } else {
      console.error("Settings data is undefined");
    }
  }, [GethelpData]);
  useEffect(() => {


    dispatch(getAllHelpVideosDetails())
    dispatch(GetAllHelpVideos((apiData) => {
      setArr(apiData);
      setData(apiData.reduce((acc, curr) => {
        acc[curr.fieldName] = curr.fieldValue;
        return acc;
      }, {}));
      console.log(apiData, "qazswsxcfrtgh");
    }));
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

// ...
const [youtubeUrls, setYoutubeUrls] = useState({});
const [hoveredPreview, setHoveredPreview] = useState("");


// Add an event handler to update the YouTube video URL when hovering over the TextField
const handleMouseEnter = (url, fieldName) => {
  setHoveredPreview(fieldName);
  setYoutubeUrls((prevUrls) => ({ ...prevUrls, [fieldName]: url }));
};


 
const handleToggle = (e) => {
  const { name } = e.target;
  setData((prevData) => ({
    ...prevData,
    [name]: e.target.checked,
  }));
};
  
  const handleChange = (e,fieldName) => {
    setData((prevState) => {
      return({
        ...prevState,
        [e.target.name]: e.target.value
      });
    });
  };

  const arrHandleChange = (e) => {
    setData((prevState) => {
      return({
        ...prevState,
        [e.target.name]: e.target.value
      });
    });
    console.log(e.target.name,e.target.value,"eeeeeeeeeeeeeeeeeeeeeeeeeeeee")

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
           
            {GethelpData?.map((row, ind) => (
  <div className="row d-flex" key={ind}>
    <div className="col-2">
      <div className="table_content mt-3">
        Enable Video Tab:
      </div>
    </div>
    <div className="col-10 mt-1">
    <Checkbox
  name="enableVideoTab"
  id="enableVideoTab"
  checked={row?.enableVideoTab || false}
  onChange={(e) => handleToggle(e)}
/>
    </div>
  </div>
))}
              {/* {console.log( "xcvbnm,",arr)} */}
              {arr?.map((row, ind) => (
               
               
           
          <div className="row">
            { console.log(row,"12333")}
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
        className="table_content"
        size="small"
        name={row.fieldName}
        value={data[row.fieldName] || ''}
        onChange={(e) => arrHandleChange(e, row.fieldName)}
        required
        onMouseEnter={() => handleMouseEnter(data[row?.fieldName], row.fieldName)}
      />
       <span>
       {data[row?.fieldName] && hoveredPreview === row.fieldName && (
                <Button style={{ fontSize: "0.675em", padding: "none" }} 
                 href={youtubeUrls[row.fieldName]}
                         target="popup"
                        rel="noopener noreferrer"

                        onClick={() =>
                          window.open(
                            youtubeUrls[row.fieldName],
                            "name",
                            `width=${data.width},height=${data.height},left=${data?.left},top=${data.top}`
                          )
                        }>
                  Preview
                </Button>
              )}
            </span>
      <span className="table_content mx-4">
        {row.name}:{row.pageCount}
      </span>
    </div>
  </div>
))}


{GethelpData?.map((row, ind) => (
              
              <div className="row" key={ind}>
                {console.log(row,"yyy")}
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
              <span>  <Checkbox
                  name="scrollbars"
                  checked={row.scrollbars || false}
                  onClick={(e) => handleToggle(e)}
                />
              <span  className="table_content">Scrollbars - allows to disable the scrollbars for the new window. Not recommended.</span>
                </span>
                <br/>
                <span> <Checkbox  name="resizable" checked={row?.resizable} onClick={(e) => handleToggle (e)}/>
              <span  className="table_content">Resizable - allows to disable the resize for the new window. Not recommended.</span>
                </span>
                <br/>
                <span> <Checkbox  name="status" checked={row?.status} onClick={(e) => handleToggle (e)} />
              <span  className="table_content">Status - shows or hides the status bar. Again, most browsers force it to show.</span>
                </span>
                <br/>
                <span> <Checkbox  name="location" checked={row?.location} onClick={(e) => handleToggle (e)}/>
              <span  className="table_content">Location - shows or hides the URL field in the new window. FF and IE don’t allow to hide it by default.</span>
                </span>
                <br/>
                <span> <Checkbox  name="toolbar" checked={row?.toolbar} onClick={(e) => handleToggle (e)}/>
              <span  className="table_content">Toolbar - shows or hides the browser navigation bar (back, forward, reload etc) on the new window.</span>
                </span>
                <br/>
                <span> <Checkbox  name="menubar" checked={row?.menubar} onClick={(e) => handleToggle (e)}/>
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
  value={row.width}
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
                    value={row?.height}
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
                    value={row?.left}
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
                    value={row?.top}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

                </div>
              </div>
))}
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