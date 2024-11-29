import { useEffect, useState } from "react";

import Body from "./HTMLRender";
import { Dialog, DialogContent } from "@mui/material";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import swal from "sweetalert";

const editorConfiguration = {
  toolbar: ["bold", "italic", "hyperlink", "|", "undo", "redo"],
};

const Navigation = (props) => {
  const [open, changeOpen] = useState(false);
  const [selected, changeSelected] = useState("");
  const [submitted, changeSubmitted] = useState(false);
  const [shortAnswer, changeAnswer] = useState("");
  const [checkpointToDo, changeCheckpoint] = useState(true);
  const [question_text, setQuestions] = useState([]);

  useEffect(() => {
    if (props.activeScene.checkpoints.length !== 0) {
      let question = props.activeScene.checkpoints.filter(
        (question) => !question.answer
      );
      setQuestions(question[0].data);
    }
    setQuestions(question_text);
  });
  //to-do: check if data is already saved for this question in user answers redux and if so, store its value to short answer/selected

  function checkAnswer() {
    changeSubmitted(true);
    changeCheckpoint(false);
  }

  function confirmEnd() {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to end this lesson? All of your data will be erased.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.updateScene(props.lesson[2]);
        props.updateLayoutNumber(1)
      } else {
        swal({ icon: "success", text: "Okay, continue on." });
      }
    });
  }
  function getPreviousScene() {
    console.log(props)
    let thisScene = props.activeScene.navigation[0].previous_scene;
    props.updateScene(props.lesson[thisScene])
    props.updateLayoutNumber(props.lesson[thisScene].layoutNumber)
  }
  function handleChangefor(string){
    changeAnswer(string)
  }
  function setNextScene() {
  
    let thisScene = props.activeScene.navigation[0].available_scene;
    props.updateScene(props.lesson[thisScene])
    props.updateLayoutNumber(props.lesson[thisScene].layoutNumber)
 
    changeOpen(false);
    changeSelected("");
    changeSubmitted(false);
    changeAnswer("");
    changeCheckpoint(true);
    window.scrollTo(0, 0);
  }

  return (
    <div className="buttons-container space-atop flex-box flex-end">
      {props.activeScene.scene_number > 2 && props.activeScene.scene_number !== "19" && (
        <button className="button" onClick={() => getPreviousScene()}>
          &larr;&nbsp;Previous
        </button>
      )}
      {props.activeScene.navigation.length === 1 &&
        !props.activeScene.checkpoint &&
        !props.activeScene.last && (
          <button className="button" onClick={() => setNextScene()}>
            Next &rarr;
          </button>
        )}
      {props.activeScene.last && (
        <button className="button" onClick={() => confirmEnd()}>
          End lesson
        </button>
      )}
      {props.activeScene.checkpoint && checkpointToDo && (
        <button className="button" onClick={() => changeOpen(true)}>
          Reflect and Assess
        </button>
      )}
      {!checkpointToDo && (
        <div>
          {props.activeScene.navigation.map((nav, i) => {
            return (
              <div key={i}>
                <button className="button" onClick={() => setNextScene()}>
                  {nav.text}&nbsp;&rarr;
                </button>
              </div>
            );
          })}
        </div>
      )}
      <Dialog
        className="dialog-pop"
        open={open}
        onClose={() => changeOpen(false)}
      >
        <DialogContent>
          {!submitted && (
            <div>
              {props.activeScene.checkpoints.length > 0 &&
                props.activeScene.checkpoints.map((item, i) => {
                  if (!item.answer) {
                    return (
                      <div className="body-text" key={i}>
                        <div className="flex-box flex-row dialog-question-title">
                          <h4>Checkpoint</h4>
                        </div>
                        <div className="dialog-question">
                          <Body text={item.data} />
                        </div>
                      </div>
                    );
                  } else {
                    return false;
                  }
                })}
            
              {props.activeScene.checkpoints.length > 0 &&
                props.activeScene.checkpoints.map((item, i) => {
                  if (!item.answer && item.question_type === 2) {
                    return (
                      <div key={i}>
                        <CKEditor
                          className="full-width"
                          editor={ClassicEditor}
                          config={editorConfiguration}
                          data={shortAnswer}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            handleChangefor(data, "shortAnswer");
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    );
                  } else {
                    return false;
                  }
                })}
              <div className="flex-box flex-end">
                <button className="button" onClick={() => checkAnswer()}>
                  Submit
                </button>
              </div>
            </div>
          )}
          {submitted && shortAnswer.length === 0 && (
            <div>
              <div className="flex-box">
                <h4 className="read-more transparent">
                  Your response: &nbsp;&nbsp;
                  <Body text={selected.data} />
                </h4>
              </div>
              <div className="feedback">
                <Body text={selected.alt} />
              </div>
              <div className="flex-box flex-end">
                <button className="button" onClick={() => changeOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          )}

          {submitted && shortAnswer.length !== 0 && (
            <div>
              <div className="flex-column">
                <h4 className="read-more transparent">Your response: </h4>
                <Body text={shortAnswer} />
                <p>You can download your answers at the end of the lesson.</p>
              </div>
              <div className="flex-box flex-end">
                <button className="button" onClick={() => changeOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navigation;
