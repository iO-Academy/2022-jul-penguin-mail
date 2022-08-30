import InboxButton from './InboxButton/InboxButton'
import './style.css'

const SideBar = (props) => {
    return (

        <nav className={(props.sidebarIsHidden ? 'd-none' : 'd-block') + " d-md-block col-xs-6 col-sm-2 col-md-2 col-lg-1 bg-info h-100% p-0"}>
            <InboxButton />
        </nav>
    )
}
export default SideBar