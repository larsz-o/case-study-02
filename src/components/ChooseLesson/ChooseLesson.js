import {useState} from 'react';
import data from './lessonMetaData'

import LayoutPicker from '../Layouts/LayoutPicker';

const ChooseLesson = () => {

  const [lesson] = useState([data])
  const [introState, setIntroState] = useState(true)

  return (
    <main className="dark-mode">
      {introState ? (<div className="content">
        <div className="flex-box flex-center">
          {lesson.map((lesson, i) => {
            return (
              <div
                key={i}
                className="lesson-div-whole"
              >
                     <div className="button-title-holder">
                  <h3 className="lesson-title-picker">{lesson.title}</h3>
                  <div className="column-lg-12 column-sm-12 column-md-12">
                    <div className="flex-box flex-center">
                 
                    
                     
                      
                    </div>
                  </div>
                  </div>
                  <div className="flex-box flex-center">
                    <div className="lesson-div flex-box flex-column column-lg-5 column-sm-12 column-md-12">
                  <img
                    src={lesson.image}
                    alt={lesson.name}
                    className="lesson-image-picker"
                  />
             
                  
                </div>
                <div className="info-div column-lg-5 column-sm-12 column-md-12">
                    <div className="info-box">
                  <p>{lesson.metadata.description}</p>
                  </div>
                  <div className="info-box-trans">
                  <p>As a result of this lesson, you will be able to:</p>
                  <ul>
                  {lesson.metadata.objectives.map((objective, i) => {
                    return <li key={i}>{objective}</li>;
                  })}
                  </ul>
                  </div>
                  <p className="flex-box"><p>Target Audiences</p>
                  <ul>
                  {lesson.metadata.themes.map((theme, i) => {
                      return <li  key={i}>{theme} </li>;
                    })}
                  </ul>
                   
                  </p>
                  <div className="flex-box flex-center">
                  <button
                        className="button button-dark flex-row flex-center"
                        onClick={() => setIntroState(false)}
                      >   
                        Start 
                      </button>
                  </div>
                 
                </div></div>
             
              </div>
            );
          })}
        </div>
      </div>):(<div><LayoutPicker/></div>)}
    
  </main>
  )
  
  }
  export default ChooseLesson;

  


