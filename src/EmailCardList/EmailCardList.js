import EmailCard from './EmailCard/EmailCard'

const EmailCardList = (props) => {
    const formatDateForDisplay = (emailDate) => {
        const dateUnixTimestamp = Date.parse(emailDate)
        const dateObject = new Date(dateUnixTimestamp)
        return dateObject.toLocaleDateString("en-GB")
    }
    const emailItems = props.allEmailSnippets;
    const emailCardsArray = emailItems.map((emailItem) => 
        <EmailCard emailId={emailItem.id} name={emailItem.name} date_created={formatDateForDisplay(emailItem.date_created)}
                   subject={emailItem.subject} body={emailItem.body} read={emailItem.read} setReadingPanelCurrentEmailId={props.setReadingPanelCurrentEmailId}  setIsReadingPanelOpen={props.setIsReadingPanelOpen} readingPanelCurrentEmailId={props.readingPanelCurrentEmailId} />

    )
    return (
        <div className={(props.isReadingPanelOpen  ? 'd-none' : '') + " col-sm-12 vh-100 col-md-4 d-md-block px-0 overflow-auto border-top border-bottom"}>
            {emailCardsArray}
        </div>
    )
}
export default EmailCardList




