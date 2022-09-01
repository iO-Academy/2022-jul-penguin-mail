function EmailCard(props) {

    const checkIfEmailIdIsActive = () => {
        if(props.emailId == props.readingPanelCurrentEmailId) {
            return 'btn-primary'
        } else if(props.read == true) {
            return 'btn-light'
        } else {
            return 'btn-secondary'
        }
    }

    const handleClick = event => {
        props.setReadingPanelCurrentEmailId(props.emailId)
        props.setIsReadingPanelOpen(true)
        checkIfEmailIdIsActive()
    }
  
    return (
        <div className={checkIfEmailIdIsActive() + " btn col-md-12 border-bottom d-flex flex-row justify-content-between p-2"} emailId={props.emailId}
        onClick={handleClick}>
           <div>
                <p className={'font-weight-bold h5 text-left'}>{props.name}</p>
                <p className={'text-left'}>{props.subject}</p>
                <p className={'text-left'}>{props.body}</p>
            </div>
            <div>
                <p className={'font-weight-bold'}>{props.date_created}</p>
            </div>
        </div>
    )
}
export default EmailCard
