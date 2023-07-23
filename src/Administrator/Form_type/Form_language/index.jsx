import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams , useHistory } from "react-router-dom";
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
import { CheckBox } from "@mui/icons-material";
import { getAllLanguages } from "../../../redux/Actions";


export default function Language_details() {
  const dispatch = useDispatch();
  let params = useParams();
  let history = useHistory()
  const languageData = useSelector((state) => state.LanguagesReducer);
  const parentDropDown = useSelector((state) => state.ParentDropDownReducer);
  const [editorState1, setEditorState1] = useState(EditorState.createEmpty());
  const [editorState2, setEditorState2] = useState(EditorState.createEmpty());
  let TypeId = 2;
  const [data, setData] = useState(
    {
      formUSCId: params?.id,
      languageId: params?.langId,
      description: "",
  substituteStatement: "",
  bulkTranslation: false,
    }
  );
  const getLangById=(id)=>{
    
    const result = languageData?.allLanguageData?.filter((item) => {
      if (item.id == params.langId) {
        return item;
      }
    });
    if(result?.length){
      return result[0]?.name
    }
  }

  useEffect(() => {

    dispatch(getAllLanguages())
    // Component mounted, initialize the editor states
    // setEditorState1(
    //   idPageData?.pageTranslationData?.substituteStatement
    //     ? () =>  {
    //       const blocksFromHTML = convertFromHTML(idPageData?.pageTranslationData?.substituteStatement)
    //       const contentState = ContentState.createFromBlockArray(
    //         blocksFromHTML.contentBlocks,
    //         blocksFromHTML.entityMap
    //       )
    //       console.log(blocksFromHTML,"blocksFromHTML")
      
    //       return EditorState.createWithContent(contentState)
    //     }
    //     : () => EditorState.createEmpty());
    // setEditorState2(idPageData?.pageTranslationData?.summary
    //   ? () =>  {
    //     const blocksFromHTML = convertFromHTML(idPageData?.pageTranslationData?.summary)
    //     const contentState = ContentState.createFromBlockArray(
    //       blocksFromHTML.contentBlocks,
    //       blocksFromHTML.entityMap
    //     )
    //     console.log(blocksFromHTML,"blocksFromHTML")
    
    //     return EditorState.createWithContent(contentState)
    //   }
    //   : () => EditorState.createEmpty());
  }, []);

  const handleEditorStateChange1 = (editorState) => {
    setEditorState1(editorState);
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
  const convertToHtml2 = () => {
    const contentState = editorState2.getCurrentContent();
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
      editorState2,
      convertedContentState,
      "insert-characters"
    );
    setEditorState2(convertedEditorState);
  };

  const convertToPlainText2 = () => {
    const contentState = editorState2.getCurrentContent();
    const plainText = convertToRaw(contentState)
      .blocks.map((block) => block.text)
      .join("\n");
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, "");
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags);
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    );
    setEditorState2(plainTextEditorState);
  };

  const convertToPreview2 = () => {
    const contentState = editorState2.getCurrentContent();
    const plainText = convertToRaw(contentState)
      .blocks.map((block) => block.text)
      .join("\n");
    const plainTextWithoutTags = plainText.replace(/<[^>]+>/g, "");
    const plainTextContentState =
      ContentState.createFromText(plainTextWithoutTags);
    const plainTextEditorState = EditorState.createWithContent(
      plainTextContentState
    );
    setEditorState2(plainTextEditorState);
  };

  const handleChange = (e) => {
    console.log(e.target.value, "value");
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(insertContentManagement(data));
  };

  return (
    <Card>
      <Fragment>
        <ThemeOptions />
    

        <div className="app-main">
          <AppSidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">
            <div role="presentation" className="bread_crumbs">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                color="#0e548c"
                   underline="hover"
                   onClick={()=>{
                    history.push("/form_type")
                  }}
                  
                  
                >
                  Forms
                </Link>
                <Link
                   underline="hover"
                  color="#171616"
                  
                  
                  
                >
                  Forms Languages
                </Link>
              </Breadcrumbs>
            </div>
              <div className=" row m-1 border p-3 box_style" style={{height:'910px'}}>
                <form onSubmit={(e) => handleSubmit(e)}>
                { <div className="row headingLabel complyColor">{params.id ?" Edit Language" : "Add Language"}</div>}
                  <div>
                    <div className="row">
                      <div className="col-2">
                        <div
                          variant="body2"
                        className="table_content"
                        >
                         Language:
                        </div>
                      </div>
                      <div className="col-10 table_content mt-1">
                        

                      {getLangById(params?.langId)}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div
                          variant="body2"
                          className="table_content"
                        >
                         Description:
                        </div>
                      </div>
                      <div className="col-10 editor-div">
                       

                        <TextField
                        className="table_content"
                          size="small"
                          name="ToolTip"
                          value={data?.ToolTip}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-2">
                        <div
                          variant="body2"
                        className="table_content"
                        >
                          Content:
                        </div>
                      </div>
                      <div className="col-10 editor-div">
                        <div
                          
                        >
                          <Editor
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                            editorState={editorState1}
                            onEditorStateChange={(value) => {
                              handleEditorStateChange1(value);
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            // justifyContent: "end",
                            marginTop: "3px",
                          }}
                        >
                          <div>
                            <button type="button" onClick={convertToHtml1}>
                              HTML
                            </button>
                          </div>
                          <div style={{ marginLeft: "5px" }}>
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
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div
                          variant="body2"
                        className="table_content"
                        >
                          Substitute form statement:
                        </div>
                      </div>
                      <div className="col-10 editor-div">
                        <div
                        
                        >
                          <Editor
                            editorState={editorState2}
                            onEditorStateChange={(value) => {
                              handleEditorStateChange2(value);
                            }}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            // justifyContent: "end",
                            marginTop: "3px",
                          }}
                        >
                          <div>
                            <button type="button" onClick={convertToHtml2}>
                              HTML
                            </button>
                          </div>
                          <div style={{ marginLeft: "5px" }}>
                            <button type="button" onClick={convertToPlainText2}>
                              Text
                            </button>
                          </div>
                          <div style={{ marginLeft: "5px" }}>
                            <button type="button" onClick={convertToPreview2}>
                              Preview
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-2 mt-2">
                        <span
                          variant="body2"
                          className="table_content"
                        >
                         Prevent bulk translation:
                        </span>
                      </div>
                        <div className="col-10">
                        <Checkbox />
                        </div>
                     
                    </div>
                  <div className="actionBtn">
                    <Button
                      type="reset"
                      size="small"
                      variant="outlined"
                      sx={{ mr: 1}}
                    >
                      Cancel
                    </Button>

                    <Button
                      size="small"
                      type="submit"
                      
                      variant="contained"
                    >
                      Save
                    </Button>
                  </div>
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
