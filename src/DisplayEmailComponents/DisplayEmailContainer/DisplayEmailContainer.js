import EmailCard from "../DisplayEmailCard/EmailCard";

const DisplayEmailContainer = (props) => {
    const dateConvert = (emailItem) => {
        const headerDateUnix = Date.parse(emailItem.date_created)
        const headerDate = new Date(headerDateUnix)
        return headerDate.toLocaleDateString("en-GB")
    }
    const emailItems = props.allEmailSnippets;
    const emailCardsArray = emailItems.map((emailItem) =>
        <EmailCard name={emailItem.name} date_created={dateConvert(emailItem)}
                   subject={emailItem.subject} body={emailItem.body} read={emailItem.read}/>
    )
    return (
        <div className="col-sm-12 vh-100% col-md-4 overflow-auto">
            {emailCardsArray}
        </div>
    )
}
export default DisplayEmailContainer


