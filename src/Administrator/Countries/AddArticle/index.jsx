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
import { getCountryById, CountryUpsert, CountriesUpsertArticle} from "../../../redux/Actions";

export default function Countries_details() {
  const dispatch = useDispatch();
  let params = useParams();
  let history= useHistory();
  // const formData = useSelector((state) => state.getCapacitiesById);
 
  const [data, setData] = useState(params.id ? {
    countryId: 0,
    number: "string",
    description: "string",
    treatyRates: "string",
    maxNoOfParagraph: 0,
    includeSubParagraph: true,
    showInDropDown: true
  }:{
    countryId: 0,
    number: "string",
    description: "string",
    treatyRates: "string",
    maxNoOfParagraph: 0,
    includeSubParagraph: true,
    showInDropDown: true,
  });


  // useEffect(() => {
  //   // dispatch(getCapacitiesById(params.id),(data)=>{ setData(data) });
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(params.id){
    let updateData = {
    countryId: data?.countryId,
    number: data?.number,
    description: data?.description,
    treatyRates: data?.treatyRates,
    maxNoOfParagraph: data?.maxNoOfParagraph,
    includeSubParagraph: data?.includeSubParagraph,
    showInDropDown: data?.showInDropDown,
      }
    dispatch(CountriesUpsertArticle(updateData));
    }
    history.push("/countries");
  }

 
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
            Countries Add Article
                </Link>
              </Breadcrumbs>
            </div>
          <div className="row m-1 border p-3 box_style">
          <form >
            <div  >
            { <div className="row headingLabel complyColor">Country Article Details</div>}
              <div className="row">
                <div className="col-2" >
                  <div
                   
                    className="table_content"
                  >
                    
                    Country:
                  </div>
                </div>
                <div className="col-10">
                  <div
                   
                    className="table_content"
                  >
                    Afganistan
                  </div>

                  
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                   
                    
                    className="table_content"
                  >
                Number:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="number"
                    value={data?.number}
                   
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
                  Description:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="description"
                    value={data?.description}
                   
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
                  Treaty Rates Available:


                  </div>
                </div>
                <div className="col-10">
                <TextField
                  className="table_content"
                    size="small"
                    name="treatyRates"
                    value={data?.treatyRates}
                   
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
                 Max number of paragraphs available:

                  </div>
                </div>
                <div className="col-10">

                    <Select align="center"  defaultValue={1} className='selectBox text table_content' name="maxNoOfParagraph" >
                        <MenuItem value={1}> ---Select----</MenuItem>
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                        <MenuItem>4</MenuItem>
                        <MenuItem>5</MenuItem>
                        <MenuItem>6</MenuItem>
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
               Include Subparagraph Information:

                  </div>
                </div>
                <div className="col-10">
                <Checkbox 
                          className="p-0 checkBox"
                          name="includeSubParagraph"
                          checked={data?.includeSubParagraph}
                         />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                   
                    
                    className="table_content"
                  >
                  Show in drop-downs:


                  </div>
                </div>
                <div className="col-10">
                <Checkbox 
                        name="showInDropDown"
                        checked={data?.showInDropDown}
                          className="p-0 checkBox"
                          />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div
                   
                    
                    className="table_content"
                  >
                 Associated Income Codes:


                  </div>
                </div>
                <div className="mt-2 d-flex">
                    <Button style={{fontSize:"10px"}}  size="small"  variant="contained">Select All</Button>
                    <Button style={{fontSize:"10px"}} className="mx-2" size="small"  variant="contained">Unselect All</Button>
              
                </div>
              </div>
              <span>
                <Checkbox/>
                <sapn className="table_content mt-1 p-0">01-Interest paid by U.S. obligors - general</sapn>
              </span>
              <br/>
              <span>
                <Checkbox/>
                <sapn className="table_content mt-1 p-0">02-Interest paid on real property mortgages</sapn>
              </span>
              <br/>
              <span>
                <Checkbox/>
                <sapn className="table_content mt-1 p-0">03-Interest paid to controlling foreign corporations</sapn>
              </span>
              <br/>
              <span>
                <Checkbox/>
                <sapn className="table_content mt-1 p-0">04-Interest paid by foreign corporations</sapn>
              </span>
              <br/>
              <span>
                <Checkbox/>
                <sapn className="table_content mt-1 p-0">01-Interest paid by U.S. obligors - general</sapn>
              </span>
              <br/>
              <span>
                <Checkbox/>
                <sapn className="table_content mt-1 p-0">01-Interest paid by U.S. obligors - general</sapn>
              </span>
              <br/>
              <span>
                <Checkbox/>
                <sapn className="table_content mt-1 p-0">01-Interest paid by U.S. obligors - general</sapn>
              </span>
              <br/>
              <span>
                <Checkbox/>
                <sapn className="table_content mt-1 p-0">01-Interest paid by U.S. obligors - general</sapn>
              </span>
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
