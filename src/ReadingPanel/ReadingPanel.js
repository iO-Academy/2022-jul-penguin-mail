import EmailHeader from "./EmailHeader/EmailHeader"
import EmailBody from "./EmailBody/EmailBody"
import CloseButton from "./CloseButton/CloseButton"

const ReadingPanel = (props) => {
    return (
        <div className={(props.readingPanelDisplay  ? ' ' : 'd-none') + " col-sm-12  vh-100% col-md-7"}>
            <CloseButton setReadingPanelDisplay={props.setReadingPanelDisplay}/>
            <EmailHeader emailDataById={props.emailDataById} />
            <EmailBody emailDataById={props.emailDataById} />
        </div>
    )
}

export default ReadingPanel