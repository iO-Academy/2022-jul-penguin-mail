import InboxButton from './InboxButton/InboxButton'
import './SideBar.css'
import NewEmailButton from './NewEmailButton/NewEmailButton.js'

const SideBar = (props) => {
    return (
        <nav
            className={(props.sidebarIsHidden ? 'd-none' : 'd-block position-fixed position-md-relative') + " sideBar d-md-block col-6 col-md-2 col-lg-1 bg-info p-0 vh-100%"}>
            <NewEmailButton setIsNewEmailHidden={props.setIsNewEmailHidden} isNewEmailHidden={props.isNewEmailHidden}/>
            <InboxButton allEmailSnippets={props.allEmailSnippets}/>
        </nav>
    )
}

export default SideBar