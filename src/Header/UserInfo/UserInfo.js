import penguinImage from './Assets/surfingPenguin.png'
import './style.css'

const UserInfo = () => {
    return (
        <div className={'d-flex flex-row px-3 my-auto'}>
            <img className={'userProfile mx-2'} src={penguinImage} alt="Penguin with a surfboard" />
            <p className={'my-2 '}>User Name</p>
        </div>
    )
}
export default UserInfo