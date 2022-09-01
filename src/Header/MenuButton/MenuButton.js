const MenuButton = (props) => {
    const toggleMenu = () => {
        props.setSidebarIsHidden(!props.sidebarIsHidden)
    }
    return (
            <button onClick={toggleMenu} className={'h4 my-auto border d-sm-block d-md-none'}>Menu</button>
    )
}
export default MenuButton