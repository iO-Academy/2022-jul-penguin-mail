import './DisplayEmailCards.css'

const EmailCard = (props) => {
    const emailItems = props.emailItems;
    const emails = emailItems.map((emailItem) =>
        <ul>{emailItem}</ul>
    )
    return (
        <div>
            <div className="displayNameAndDate">
                <h2 className="contactName">Maria Smith</h2>
                <p className="receivedEmailDate">23/07/2022</p>
            </div>
            <div className="displaySubjectAndContent">
                <p className="emailSubject"></p>
                <p className="emailContent"></p>
            </div>
        </div>
    )
}

export default EmailCard