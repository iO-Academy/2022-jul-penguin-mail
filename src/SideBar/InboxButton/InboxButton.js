const InboxButton = (props) => {
    const unreadEmailCount = props.allEmailSnippets.filter((obj) => obj.read == 0).length;
    return (
        <div>
            <button id="inboxButton" type="button" className="btn btn-info w-100 text-left d-flex flex-row justify-content-between">Inbox
                <p className="bg-warning font-weight-bold text-dark pl-1 pr-1 rounded">{unreadEmailCount}</p>
            </button>
        </div>
    )
}
export default InboxButton