const InboxButton = (props) => {
<<<<<<< HEAD
    
    const clickResetView = () => {
        props.setReadingPanelDisplay(false); 
    }

    const updateUnreadAmount = () => {
        let unreadCount = props.allEmailSnippets.filter((emailItem) => emailItem.read === "0").length
        return unreadCount
    }
    
    return (
        <div>
            <button onClick={clickResetView} id="inboxButtons" type="button" className="btn btn-info w-100 text-left d-flex flex-row justify-content-between">Inbox
                <p className="bg-warning font-weight-bold text-dark pl-1 pr-1 rounded">{updateUnreadAmount()}</p>
            </button>
        </div>
    )
}
export default InboxButton