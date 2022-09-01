const EmailBody = (props) => {
    const emailData = props.emailData

    return (
        <div>
            <p className=" font-weight-bold h4">{emailData.subject}</p>
            <p>{emailData.body}</p>
        </div>
    )
}

export default EmailBody