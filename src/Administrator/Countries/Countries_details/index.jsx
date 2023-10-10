import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  TextField,
  CardHeader,
  Breadcrumbs,
  Link,
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
import {
  getCountryById,
  CountryUpsert,
  CountriesUpsertArticle,
  getYears,
  getAllCountries,
  getIgaDropDown,
} from "../../../redux/Actions";

export default function Countries_details() {
  const dispatch = useDispatch();
  const getAllCountry = useSelector(
    (state) => state?.CountriesReducer?.allCountriesData
  );
  const igDropDownData = useSelector(
    (state) => state?.getIgaDropDownReducer?.igaDropDownData
  );
  const countryData = useSelector(
    (state) => state?.getCountryByIdReducer?.getCountryByIdData
  );
  const formData = useSelector((state) => state?.getYearsReducer?.yearData);
  let params = useParams();
  let history = useHistory();
  console.log("log", countryData);
  const [data, setData] = useState({
    countryId: "",
    name: "",
    treatyEffectiveYear: 0,
    bankStandardName: "",
    bankStandardNameFormat: 0,
    requestIBAN: false,
    requestSwiftCode: false,
    iga: "",
    crs: "",
    lob: false,
    lobDocumentLocation: "",
    lobDocumentURL: "",
    
  });
  useEffect(() => {
    // igaModelId
    console.log("countryData", countryData);
    setData({ ...countryData, 
      iga: countryData?.igaModelId,
    crs: countryData?.crsExchangeIn,
    lobDocumentURL: countryData?.lobDocumentURL
    });
  }, [countryData]);

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getYears());
    dispatch(getIgaDropDown());
  }, []);

  useEffect(() => {
    if (params?.id) {
      dispatch(getCountryById(params.id), (item) => {
        setData(item);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      let updateData = {
        countryId: parseInt(params?.id),
        name: data?.name,
        treatyEffectiveYear: Number(data?.treatyEffectiveYear),
        bankStandardName: data?.bankStandardName,
        bankStandardNameFormat: data?.bankStandardNameFormat,
        requestIBAN: data?.requestIBAN,
        requestSwiftCode: data?.requestSwiftCode,
        iga: data?.iga,
        crs: data?.crs,
        lob: data?.lob,
        lobDocumentLocation: data?.lobDocumentLocation,
        lobDocumentURL: data?.lobDocumentURL
      };
      dispatch(CountryUpsert(updateData));
    }
    history.push("/countries");
  };

  const handleToogle = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getLangById = (id) => {
    const result = getAllCountry?.filter((item) => {
      if (item.id == params.id) {
        return item;
      }
    });
    if (result?.length) {
      console.log(result, "RESD");
      return result[0]?.name;
    }
  };

  return (
    <Card>
      <Fragment>
        <ThemeOptions />
        {/* <AppHeader /> */}

        <div className="app-main">
          <AppSidebar />
          <div className="app-main__outer" style={{ height: "900px" }}>
            <div className="app-main__inner">
              <div role="presentation" className="bread_crumbs">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    color="#0c62a8"
                    onClick={() => {
                      history.push("/countries");
                    }}
                  >
                    Countries
                  </Link>
                  <p color="#000000" disabled>
                    Countries Details
                  </p>
                </Breadcrumbs>
              </div>
              <div className="row m-1 border p-3 box_style">
                <form>
                  <div>
                    {
                      <div className="row headingLabel complyColor">
                        {params.id ? " Edit Country" : "Add Country"}
                      </div>
                    }
                    <div className="row">
                      <div className="col-2">
                        <div className="table_content">Name:</div>
                      </div>
                      <div className="col-10">
                        <div className="table_content"> {data?.name}</div>

                        {/* <TextField
                  className="table_content"
                    size="small"
                    name="name"
                     value={data?.name}
                    onChange={handleChange}
                    required
                  /> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div className="table_content">
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
                        <div className="table_content">
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
                        <div className="table_content">
                          Banking Standard Name Format:
                        </div>
                      </div>
                      <div className="col-10">
                        <Select
                          align="center"
                          value={data?.bankStandardNameFormat}
                          className="selectBox text table_content"
                          name="bankStandardNameFormat"
                          onChange={handleChange}
                        >
                          <MenuItem value={0}> ---Select----</MenuItem>
                          <MenuItem value={1}>Sort Code</MenuItem>
                          <MenuItem value={2}>ABA/Routing Numbers</MenuItem>
                        </Select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div className="table_content">Request IBAN:</div>
                      </div>
                      <div className="col-10">
                        <Checkbox
                          name="requestIBAN"
                          onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.requestIBAN}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div className="table_content">Request Swift Code:</div>
                      </div>
                      <div className="col-10">
                        <Checkbox
                          name="requestSwiftCode"
                          onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.requestSwiftCode}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div className="table_content">
                          Inter Governmental Agreement (IGA):
                        </div>
                      </div>
                      <div className="col-10">
                        {/* {console.log(igDropDownData,"igDropDownData")} */}
                        <Select
                          align="center"
                          value={data?.iga}
                          className="selectBox text table_content"
                          name="iga"
                          onChange={handleChange}
                        >
                          {igDropDownData?.map((i, ind) => {
                            return (
                              <MenuItem key={ind} value={i?.id}>
                                {" "}
                                {i?.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div className="table_content">
                          CRS: Committed to first exchange in:
                        </div>
                      </div>
                      <div className="col-10">
                        <Select
                          align="center"
                          value={data?.crs}
                          className="selectBox text table_content"
                          name="crs"
                          onChange={handleChange}
                        >
                          {formData?.map((i, ind) => {
                            return (
                              <MenuItem key={ind} value={i}>
                                {i}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div className="table_content">
                          Limitations on benefit statement:
                        </div>
                      </div>
                      <div className="col-10">
                        <Checkbox
                          name="lob"
                          onClick={(e) => handleToogle(e)}
                          className="p-0 checkBox"
                          checked={data?.lob}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div className="table_content">Document Location:</div>
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
                        <div className="table_content">URL:</div>
                      </div>
                      <div className="col-10">
                        <TextField
                          className="table_content"
                          size="small"
                          name="lobDocumentURL"
                          value={data?.lobDocumentURL}
                          onChange={handleChange}
                          
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="articleText">
                      Articles Available for Selection – Special Rates &
                      Conditions Section
                      <span>
                        <Button
                          size="small"
                          type="submit"
                          onClick={() => {
                            history.push(`/article/${params?.id}`);
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
                      sx={{ mr: 1 }}
                      onClick={() => {
                        history.push("/countries");
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
