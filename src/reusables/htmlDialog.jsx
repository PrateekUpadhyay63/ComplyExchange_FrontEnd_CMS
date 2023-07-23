  // ** React Imports
import { forwardRef, Fragment, useState } from "react";

// ** MUI Imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import DialogContentText from "@mui/material/DialogContentText";
import axios from "axios";
import "./reusables.scss";
import { Input } from "@mui/material";
import {importContent} from "../redux/Actions";
import { async } from "q";
import { useDispatch } from "react-redux";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const modal = (props) => {
  const { open,apiCall,Heading, deleteItems, setOpen, idData, dispatch,response, getList ,fileData,setFileData} = props;
  // ** State
  const handleClose = () => setOpen(false);
  const handleDelete = async () => {
    deleteItems(idData);
    setOpen(false);
  };

  const handleSubmit=()=>{
    const file = fileData
const reader = new FileReader()
reader.readAsBinaryString(file)
// reader.onloadend = () => {
    const binaryString = reader.result // Binary string.
    // const newFile = new File([binaryString], file.name, { type: file.type }) // Re-create file from binary data.
// }
    console.log(fileData,"FILEDATA")
    const formData = new FormData()
    formData.append('formFile', fileData) 
    apiCall(formData)
    setOpen(false);
  }

  return (
    <Fragment>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
       
        <DialogContent>
          <DialogContentText >
           

          </DialogContentText>
          <div  className="row headingtext ">
          {Heading}
          </div>
          <div
         > 
         
               <div className="table_text mt-3">
               Excel file:
               </div>
           
               
               <div className="input-file">
         <Input name="fileData" onChange={(e)=>{setFileData(e.target.files[0])}} style={{fontSize:"12px" , marginTop:"10px",border:"none"}} size="small" type="file"/>
         </div>
                
            </div>
        </DialogContent>
        <DialogActions className="dialog-actions-dense">

         
          <div style={{ margin: "0px" }} className="actionButton">
            <Button
            style={{fontSize:"12px"}}
              type="reset"
              size="small"
              sx={{ mr: 1 }}
              variant="outlined"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button  style={{fontSize:"12px"}}size="small" variant="contained" onClick={handleSubmit}>
             Import 
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default modal;
