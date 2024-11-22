
import Body from './HTMLRender';
const MainText = (props) => {

        return (
            <div className={props.className}>
                <Body text={props.text} />
            </div>
        )
}

export default MainText;