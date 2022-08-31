import EmailHeader from "../EmailHeader";
import EmailBody from "../EmailBody";

const DisplayReadingPanel = (props) => {
    return (
        <div className="DisplayReadingPanel d-none d-sm-none d-md-none col-7">
            <EmailHeader emailDataById={props.emailDataById}/>
            <EmailBody emailDataById={props.emailDataById}/>
        </div>
    )
}

export default DisplayReadingPanel