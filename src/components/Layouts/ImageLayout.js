import ImageDiv from "./ImageDiv";
import MainText from "./MainText";
import Toolbar from "./Toolbar";

const ImageLayout = (props) => {
  return (
    <div className="layout-page">
      {/* this scene has a title, some action buttons, stored in an array, with type data, visual elements (how many? what type?) stored in an array, with type data, and data about next available scenes, stored in an array */}
      <div className="flex-box flex-center">
        <div className="column-lg-12 column-sm-12 column-md-12">
          {props.activeScene.title !== null && (
            <h2 className="flex-row flex-center">
              <span className="title">{props.activeScene.title}</span>
            </h2>
          )}
        </div>
      </div>
      <div className="flex-box flex-center">
        <div className="column-lg-12 column-md-12 column-sm-12 flex-box  flex-evenly ">
   
          {props.activeScene.images.map((image, i) => {
            if (image.order !== 86) {
              return (
                <ImageDiv
                  columns={`column-lg-5 column-sm-12 column-md-12`}
                  image={image}
                  key={i}
                />
              );
            } else {
              return <ImageDiv class={"full-width"} image={image} key={i} />;
            }
          })}
                 {props.activeScene.text.length > 0 && (
            <div className="flex-column column-lg-6 column-md-12 column-sm-12 text-column flex-center">
              {props.activeScene.text.map((text, i) => {
                return (
                  <MainText className={`larger-text`} text={text} key={i} />
                );
              })}
            </div>
          )}

        </div>
      </div>

      <Toolbar
        activeScene={props.activeScene}
        lesson={props.lesson}
        updateScene={props.updateScene}
        updateLayoutNumber={props.updateLayoutNumber}
      />
    </div>
  );
};

export default ImageLayout;
