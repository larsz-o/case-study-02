import { useState, useEffect } from "react";
import lessonData from "../ChooseLesson/lessonData";
import ProgressBar from "../Header/ProgressBar";
import DecisionLayout from "./DecisionLayout";
import Title from "./Title";
import TextOnlyLayout from "./TextOnlyLayout";
import ImageLayout from "./ImageLayout";
import LessonComplete from "./LessonComplete";

const LayoutPicker = () => {
  const [lesson] = useState(lessonData);
  const [scene, updateScene] = useState(lesson[2]);
  const [layoutNumber, updateLayoutNumber] = useState();
  const [completedPercent, updateCompletedPercent] = useState();

  useEffect(() => {
    updateLayoutNumber(scene.layoutNumber);
    let completedPercent = (
      (parseInt(scene.scene_number) / Object.keys(lesson).length) *
      100
    ).toFixed(2);
    updateCompletedPercent(completedPercent);
  }, []);
  return (
    <div>
      <div className="flex-box flex-end">
        {/* <div className="column-lg-3 column-md-3 column-sm-3">
          <ProgressBar completed={completedPercent} />
        </div> */}
      </div>
      {layoutNumber === 1 && (
        <ImageLayout
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
      {layoutNumber === 4 && (
        <TextOnlyLayout
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
      {layoutNumber === 3 && (
        <Title
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
      {layoutNumber === 9 && (
        <DecisionLayout
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
      {layoutNumber === 6 && (
        <LessonComplete
          activeScene={scene}
          updateScene={updateScene}
          updateLayoutNumber={updateLayoutNumber}
          lesson={lesson}
        />
      )}
    </div>
  );
};
export default LayoutPicker;
