
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
                   subject={emailItem.subject} body={emailItem.body} read={emailItem.read} setEmailSearchId={props.setEmailSearchId} fetchEmailById={props.fetchEmailById}/>

    )
    return (
        <div className="col-sm-12 vh-100% col-md-4 overflow-auto">
            {emailCardsArray}
        </div>
    )
}
export default DisplayEmailContainer


