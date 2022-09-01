const SentButton = (props) => {

    const displaySentEmails = () => {
        if(props.isSentButtonClicked === false) {
            props.setIsSentButtonClicked(true)
            props.setIsInboxButtonClicked(false)
        }
    }

    return (
        <div>
            <button onClick={displaySentEmails} id="sentButton" type="button" className="btn btn-info w-100 d-flex flex-row justify-content-between pl-1 pr-1">
               Sent
               <p></p>
            </button>
        </div>
    )
}
export default SentButton