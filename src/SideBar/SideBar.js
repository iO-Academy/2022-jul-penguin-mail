import InboxButton from './InboxButton/InboxButton'
import SentButton from './SentButton/SentButton'
import './SideBar.css'
import NewEmailButton from './NewEmailButton/NewEmailButton.js'

const SideBar = (props) => {
    return (
        <nav className={(props.sidebarIsHidden ? 'd-none' : 'd-block position-fixed position-md-relative') + " sideBar d-md-block col-6 col-md-2 col-lg-1 bg-info p-0 vh-100%"}>
            <NewEmailButton setIsNewEmailHidden={props.setIsNewEmailHidden} isNewEmailHidden={props.isNewEmailHidden}/>
            <InboxButton allEmailSnippets={props.allEmailSnippets} isInboxButtonClicked={props.isInboxButtonClicked} setIsInboxButtonClicked={props.setIsInboxButtonClicked} setIsSentButtonClicked={props.setIsSentButtonClicked} setIsReadingPanelOpen={props.setIsReadingPanelOpen} />
            <SentButton isSentButtonClicked={props.isSentButtonClicked} setIsSentButtonClicked={props.setIsSentButtonClicked} setIsInboxButtonClicked={props.setIsInboxButtonClicked} />
        </nav>
    )
}

export default SideBar