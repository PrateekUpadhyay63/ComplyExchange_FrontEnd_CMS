import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  TextField,
  CardHeader,
  div,
  CardContent,
  CardActions,
  Card,
  Divider,
  Breadcrumbs,Link,
  Select,
  MenuItem,
  Checkbox,
  Button,
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
import { createRules, getRuleById, updateRule } from "../../../redux/Actions";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./index.scss";

export default function Language_details() {
  const dispatch = useDispatch();
  let params = useParams();
  const history = useHistory();

  const formData = useSelector((state) => state.getRulesByIdReducer);

  const [data, setData] = useState({
    id: params?.id,
    code: 0,
    ruleClass: null,
    warning: "",
    isNotAllowedSubmissionToContinue: false,
    disableRule: false,
  });

  useEffect(() => {
    dispatch(getRuleById(params.id,(data)=>{ setData(data)}));
    // Component mounted, initialize the editor states
    setEditorState1( data?.warning
      ? () => {
          const blocksFromHTML = convertFromHTML(data?.warning);
          const contentState = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
          );

          return EditorState.createWithContent(contentState);
        }
      :EditorState.createEmpty());
    setEditorState2(EditorState.createEmpty());
  }, []);

  useEffect(()=>{
    let html = draftToHtml(convertToRaw(editorState1.getCurrentContent()));
    setData({...data,warning:html})
  },[editorState1])

  const [editorState1, setEditorState1] = useState(EditorState.createEmpty());
  const [editorState2, setEditorState2] = useState(EditorState.createEmpty());

  const handleEditorStateChange1 = (editorState) => {
    setEditorState1(editorState);
    let html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setData({...data,warning:html})
  };

  const handleEditorStateChange2 = (editorState) => {
    setEditorState2(editorState);
  };

  const convertToHtml1 = () => {
    const contentState = editorState1.getCurrentContent();
    const html = draftToHtml(convertToRaw(contentState));
    const convertedContentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          key: "converted",
          text: html,
          type: "unstyled",
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
    });
    const convertedEditorState = EditorState.push(
      editorState1,
      convertedContentState,
      "insert-characters"
    );
    setEditorState1(convertedEditorState);
  };
  const convertToPlainText1 = () => {
    const contentState = editorState1.getCurrentContent();
    const plainText = convertToRaw(contentState)
      .blocks.map((block) => block.text)
      .join("\n");
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, "");
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags);
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    );
    setEditorState1(plainTextEditorState);
  };

  const convertToPreview1 = () => {
    const contentState = editorState1.getCurrentContent();
    const plainText = convertToRaw(contentState)
      .blocks.map((block) => block.text)
      .join("\n");
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, "");
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags);
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    );
    setEditorState1(plainTextEditorState);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleToogle = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
   let updateData={
      id: params?.id,
    code: data.code,
    ruleClass: data.ruleClass,
    warning: data.warning,
    isNotAllowedSubmissionToContinue: data.isNotAllowedSubmissionToContinue,
    disableRule: data.disableRule,
    }
      dispatch(updateRule(updateData));
    history.push("/rules");
  };

  return (
    <Card>
      <Fragment>
        <ThemeOptions />
        {/* <AppHeader /> */}

        <div className="app-main">
          <AppSidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">
            <div role="presentation" className="bread_crumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                   underline="hover"
                   color="#0c62a8"
                   onClick={()=>{
                    history.push("/rules")
                   }}
                 
                  
                >
                  Rules 
                </Link>
                <p
                   underline="hover"
                   color="#000000"
                   
                 
                  
                >
                  Rules Details
                </p>
              </Breadcrumbs>
            </div>
              <div className=" row m-1 border p-3 box_style"  style={{height:"908px"}}>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div>
                    {
                      <div className="row headingLabel complyColor">
                        {params.id ? " Edit Rules" : "Add Rules"}
                      </div>
                    }
                    <div className="row">
                      <div className="col-1">
                        <div
                       
                          className="table_content mt-2"
                        >
                          Code:
                        </div>
                      </div>
                      <div className="col-11">
                       
                        <TextField
                         className="table_content"
                          size="small"
                          name="code"
                          value={data.code}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <div
                       
                          className="table_content"
                        >
                          Warning:
                        </div>
                      </div>

                      <div className="editor-div">
                        <Editor
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class"
                          toolbarClassName="toolbar-class"
                          editorState={editorState1}
                          onEditorStateChange={handleEditorStateChange1}
                        />
                      <div
                      className="editor-div"
                        style={{
                          display: "flex",
                          marginTop: "5px",
                        }}
                      >
                        <div>
                          {" "}
                          <button type="button" onClick={convertToHtml1}>
                            HTML
                          </button>
                        </div>
                        <div style={{ marginLeft: "5px" }}>
                          {" "}
                          <button type="button" onClick={convertToPlainText1}>
                            Text
                          </button>
                        </div>
                        <div style={{ marginLeft: "5px" }}>
                          <button type="button" onClick={convertToPreview1}>
                            Preview
                          </button>
                        </div>
                      </div>
                      </div>

                <div className="row">
                <div className="col-3">
                  <div
                 
                    sx={{fontWeight: 100, color: "black", fontSize: "13px",marginTop:'10px' }}
                  >
                Exclude from "Opt out" process:
                  </div>
                </div>
                <div className="col-9">
                 <Checkbox/>
                </div>
              </div>
              
              <div className="row">
                <div className="col-3">
                  <div
                 
                    sx={{ fontWeight: 100, color: "black", fontSize: "13px",marginTop:'10px' }}
                  >
                Suppress if Treaty Country suppression activated in Agent screen:
                  </div>
                </div>
                <div className="col-9">
                 <Checkbox/>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <div
                 
                    sx={{fontWeight: 100, color: "black", fontSize: "13px",marginTop:'10px' }}
                  >
        Suppress if Non Treaty Country suppression activated in Agent screen:
                  </div>
                </div>
                <div className="col-9">
                 <Checkbox/>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <div
                 
                    sx={{ fontWeight: 100, color: "black", fontSize: "13px",marginTop:'10px' }}
                  >
            Suppress if IGA Process suppression activated in Agent screen:
                  </div>
                </div>
                <div className="col-9">
                 <Checkbox/>
                </div>
              </div>

                      <div className="row">
                        <div className="col-3">
                          <div
                         
                            className="table_content"
                          >
                            Do not allow a submission to continue (Continue
                            button disabled):
                          </div>
                        </div>
                        <div className="col-9">
                          <Checkbox
                            name="isNotAllowedSubmissionToContinue"
                            onClick={(e) => handleToogle(e)}
                            className="p-0 checkBox"
                            checked={data.isNotAllowedSubmissionToContinue}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-3">
                          <div
                            
                           className="table_content"
                          >
                            Disable Rule:
                          </div>
                        </div>
                        <div className="col-9">
                          <Checkbox
                            name="disableRule"
                            onClick={(e) => handleToogle(e)}
                            className="p-0 checkBox"
                            checked={data.disableRule}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="actionBtn">
                    <Button
                     onClick={()=>{
                      history.push("/rules")
                     }}
                      type="reset"
                      size="medium"
                      variant="outlined"
                      sx={{ mr: 1 ,my:2}}
                    >
                      Cancel
                    </Button>

                    <Button
                      size="medium"
                      type="submit"
                      sx={{ mr: 1, my: 2 }}
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
