const EmailBody = (props) => {
    const emailData = props.emailDataById

    return (
        <div>
            <p>{emailData.body}</p>

        </div>
    )
}

export default EmailBody