const EmailHeader = (props) => {
    const headerData = props.emailDataById
    const headerDateUnix = Date.parse(headerData.date_created)
    const headerDate = new Date(headerDateUnix)
    const headerDateHuman = headerDate.toLocaleDateString("en-GB")
    console.log(headerDateHuman)



    return (
        <div className="emailHeader">
            <div>
            <p className="headerName">{headerData.name}</p>
            <p className="headerEmailAddress">{headerData.email}</p>
            </div>
            <div >
            <p>{headerDateHuman}</p>
            </div>
        </div>
    )
}

export default EmailHeader