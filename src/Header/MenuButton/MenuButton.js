const MenuButton = (props) => {
    const toggleMenu = () => {
        props.setSidebarIsHidden(!props.sidebarIsHidden)
    }
    return (
            <button onClick={toggleMenu} className={'btn btn-secondary mx-3 h4 my-auto border d-sm-block d-md-none'}>Menu</button>
    )
}
export default MenuButton