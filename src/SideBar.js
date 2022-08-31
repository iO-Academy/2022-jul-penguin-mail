import InboxButton from './InboxButton'
import './SideBar.css'

const SideBar = () => {
    return (
        <nav class="col-lg-1 col-md-2 col-sm-2 col-xs-6 bg-info position-fixed h-100 p-0">
            <InboxButton />
        </nav>
    )
}

export default SideBar
