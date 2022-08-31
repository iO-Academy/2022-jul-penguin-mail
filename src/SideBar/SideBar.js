import InboxButton from './InboxButton/InboxButton'
import './style.css'

const SideBar = (props) => {
    return (

        <nav className={(props.sidebarIsHidden ? 'd-none' : 'd-block position-fixed position-md-relative') + " d-md-block col-sm-2 col-md-2 col-lg-1 bg-info p-0"}>
            <InboxButton />
        </nav>
    )
}
export default SideBar