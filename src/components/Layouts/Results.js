

import HTMLRender from './HTMLRender';
const Results = (props) => {
  function handlePrint(){
    window.print();
  };

  
    return (
      <div className="flex-box flex-center little-room">
        <div className="column-lg-10 column-md-12 column-sm-12">
          <div className="flex-box flex-end">
            <p onClick={() => handlePrint()}>
              <span className="download-div">print</span>
            </p>
          </div>
          <h2>Your responses:</h2>
          <ol>
            {props.checkpointData.map((response, i) => {
              return(
                <div key={i}>
                <li><HTMLRender text={response.question_text}/></li>
                <p>You said: <HTMLRender text={response.data}/></p>
                {response.feedback !== null && <p>Feedback: <HTMLRender text={response.feedback}/></p>}
              </div>
              );
            })}
          </ol>
        </div>
        <div className="flex-box flex-end button-container ">
        <p onClick={() => props.hideResults()}>
             <span className="download-div">hide results and finish lesson</span> 
            </p>
        </div>
       
      </div>
    );
  
}

export default Results;
