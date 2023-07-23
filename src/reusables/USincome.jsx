
import { forwardRef, Fragment } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import DialogContentText from '@mui/material/DialogContentText'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {
  TextField,
  CardHeader,

  CardContent,
  CardActions,
  Card,
  Divider,
  div,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from "@mui/material";
import "./reusables.scss";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


import {getSourcedIncomeById ,postHiddenSourcedUS,upsertUSIncomeSource } from "../redux/Actions";
import { RadioButtonChecked } from '@mui/icons-material'




const DialogEditIncome = props => {
  const { open, setOpen,agentId, idData, response, getList } = props
 
  const handleClose = () => setOpen(false)
 
  const dispatch = useDispatch();
  let params = useParams();
  const history = useHistory();

  const formData = useSelector((state) => state.getSourcedIncomeDataIdReducer );

  const [data, setData] = useState(
    {
      id: 0,
      usSourcedIncomeTypeId: 0,
      agentId: 0,
      usSourcedIncomeQuestion: "",
      questionText: "",
      state: false,
      usSourcedIncomeQuestionAlias: null,
      questionTextAlias: null,
  }
  );

  useEffect(() => {
    if(agentId){
      // dispatch(getSourcedIncomeById(params?.id,idData,(data)=>{ setData(data)}));
      getData();
    }
}, []); 

const getData=()=>{
  dispatch(getSourcedIncomeById(params?.id,idData,(data)=>{ setData(data)}));
}

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    let createData=
    {
      id:0,
      usSourcedIncomeTypeId: data.usSourcedIncomeTypeId,
      agentId: parseInt(params.id),
      usSourcedIncomeQuestion: data.usSourcedIncomeQuestion,
      questionText: data.questionText,
      state: data.state,
      usSourcedIncomeQuestionAlias: data.usSourcedIncomeQuestionAlias,
      questionTextAlias: data.questionTextAlias
  }
  
  if (data?.agentId>0) {
    let updateData={
      id: data.id,
      usSourcedIncomeTypeId: data.usSourcedIncomeTypeId,
      agentId: parseInt(params.id),
      usSourcedIncomeQuestion: data.usSourcedIncomeQuestion,
      questionText: data.questionText,
      state: data.state,
      usSourcedIncomeQuestionAlias: data.usSourcedIncomeQuestionAlias,
      questionTextAlias: data.questionTextAlias
    }
    dispatch(upsertUSIncomeSource(updateData));
      getData();
    } else {
      dispatch(upsertUSIncomeSource(createData));
      getData();
    }
    handleClose()
  };
  return (
    <Fragment>
     
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
      
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
<form  onSubmit={(e) => {
          handleSubmit(e);
        }}>

{ <div className="row headingtext ">Edit State</div>}
<div className="row table_text">
                <div>
                  <div
                   
                    className='table_text'
                  >
                   U.S. sourced income type:

                  </div>
                </div>
                <div className="col-9">
                <span className='table_text'>
                Business income: Personal services
                </span>

                 
                </div>
              </div>

<div className="row table_text">
                <div>
                  <div
                   
                    className='table_text'
                  >
                   State:

                  </div>
                  <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="state"
        value={data.state}
      >
        <FormControlLabel className='table_text' value={true} control={<Radio />} label="Normal" />
        <FormControlLabel className='table_text'value={false} control={<Radio />} label="Hidden" />
      
      </RadioGroup>
                </div>
             
              </div>
              <div className="row table_text">
                <div>
                  <div
                   
                    className='table_text'
                  >
                    U.S. Sourced Income Question Display Alias:

                  </div>
                </div>
                <div className="col-9">
                  <TextField
                  className='table_text'
                    size="small"
                    name="usSourcedIncomeQuestionAlias"
                    value={data.usSourcedIncomeQuestionAlias}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row table_text">
                <div>
                  <div
                   
                    
                    className='table_text'
                  >
                   Question Text Display Alias:

                  </div>
                </div>
                <div className="col-9 table_text">
                  <TextField
                  className='table_text'
                  size="small"
                    name="questionTextAlias"
                    value={data.questionTextAlias}
                    onChange={handleChange}
                    isRequired="true"
                    required
                   
                  />
                </div>
              </div>
           
           

            <div  style={{margin:"0px"}} className="actionButton">
              <Button
               style={{fontSize:"12px"}}
                type="reset"
                size="small"
                variant="outlined"
                onClick={handleClose}
                sx={{ mr: 1 }}
              >
                cancel
              </Button>

              <Button
               style={{fontSize:"12px"}}
                size="small"
                type="submit"
               
                variant="contained"
              >
                Save
              </Button>
            </div>

                  </form>   
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </Fragment>
  )
}

export default DialogEditIncome
