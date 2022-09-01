import EmailHeader from "./EmailHeader/EmailHeader"
import EmailBody from "./EmailBody/EmailBody"
import CloseButton from "./CloseButton/CloseButton"

const ReadingPanel = (props) => {
    return (
        <div className={(props.isReadingPanelOpen  ? ' ' : 'd-none') + " col-sm-12  vh-100% col-md-7"}>
            <CloseButton setIsReadingPanelOpen={props.setIsReadingPanelOpen}/>
            <EmailHeader emailData={props.emailData} />
            <EmailBody emailData={props.emailData} />
        </div>
    )
}

export default ReadingPanel