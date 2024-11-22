
const 
HTMLRender = (props) => {

    function createMarkup () {
        return {__html: props.text};
    }
        return(
            <div dangerouslySetInnerHTML={createMarkup()}/>
        )
}
export default HTMLRender; 