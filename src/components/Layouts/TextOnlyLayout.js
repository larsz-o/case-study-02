
import MainText from './MainText';
import Toolbar from './Toolbar';
const TextOnlyLayout = (props) => {

        return (
            <div className="layout-page">
                {/* this scene has a title, some action buttons, stored in an array, with type data, visual elements (how many? what type?) stored in an array, with type data, and data about next available scenes, stored in an array */}
                <div className="flex-box flex-center">

                    <div className="column-lg-10 column-md-12 column-sm-12">
                    {props.activeScene.title !== null && <h2><span className="title">{props.activeScene.title}</span></h2>} 
                    </div>
                </div>
                <div className="flex-box flex-center">
                {props.activeScene.text && props.activeScene.title !== null && <div className="column-lg-10 column-md-12 column-sm-12 text-spotlight text-blue">
                        {props.activeScene.text.map((text, i) => {
                            return (
                                <MainText className={`text-div`} text={text} key={i}/>
                           );
                        })}
                    </div>}
                    {props.activeScene.text && props.activeScene.title === null && <div className="column-lg-10 column-md-12 column-sm-12 text-spotlight text-shadow">
                        {props.activeScene.text.map((text, i) => {
                            return (
                                <MainText className={`text-div text-div-light`} text={text} key={i}/>
                           );
                        })}
                    </div>}
                    </div> 
              
               <Toolbar activeScene={props.activeScene} updateLayoutNumber={props.updateLayoutNumber} updateScene={props.updateScene} lesson={props.lesson}/> 
            </div>

        );
    
}

export default TextOnlyLayout;