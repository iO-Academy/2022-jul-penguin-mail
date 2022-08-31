
import './App.css';
import DisplayEmailContainer from "./DisplayEmailComponents/DisplayEmailContainer/DisplayEmailContainer";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import {useEffect, useState} from "react"


const App = () => {
    const [allEmailSnippets, setAllEmailSnippets] = useState([])
    const [sidebarIsHidden, setSidebarIsHidden] = useState(true)
    const fetchAllEmailData = async () => {
        const emailData = await fetch('http://localhost:8080/emails')
        const jsonEmailData = await emailData.json()
        setAllEmailSnippets(jsonEmailData.data)
    }

    useEffect(() => {
        fetchAllEmailData()
    }, [])

    return (
    <div className="App">
        <Header setSidebarIsHidden={setSidebarIsHidden} sidebarIsHidden={sidebarIsHidden} />
        <div className="sideBarContainer">
            <SideBar sidebarIsHidden={sidebarIsHidden} />
            <DisplayEmailContainer allEmailSnippets={allEmailSnippets} />
        </div>
    </div>
    )
}
export default App;
