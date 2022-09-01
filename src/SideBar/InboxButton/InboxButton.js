const InboxButton = (props) => {
    const unreadEmailCount = props.allEmailSnippets.filter((obj) => obj.read == 0).length;

    const displayInbox = () => {
        if(props.isInboxButtonClicked === false) {
            props.setIsInboxButtonClicked(true)
            props.setIsSentButtonClicked(false)
        }
    }

    return (
        <div>
            <button onClick={displayInbox} id="inboxButton" type="button" className="btn btn-info w-100 text-left d-flex flex-row justify-content-between">Inbox
                <p className="bg-warning font-weight-bold text-dark pl-1 pr-1 rounded">{unreadEmailCount}</p>
            </button>
        </div>
    )
}
export default InboxButton