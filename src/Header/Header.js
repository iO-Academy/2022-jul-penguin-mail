import Title from './Title/Title.js'
import UserInfo from './UserInfo/UserInfo.js'
import './style.css'

const Header = () => {
    return (
        <div className={'headerContainer mw-100 d-flex flex-row justify-content-between'}>
            <Title />
            <UserInfo />
        </div>
    )
}
export default Header