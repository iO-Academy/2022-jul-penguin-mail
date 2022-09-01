const EmailHeader = (props) => {
    const headerData = props.emailDataById
    const headerDateUnix = Date.parse(headerData.date_created)
    const headerDate = new Date(headerDateUnix)
    const headerDateHuman = headerDate.toLocaleDateString("en-GB")

    return (
        <div className="emailHeader d-flex row justify-content-between font-weight-bold pt-2">
            <div className="header col-8 d-flex flex-column">
                <p className="headerName h5 font-weight-bold">{headerData.name}</p>
                <p className="headerEmailAddress">{headerData.email}</p>
            </div>
            <div className="headerDate col-4 d-flex justify-content-end h6 font-weight-bold">
                <p>{headerDateHuman}</p>
            </div>
        </div>
    )
}

export default EmailHeader