
import './DisplayEmailContainer.css'
import EmailCard from "../DisplayEmailCard/EmailCard";

const DisplayEmailContainer = (props) => {
    const formatDateForDisplay = (emailDate) => {
        const headerDateUnix = Date.parse(emailDate)
        const headerDate = new Date(headerDateUnix)
        return headerDate.toLocaleDateString("en-GB")
    }
    const emailItems = props.allEmailSnippets;
    const emailCardsArray = emailItems.map((emailItem) => 
        <EmailCard id={emailItem.id} name={emailItem.name} date_created={formatDateForDisplay(emailItem.date_created)}
                   subject={emailItem.subject} body={emailItem.body} read={emailItem.read} setEmailSearchId={props.setEmailSearchId} fetchEmailById={props.fetchEmailById} setReadingPanelDisplay={props.setReadingPanelDisplay}/>

    )
    return (
        <div className={(props.readingPanelDisplay  ? 'd-none' : '') + " col-sm-12 vh-100% col-md-4 d-md-block overflow-auto"}>
            {emailCardsArray}
        </div>
    )
}
export default DisplayEmailContainer




