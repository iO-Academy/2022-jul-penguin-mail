const MenuButton = (props) => {
    const toggleMenu = () => {
        props.sidebarIsHidden === false ? props.setSidebarIsHidden(true) : props.setSidebarIsHidden(false)
    }
    
    return (
            <button onClick={toggleMenu} className={'h4 my-auto border d-sm-block d-md-none'}>Menu</button>
    )
}
export default MenuButton   