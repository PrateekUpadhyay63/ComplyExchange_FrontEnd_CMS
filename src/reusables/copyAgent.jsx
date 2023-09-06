import { forwardRef, Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import DialogContentText from "@mui/material/DialogContentText";
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

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import {
//   createFormInstruction,
//   getFormInstructionById,
//   updateFormInstruction,
//   getAllFormInstructions,
// } from "../redux/Actions";

const AgentCopyDialog = (props) => {
  const { open, setOpen, idData, response, getList, closeCallback, setIdData } =
    props;
  console.log(idData);

  const handleClose = () => {
    setOpen(false);
    setData({});
  };

  const dispatch = useDispatch();
  let params = useParams();
  const history = useHistory();
  const formData = useSelector((state) => state.ParentDropDownReducer);
  const [data, setData] = useState({
    name: "",
    formfeedusername: "",
    formFeedpassword:"",
    clientId:"",
    clientCode:"",
    selectionCode:""  
});

//   function setInitialData() {
//     console.log(idData, "IDDATA");
//     if (idData) {
//       if (idData == 0) {
//         setData({ description: "", url: "" });
//       } else
//         dispatch(
//           getFormInstructionById(idData, (data) => {
//             setData(data);
//           })
//         );
//     } else {
//       setData({ description: "", url: "" });
//     }
//   }
//   useEffect(() => {
//     setInitialData();
//   }, [idData]);

//   useEffect(() => {
//     setInitialData();
//   }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let createData = {
        name: data.name,
        formfeedusername: data.formfeedusername,
        formFeedpassword: data.formFeedpassword,
        clientId: data.clientId,
        clientCode: data.clientCode,
        selectionCode: data.selectionCode,
    };
    // let updateData = {
    //   description: data.description,
    //   id: idData,
    //   url: data.url,
    // };

    // if (idData) {
    //   dispatch(updateFormInstruction(updateData));
    //   setData({
    //     description: "",
    //     url: "",
    //   });
    // } else {
    //   dispatch(createFormInstruction(createData, () => setIdData(-1)));
    //   setData({ description: "", url: "" });
    // }
    setData({ description: "", url: "" });
    closeCallback();
    handleClose();
  };
  return (
    <Fragment>
      <Dialog
        open={open}
        keepMounted
        // onClose={handleClose}
      >
        <DialogContent>
          <DialogContentText>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              {
                <div className="row headingtext ">
                  {idData ? " Edit Copy Agent" : "Copy Agent"}
                </div>
              }
              <div className="row">
                <div className="col-3 table_text">
                  <div className="table_text">
                    Name:<span style={{ color: "red" }}>*</span>
                  </div>
                </div>
                <div className="col-9">
                  <TextField
                    className="table_text"
                    size="small"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* 2 */}
              <div className="row">
                <div className="col-3 table_text">
                  <div className="table_text">
                    form feed username:<span style={{ color: "red" }}>*</span>
                  </div>
                </div>
                <div className="col-9">
                  <TextField
                    className="table_text"
                    size="small"
                    name="FormfeedUsername"
                    value={data.formfeedusername}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* 3 */}
              <div className="row">
                <div className="col-3 table_text">
                  <div className="table_text">
                    form feed password:<span style={{ color: "red" }}>*</span>
                  </div>
                </div>
                <div className="col-9">
                  <TextField
                    className="table_text"
                    size="small"
                    name="formFeedpassword"
                    value={data.formFeedpassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* 4 */}
              <div className="row">
                <div className="col-3 table_text">
                  <div className="table_text">
                    Client Id:<span style={{ color: "red" }}>*</span>
                  </div>
                </div>
                <div className="col-9">
                  <TextField
                    className="table_text"
                    size="small"
                    name="clientId"
                    value={data.clientId}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* 5 */}
              <div className="row">
                <div className="col-3 table_text">
                  <div className="table_text">
                    Client Code:<span style={{ color: "red" }}>*</span>
                  </div>
                </div>
                <div className="col-9">
                  <TextField
                    className="table_text"
                    size="small"
                    name="clientCode"
                    value={data.clientCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* 6 */}
              <div className="row">
                <div className="col-3 table_text">
                  <div className="table_text">
                    Selection code:<span style={{ color: "red" }}>*</span>
                  </div>
                </div>
                <div className="col-9">
                  <TextField
                    className="table_text"
                    size="small"
                    name="selectionCode"
                    value={data.selectionCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* <div className="row">
                <div className="col-3 table_text">
                  <div className="table_text">
                    URL:<span style={{ color: "red" }}>*</span>
                  </div>
                </div>
                <div className="col-9">
                  <TextField
                    className="table_text"
                    size="small"
                    name="url"
                    // value={data.url}
                    onChange={handleChange}
                    isRequired="true"
                    required
                  />
                </div>
              </div> */}

              <div style={{ margin: "0px" }} className="actionButton mt-3">
                <Button
                  style={{ fontSize: "12px" }}
                  type="reset"
                  size="small"
                  // onClick={()=>{history.push("/form_instruction")}}
                  variant="outlined"
                  onClick={handleClose}
                  sx={{ mr: 1 }}
                >
                  cancel
                </Button>

                <Button
                  style={{ fontSize: "12px" }}
                  size="small"
                  type="submit"
                  onChange={handleSubmit}
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
  );
};

export default AgentCopyDialog;
