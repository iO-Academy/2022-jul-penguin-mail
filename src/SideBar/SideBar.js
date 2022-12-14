import InboxButton from './InboxButton/InboxButton'
import './SideBar.css'

const SideBar = (props) => {
    return (
        <nav
            className={(props.sidebarIsHidden ? 'd-none' : 'd-block position-fixed position-md-relative') + " sideBar d-md-block col-6 col-md-2 col-lg-1 bg-info p-0 vh-100%"}>
            <InboxButton allEmailSnippets={props.allEmailSnippets} setIsReadingPanelOpen={props.setIsReadingPanelOpen}/>
        </nav>
    )
}
export default SideBar