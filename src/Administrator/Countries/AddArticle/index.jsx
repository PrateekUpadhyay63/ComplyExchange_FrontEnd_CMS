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
import { getCountryById, CountryUpsert, CountriesUpsertArticle,getMaxNumber,GetIncomeTypes } from "../../../redux/Actions";

export default function Countries_details() {
  const dispatch = useDispatch();
  let params = useParams();
  let history= useHistory();
  const formData = useSelector((state) => state?.getNumbersReducer?.numberData);
  console.log("form",formData);
  const namedata = useSelector((state)=>state.getIncomeReducer);
  const countryData = useSelector(
    (state) => state?.getCountryByIdReducer?.getCountryByIdData
  );
  const [data, setData] = useState({
    countryId: 0,
    // name:"",
    number: "",
    description: "",
    treatyRates: "",
    maxNoOfParagraph: 0,
    includeSubParagraph: false,
    showInDropDown: false,
    selectedIncomeCodeIds: []
  })


  console.log(data,"daataaa")
const [data1 , setData1] = useState({
  name: "",
  Id: 0,
});
  const [selectAll, setSelectAll] = useState(false);
  const [selectArray , setSelectArray] = useState([])

  const handleSelectAll = () => {

    namedata?.incTypeData?.filter((item)=>{
      let arr = selectArray
      
      arr.push(item.id)
    
      setSelectArray(arr)

    }) 

    
    setSelectAll(true);
  };

  const handleUnselectAll = () => {
    setSelectArray([])
    setSelectAll(false);
  };
  useEffect(() => {
    dispatch(getMaxNumber());
  }, []);

  useEffect(() => {
    if (params?.id) {
      dispatch(getCountryById(params.id), (item) => {
        setData(item);
      });
    }
  }, []);

  useEffect(()=>{
    dispatch(GetIncomeTypes());
    // if(params.id){
    //   dispatch(GetIncomeTypes(params.id,(data1)=>{ setData1(data1)}));
    // }
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(params.id){
    let updateData = {
    countryId: parseInt(params?.id),
    number: data?.number,
    description: data?.description,
    treatyRates: data?.treatyRates,
    maxNoOfParagraph: data?.maxNoOfParagraph,
    includeSubParagraph: data?.includeSubParagraph,
    showInDropDown: data?.showInDropDown,
    selectedIncomeCodeIds:selectArray
      }
    dispatch(CountriesUpsertArticle(updateData));
    }
    history.push(`/countries_add/${params?.id}`);
  }

  useEffect(() => {
    setData(countryData);
  }, [countryData]);


  const handleToogle = (e,id) => {
    console.log(id,"idd")
    // setSelectArray([...selectArray, id])
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
          <div className="app-main__outer" >
          <div className="app-main__inner">
          <div role="presentation" className="bread_crumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                   underline="hover"
                   color="#0c62a8"
                 onClick={()=>{
                  history.push(`/countries/${params?.id}`)
                 }}
                  
                >
            Countries
                </Link>
                <p
                   underline="hover"
                   color="#000000"
                   
                 
                  
                >
            Countries Add Article
                </p>
              </Breadcrumbs>
            </div>
          <div className="row m-1 border p-3 box_style">
          <form >
            <div  >
            { <div  className="row headingLabel complyColor">
                        {params.id ? " Edit Country Article" : "Add Country Article"}</div>}
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
                  {data?.name}
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

                   
                    <Select align="center" defaultValue={0} className='selectBox text table_content' name="maxNoOfParagraph"  onChange={handleChange} >
                    <MenuItem value={0}> ---Select----</MenuItem>
                    {formData?.map((i,ind)=>{
                     
                       return(<MenuItem key={ind} value={i}>{i}</MenuItem>)
                      
                      })}
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
                <Checkbox onClick={(e) => handleToogle(e)}
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
                <Checkbox onClick={(e) => handleToogle(e)}
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
                    <Button style={{fontSize:"10px"}}  size="small" onClick={handleSelectAll} variant="contained">Select All</Button>
                    <Button style={{fontSize:"10px"}} className="mx-2"onClick={handleUnselectAll} size="small"  variant="contained">Unselect All</Button>
              
                </div>
              </div>
              <div className="row">
              {namedata?.incTypeData?.map((i,ind)=>{ 
               

             return ( 
              <div key={ind} className="col-12">
                 <span>
              <Checkbox onClick={(e) => handleToogle(e,i?.id)} checked={selectAll}  value={data?.selectedIncomeCodeIds}/>
              <sapn className="table_content mt-1 p-0" >{i.name}</sapn>
            </span>
              </div>
            )
              })}
              </div>
             
              </div>
             
         

            <div className="actionBtn">
              <Button
                type="reset"
                size="small"
               
                variant="outlined"
                sx={{ mr: 1}}
                onClick={()=>{
                  history.push(`/countries_add/${params?.id}`);
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
