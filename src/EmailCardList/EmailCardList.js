import EmailCard from "./EmailCard/EmailCard";

const EmailCardList = (props) => {
    const formatDateForDisplay = (emailDate) => {
        const headerDateUnix = Date.parse(emailDate)
        const headerDate = new Date(headerDateUnix)
        return headerDate.toLocaleDateString("en-GB")
    }
    const emailItems = props.allEmailSnippets;
    const emailCardsArray = emailItems.map((emailItem) =>
        <EmailCard name={emailItem.name} date_created={formatDateForDisplay(emailItem.date_created)}
                   subject={emailItem.subject} body={emailItem.body} read={emailItem.read}/>
    )
    return (
        <div className="col-sm-12 col-md-4 overflow-auto px-0">
            {emailCardsArray}
        </div>
    )
}
export default EmailCardList


