

const Title = (props) => {
 return (
    <div className="layout-page flex-box flex-center">
                {/* this scene has a title, some action buttons, stored in an array, with type data, visual elements (how many? what type?) stored in an array, with type data, and data about next available scenes, stored in an array */}
                <div className="column-lg-12 column-md-12 column-sm-12">

                    <div className="flex-box flex-evenly">
                        <img src={props.activeScene.images[0].image} alt={props.activeScene.images[0].alt} className="column-lg-7 column-md-12 column-sm-12 text-shadow title-image" />
                        <div className="column-lg-4 column-md-12 column-sm-12">
                            <h2 className="lesson-title">{props.activeScene.title}</h2>
                            <div className="flex-box flex-center">
                                <button className="button" onClick={(event) => props.updateScene(props.lesson[2])}>Start lesson</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

 )
}
export default Title;