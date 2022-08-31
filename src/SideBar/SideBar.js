import InboxButton from './InboxButton/InboxButton'
import './style.css'

const SideBar = () => {
    return (
        <nav className="col-lg-1 col-md-2 col-sm-2 col-xs-6 bg-info h-100 p-0">
            <InboxButton />
        </nav>
    )
}
export default SideBar