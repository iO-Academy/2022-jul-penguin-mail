import EmailHeader from "./EmailHeader";
import EmailBody from "./EmailBody";
import './style.css'
import CloseButton from "./CloseButton";

const DisplayReadingPanel = (props) => {
    return (
        <div className={(props.readingPanelDisplay  ? ' ' : 'd-none') + " col-sm-12  vh-100% col-md-7"}>
            <CloseButton setReadingPanelDisplay={props.setReadingPanelDisplay}/>
            <EmailHeader emailDataById={props.emailDataById} />
            <EmailBody emailDataById={props.emailDataById} />
        </div>
    )
}

export default DisplayReadingPanel

