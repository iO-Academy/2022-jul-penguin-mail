
import './App.css';
import EmailCardList from "./EmailCardList/EmailCardList.js";
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
        <div className="emailCardContainer">
            <SideBar sidebarIsHidden={sidebarIsHidden} allEmailSnippets={allEmailSnippets} />
            <EmailCardList allEmailSnippets={allEmailSnippets} />
        </div>
    </div>
    )
}
export default App;
