import EmailCard from "./EmailCard/EmailCard";

const EmailCardList = (props) => {
    const formatDateForDisplay = (emailDate) => {
        const dateUnixTimestamp = Date.parse(emailDate)
        const dateObject = new Date(dateUnixTimestamp)
        return dateObject.toLocaleDateString("en-GB")
    }
    const emailItems = props.allEmailSnippets;
    const emailCardsArray = emailItems.map((emailItem) =>
        <EmailCard name={emailItem.name} date_created={formatDateForDisplay(emailItem.date_created)}
                   subject={emailItem.subject} body={emailItem.body} read={emailItem.read}/>
    )
    return (
        <div className="col-sm-12 col-md-4 px-0 overflow-auto">
            {emailCardsArray}
        </div>
    )
}
export default EmailCardList


