import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useHistory } from "react-router-dom";
import {
  TextField,
  CardHeader,
  Breadcrumbs,Link,
  CardContent,
  CardActions,
  Card,
  Divider,
  div,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Input,
} from "@mui/material";


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
import { createCapacities, upsertCountries ,updateCapacities} from "../../../redux/Actions";

export default function Countries_details() {
  const dispatch = useDispatch();
  let params = useParams();
  let history= useHistory();
  const formData = useSelector((state) => state.getCapacitiesById);
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
//    useEffect(()=>{
//     setData(formData?.capacityDataById)
//    },[formData])

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
    history.push("/capacities");
  };

 
//   const handleToogle = (e) => {
//     setData({ ...data, [e.target.name]: e.target.checked });
//   };
  
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
          <div className="app-main__outer" style={{height:'1000px'}}>
          <div className="app-main__inner">
          <div role="presentation" className="bread_crumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                   underline="hover"
                   color="#0c62a8"
                 onClick={()=>{
                  history.push("/countries")
                 }}
                  
                >
            Countries
                </Link>
                <Link
                   underline="hover"
                   color="#171616"
                   
                 
                  
                >
            Countries Details
                </Link>
              </Breadcrumbs>
            </div>
          <div className="row m-1 border p-3 box_style">
          <form >
            <div  >
            { <div className="row headingLabel complyColor">{params.id ?" Edit Country" : "Add Country"}</div>}
              <div className="row">
                <div className="col-2" >
                  <div
                   
                    className="table_content"
                  >
                    Name:
                  </div>
                </div>
                <div className="col-10">
                  <div
                   
                    className="table_content"
                  ></div>

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
                   
                    
                    className="table_content"
                  >
                 Treaty effective year:


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
                   
                    
                    className="table_content"
                  >
                  Banking Standard Name:


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
                   
                    
                    className="table_content"
                  >
                 Banking Standard Name Format:


                  </div>
                </div>
                <div className="col-10">

                    <Select align="center"  defaultValue={1} className='selectBox text table_content' >
                        <MenuItem value={1}> ---Select----</MenuItem>
                        <MenuItem>Sort Code</MenuItem>
                        <MenuItem>ABA/Routing Numbers</MenuItem>
                    </Select>
                 {/* <Checkbox name="isImportant"
                        //   onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.isImportant}/> */}
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                   
                    
                    className="table_content"
                  >
                Request IBAN:

                  </div>
                </div>
                <div className="col-10">
                <Checkbox name="isUSIndividual"
                        //   onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.isUSIndividual}/>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                   
                    
                    className="table_content"
                  >
                  Request Swift Code:


                  </div>
                </div>
                <div className="col-10">
                <Checkbox name="isNonUSIndividual"
                        //   onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.isNonUSIndividual}/>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                   
                    
                    className="table_content"
                  >
                  Inter Governmental Agreement (IGA):


                  </div>
                </div>
                <div className="col-10">
                <Select align="center" defaultValue={1} className='selectBox text table_content' >
                        <MenuItem value={1}> ---Select----</MenuItem>
                        <MenuItem>Model 1</MenuItem>
                        <MenuItem>Model 2</MenuItem>
                    </Select>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                   
                    
                    className="table_content"
                  >
                 CRS: Committed to first exchange in:


                  </div>
                </div>
                <div className="col-10">
                <Select align="center" defaultValue={1}className='selectBox text table_content ' >
                        <MenuItem value={1} > ---Select----</MenuItem>
                        <MenuItem>2000</MenuItem>
                        <MenuItem>2002</MenuItem>
                    </Select>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                   
                    className="table_content"
                  >
              Limitations on benefit statement:
            
                  </div>
                </div>
                <div className="col-10">
                <Checkbox name="isIntermediary"
                        //   onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.isIntermediary}/>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                   
                    
                    className="table_content"
                  >
                 

                 Document Location:
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
                   
                    
                    className="table_content"
                  >
                 

                 URL:
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
            </div>

<div>
<div className="articleText">
                Articles Available for Selection – Special Rates & Conditions Section
            <span >
          

              <Button
                size="small"
                type="submit"
              onClick={()=>{
                history.push("/article")
              }}
                sx={{ mx: 2 }}
                variant="contained"
              >
                Add Article
              </Button>
            </span>

            <div className="placeholderClass">
            <TextField
       value="There is no article to display"
        disabled
                className="table_content placeholderClass"
                    size="small"
                    name="name"
                    onChange={handleChange}
                    required
                  />
            </div>
            </div>

</div>
         

            <div className="actionBtn">
              <Button
                type="reset"
                size="small"
               
                variant="outlined"
                sx={{ mr: 1}}
                onClick={()=>{
                  history.push("/countries")
                 }}
              >
                cancel
              </Button>

              <Button
                size="small"
                type="submit"
               
                sx={{ mr: 2 }}
                variant="contained"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
        </div>
        </div>
        </div>
      </Fragment>
    </Card>
  );
}
