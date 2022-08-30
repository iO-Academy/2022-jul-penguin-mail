import NewEmailButton from './NewEmailButton'
import InboxButton from './InboxButton'
import SentInboxButton from './SentInboxButton'
import DeletedInboxItems from './DeletedInboxItems'
import './SideBar.css'

const SideBar = () => {
    return (
        <nav class="col-lg-1 col-md-2 col-sm-2 col-xs-6 bg-info position-fixed h-100 p-0">
            <NewEmailButton />
            <InboxButton />
            <SentInboxButton />
            <DeletedInboxItems />
        </nav>
    )
}

export default SideBar
