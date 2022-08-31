
import './App.css';
import DisplayEmailContainer from "./DisplayEmailComponents/DisplayEmailContainer/DisplayEmailContainer";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import {useEffect, useState} from "react"


function App() {
    const [allEmailSnippets, setAllEmailSnippets] = useState([])
    const fetchAllEmailData = async () => {
        const EmailData = await fetch('http://localhost:8080/emails')
        const jsonEmailData = await EmailData.json()

        setAllEmailSnippets(jsonEmailData.data)

    }

    useEffect(() => {
        fetchAllEmailData()
    }, [])

    const [sidebarIsHidden, setSidebarIsHidden] = useState(true)
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
