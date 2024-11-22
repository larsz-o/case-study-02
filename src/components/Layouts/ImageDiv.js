const ImageDiv = (props)=> {
    return (
      <div
        className={`flex-column ${props.columns} ${props.divClass} lesson-image-container`}
      >
        {props.class === "blue" ? (
          <div className="blue-parent">
            <img
              src={props.image.image}
              alt={props.image.alt}
              className={`lesson-image ${props.class}`}
            />
            <p className="caption link">
              {props.image.alt} &rarr;
            </p>
            
          </div>
        ) : ( <div>{props.class === 'chooseOne' ? ( <div>
          <img
            src={props.image.image}
            alt={props.image.alt}
            className={`lesson-image ${props.class}`}
          />
        </div>):( <div>
          <img
            src={props.image.image}
            alt={props.image.alt}
            className={`lesson-image ${props.class}`}
          />
            <p className="caption">{props.image.alt}</p>
        </div>)}
         
          </div>
        )}
      </div>
    );
  }

export default ImageDiv;
