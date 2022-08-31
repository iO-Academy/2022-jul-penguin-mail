import EmailHeader from "../EmailHeader";
import EmailBody from "../EmailBody";

const DisplayReadingPanel = (props) => {
    return (
        <div className="DisplayReadingPanel col-8">
            <EmailHeader emailDataById={props.emailDataById}/>
            <EmailBody emailDataById={props.emailDataById}/>
        </div>
    )
}

export default DisplayReadingPanel