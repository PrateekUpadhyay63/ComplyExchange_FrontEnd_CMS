
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


import {createFormInstruction,
    getFormInstructionById,
    updateFormInstruction, } from "../redux/Actions";
import { RadioButtonChecked } from '@mui/icons-material'




const SPTEdit = props => {
  const { open, setOpen, idData, response, getList } = props
 
  const handleClose = () => setOpen(false)
 
  const dispatch = useDispatch();
  let params = useParams();
  const history = useHistory();

  const formData = useSelector((state) => state.ParentDropDownReducer);

  const [data, setData] = useState({
   description:"",
   url:""
  });

  useEffect(() => {
    if(idData){
      dispatch(getFormInstructionById(idData,(data)=>{ setData(data)}));
    }else{
      setData({})
    }
}, [idData]); 

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    let createData={
      description:data.description,
      url:data.url
    }
    let updateData={
      description: data.description,
      id: idData ,
      url: data.url,
    }
 
    if (idData) {
      dispatch(updateFormInstruction(updateData));
    } else {
      dispatch(createFormInstruction(createData));
    }
    handleClose()
  };
  return (
    <Fragment>
     
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
      
      >
      
        <DialogContent>
          <DialogContentText>
<form  onSubmit={(e) => {
          handleSubmit(e);
        }}>

{/* { <div className="row headingLabel complyColor">{idData ?" Edit Form Instruction" : "Add Form Instruction"}</div>} */}
              <div className="row">
                <div className='col-3 table_text'>
                  <div
                   
                    className='table_text'
                  >
                   Taxpayer id type:
                  </div>
                </div>
                <label  className='table_text1 col-9'>Applied for</label>
                {/* <div className="col-9">
                

                  <TextField
                   className='table_text'
                    size="small"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    required
                  />
                </div> */}
              </div>
              <div className="row">
                <div className='col-3 table_text'>
                  <div
                   
                    className='table_text'
                  >
                   State:

                  </div>
                </div>
                <div className="col-9">
                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="state"
        value={data.state}
      >
       <span className='w-40'>
       <FormControlLabel className='table_text checkBox' value={true} control={<Radio />} label="Normal" />
        <FormControlLabel className='table_text checkBox'value={false} control={<Radio />} label="More" />
        <FormControlLabel className='table_text checkBox'value={false} control={<Radio />} label="Hidden" />
      
       </span>
       
      </RadioGroup>
                </div>
              </div>
          
           
           

            <div  style={{margin:"0px"}} className="actionButton mt-3">
              <Button
               style={{fontSize:"12px"}}
                type="reset"
                size="small"
                // onClick={()=>{history.push("/form_instruction")}}
                variant="outlined"
                onClick={handleClose}
                sx={{ mr: 1}}
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

export default SPTEdit
