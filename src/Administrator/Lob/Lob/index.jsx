import React, { Fragment, useState, useEffect } from "react";
import { Route } from "react-router-dom";

// Charts

// import ChartsSparklines1 from "./Sparklines1/";
// import ChartsSparklines2 from "./Sparklines2/";
// import ChartsChartJs from "./ChartJs/";
// import ChartsGauges from "./Gauges/";
// import ApexCharts from "./ApexCharts/";

// Layout

import AppHeader from "../../../Layout/AppHeader/";
import AppSidebar from "../../../Layout/AppSidebar/";
// import AppFooter from "../../../Layout/AppFooter/";

// Theme Options
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
  Breadcrumbs,
  Link,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from "@mui/material";
import ThemeOptions from "../../../Layout/ThemeOptions/";
import { useDispatch, useSelector } from "react-redux";
import { CheckBox } from "@mui/icons-material";
import "./index.scss";
import Pagination from "@mui/material/Pagination";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { getAllLOB, getLOB } from "../../../redux/Actions";
const LOBManagement = ({ match }) => {
  const lobData = useSelector((state) => state.getAllLobReducer);
  const nameData = useSelector((state) => state.getLobReducer);

  const [data, setData] = useState({
    chapter3StatusId: 0,
    isCorporation: false,
    isDisregardedEntity: false,
    isPartnership: false,
    isSimpleTrust: false,
    isGrantorTrust: false,
    isComplexTrust: false,
    isEstate: false,
    isGovernment: false,
    isCentralBankofIssue: false,
    isTaxExemptOrganization: false,
    isPrivateFoundation: false,
    isInternationalOrganization: false,
  });
  const dispatch = useDispatch();
  useState(() => {
    dispatch(getLOB());
    dispatch(getAllLOB());
  }, []);

  const idName = (id) => {
    const result = nameData?.lobName?.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });
    if(result?.length){
      return result[0]?.name;
    }
  };
const row=[]
  const handleToogle = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };
const history = useHistory();
const handleSubmit=(e)=>{
e.preventDefault();
}
  // getAllLOB
  return (
    <Fragment>
      <ThemeOptions />
      {/* <AppHeader /> */}
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
          <div role="presentation" className="bread_crumbs mt-3">
              <Breadcrumbs aria-label="breadcrumb">
                <p
                   underline="hover"
                  color="#000000"
                  
                  
                >
           LOB
                </p>
              </Breadcrumbs>
            </div>
            <form className="m-md-3 " onSubmit={handleSubmit}>
            <div className=" row  card p-2  " style={{overflowX:"auto"}}>
              <div className="col-12 p-0 " style={{ overflow: "auto" }}>
                <table class="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th  className='table_head'  scope="col">LOB Type / Chapter 3 statuses</th>
                      <th   className='table_head'scope="col">Corporation</th>
                      <th  className='table_head' scope="col">Disregarded Entity</th>
                      <th  className='table_head'scope="col">Partnership </th>
                      <th  className='table_head'scope="col">Simple Trust </th>
                      <th  className='table_head'scope="col">Grantor Trust </th>
                      <th  className='table_head'scope="col">Complex Trust </th>
                      <th className='table_head' scope="col">Estate </th>
                      <th  className='table_head' scope="col">Government </th>
                      <th  className='table_head'scope="col">Central Bank of Issue </th>
                      <th  className='table_head'scope="col">Tax Exempt Organization </th>
                      <th  className='table_head'scope="col">Private Foundation </th>
                      <th  className='table_head' scope="col">International Organization </th>
                      <th   className='table_head'scope="col">Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lobData?.lobData?.map((i, ind) => {
                      return (
                        <tr key={i.id}>
                          <th style={{fontWeight:'450'}}  className="table_content" >{idName(i.chapter3StatusId)}</th>
                          <td>
                            <Checkbox
                              name="isCorporation"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isCorporation
                                  i.isCorporation
                                  // : data.isCorporation
                              }
                             
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isDisregardedEntity"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isDisregardedEntity
                                  i.isDisregardedEntity
                                  // : data.isDisregardedEntity
                              }
                             
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isPartnership"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isPartnership
                                  i.isPartnership
                                  // : data.isPartnership
                              }
                            
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isSimpleTrust"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isSimpleTrust
                                  i.isSimpleTrust
                                  // : data.isSimpleTrust
                              }
                        
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isGrantorTrust"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isGrantorTrust
                                  i.isGrantorTrust
                                  // : data.isGrantorTrust
                              }
                             
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isComplexTrust"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isComplexTrust
                                  i.isComplexTrust
                                  // : data.isComplexTrust
                              }
                            
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isEstate"
                              onClick={(e) => handleToogle(e)}
                              // className="p-0 checkBox"
                              checked={i.isEstate }
                                // i.isEstate : data.isEstate}
                           
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isGovernment"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isGovernment
                                  i.isGovernment
                                  // : data.isGovernment
                              }
                           
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isCentralBankofIssue"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isCentralBankofIssue
                                  i.isCentralBankofIssue
                                  // : data.isCentralBankofIssue
                              }
                            
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isTaxExemptOrganization"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isTaxExemptOrganization
                                  i.isTaxExemptOrganization
                                  // : data.isTaxExemptOrganization
                              }
                            
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isPrivateFoundation"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isPrivateFoundation
                                  i.isPrivateFoundation
                                  // : data.isPrivateFoundation
                              }
                             
                            />
                          </td>
                          <td>
                            <Checkbox
                              name="isInternationalOrganization"
                              onClick={(e) => handleToogle(e)}
                              className="p-0 checkBox"
                              checked={
                                // i.isInternationalOrganization
                                  i.isInternationalOrganization
                                  // : data.isInternationalOrganization
                              }
                             
                            />
                          </td>
                          <td className="actionRow">
                         
                                  <EditIcon style={{ color: "green",fontSize:"20px" }}
                                  onClick={() => {
                                    history.push(
                                      `/lob_details/${i.chapter3StatusId}`
                                    );
                                  }} />
                              
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            </form>
          </div>
        
        </div>
      </div>
    </Fragment>
  );
};

export default LOBManagement;
