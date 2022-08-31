function EmailCard(props) {

    return (
        <div className={'btn border d-flex flex-row justify-content-between p-2'}>
            <div className="emailContainer">
                <p className={'font-weight-bold h5'}>{props.name}</p>
                <p>{props.subject}</p>
                <p>{props.body}</p>
            </div>
            <div className="dateContainer">
                <p className={'font-weight-bold'}>{props.date_created}</p>
            </div>
        </div>
    )
}

export default EmailCard

// <div>
// <div className="displayNameAndDate">
//     <h2 className="contactName"></h2>
// <p className="receivedEmailDate">{props.date_created}</p>
// </div>
// <div className="displaySubjectAndContent">
//     <p className="emailSubject">{props.subject}</p>
//     <p className="emailContent">{props.body}</p>
// </div>
// </div>
// )