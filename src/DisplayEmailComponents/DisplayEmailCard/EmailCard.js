import './DisplayEmailCards.css'

const EmailCard = (props) => {
    return (
        <div>
            <div className="displayNameAndDate">
                <h2 className="contactName">{props.name}</h2>
                <p className="receivedEmailDate">{props.date_created}</p>
            </div>
            <div className="displaySubjectAndContent">
                <p className="emailSubject">{props.subject}</p>
                <p className="emailContent">{props.body}</p>
            </div>
        </div>
    )
}

export default EmailCard