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
import { getCountryById, CountryUpsert, CountriesUpsertArticle,getYears} from "../../../redux/Actions";

export default function Countries_details() {
  const dispatch = useDispatch();
   const countryData = useSelector((state) => state.getCountryByIdReducer);
   const formData = useSelector((state) => state?.getYearsReducer?.yearData);
  let params = useParams();
  let history= useHistory();
 
  const [data, setData] = useState( {
   
  countryId: "",
  name: "",
  treatyEffectiveYear: "",
  bankStandardName: "",
  bankStandardNameFormat: "",
  requestIBAN: false,
  requestSwiftCode: false,
  iga: "",
  crs: "",
  lob: false,
  lobDocumentLocation: "",
  lobDocumentURL: "",
 

  });

  

   useEffect(()=>{
    setData(countryData?.getCountryById)
   },[countryData])

   useEffect(() => {
    dispatch(getYears());
  }, []);

  useEffect(() => {
    if(params?.id)
    {
    dispatch(getCountryById(params.id), (data) => {
      setData(data);
    });
  }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(params.id){

      let updateData = { 
        countryId: params?.id,
        name: data?.name,
        treatyEffectiveYear: data?.treatyEffectiveYear,
        bankStandardName: data?.bankStandardName,
        bankStandardNameFormat: data?.bankStandardNameFormat,
        requestIBAN: data?.requestIBAN,
        requestSwiftCode: data?.requestSwiftCode,
        iga: data?.iga,
        crs: data?.crs,
        lob: data?.lob,
        lobDocumentLocation: data?.lobDocumentLocation,
        lobDocumentURL: data?.lobDocumentURL
      }
      dispatch(CountryUpsert(updateData));
      console.log("payload",updateData)
    }
   
    
    history.push("/countries");
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
          <div className="app-main__outer" style={{height:'700px'}}>
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
                <p
                  
                   color="#000000"
                   disabled
                   
                 
                  
                >
            Countries Details
                </p>
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
                     value={data?.name}
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
                    name="treatyEffectiveYear"
                     value={data?.treatyEffectiveYear}
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
                    name="bankStandardName"
                      value={data?.bankStandardName}
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

                    <Select align="center"  defaultValue={1} className='selectBox text table_content' name = "bankStandardNameFormat" onChange={handleChange} >
                        <MenuItem value={1}> ---Select----</MenuItem>
                        <MenuItem value={2}>Sort Code</MenuItem>
                        <MenuItem value={3}>ABA/Routing Numbers</MenuItem>
                    </Select>
               
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
                <Checkbox name="requestIBAN"
                         onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.requestIBAN}/>
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
                <Checkbox name="requestSwiftCode"
                        onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.requestSwiftCode}/>
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
                <Select align="center" defaultValue={1} className='selectBox text table_content' name = "iga" onChange={handleChange} >
                        <MenuItem value={1}> ---Select----</MenuItem>
                        <MenuItem value={2}>Model 1</MenuItem>
                        <MenuItem value={3}>Model 2</MenuItem>
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
                <Select align="center" defaultValue={1}className='selectBox text table_content 'name="crs" onChange={handleChange} >
                        <MenuItem value={1} > ---Select----</MenuItem>
                        {formData?.map((i,ind)=>{
                           return(<MenuItem key={ind} value={i}>{i}</MenuItem>)
                       
                       
                      })}
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
                <Checkbox name="lob"
                         onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.lob}/>
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
                  name="lobDocumentLocation"
                    value={data?.lobDocumentLocation}
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
                    name="lobDocumentURL"
                    value={data?.lobDocumentURL}
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
                history.push(`/article/${params.id}`)
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
                onClick={handleSubmit}
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
