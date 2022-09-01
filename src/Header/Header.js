import Title from './Title/Title.js'
import UserInfo from './UserInfo/UserInfo.js'
import './Header.css'
import MenuButton from "./MenuButton/MenuButton";

const Header = (props) => {
    return (
        <div className={'headerContainer mw-100 d-flex flex-row justify-content-between px-3 py-3'}>
            <div className={'d-flex flex-row px-3 my-auto'} >
                <MenuButton setSidebarIsHidden={props.setSidebarIsHidden} sidebarIsHidden={props.sidebarIsHidden} />
                <Title />
            </div>
            <UserInfo />
        </div>
    )
}
export default Header