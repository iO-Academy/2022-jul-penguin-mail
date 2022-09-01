import './App.css';
import EmailCardList from "./EmailCardList/EmailCardList.js";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import ReadingPanel from "./ReadingPanel/ReadingPanel";
import {useState, useEffect} from "react";

const App = () => {
    const [allEmailSnippets, setAllEmailSnippets] = useState([])
    const [emailSearchId, setEmailSearchId] = useState([])
    const [readingPanelEmailData, setReadingPanelEmailData] = useState([])
    const [sidebarIsHidden, setSidebarIsHidden] = useState(true)
    const [isReadingPanelOpen, setIsReadingPanelOpen] = useState(false)

    const fetchEmailById = async () => {
        let fetchUrl = 'http://localhost:8080/emails/' + emailSearchId
        const emailData = await fetch(fetchUrl)
        const jsonEmailData = await emailData.json()
        setReadingPanelEmailData(jsonEmailData.data.email)
    }

    useEffect(() => {
        fetchEmailById()
    }, [emailSearchId])

    const fetchAllEmailData = async () => {
        const emailData = await fetch('http://localhost:8080/emails')
        const jsonEmailData = await emailData.json()
        setAllEmailSnippets(jsonEmailData.data)
    }

    useEffect(() => {
        fetchAllEmailData()
    }, [])

    return (
        <main className="App">
            <Header setSidebarIsHidden={setSidebarIsHidden} sidebarIsHidden={sidebarIsHidden}/>
            <div className={'d-flex flex-row vh-100'}>
                <SideBar allEmailSnippets={allEmailSnippets} sidebarIsHidden={sidebarIsHidden}
                         setReadingPanelDisplay={setIsReadingPanelOpen}/>
                <EmailCardList allEmailSnippets={allEmailSnippets} setEmailSearchId={setEmailSearchId}
                               fetchEmailById={fetchEmailById} readingPanelDisplay={isReadingPanelOpen}
                               setReadingPanelDisplay={setIsReadingPanelOpen}/>
                <ReadingPanel emailDataById={readingPanelEmailData} readingPanelDisplay={isReadingPanelOpen}
                              setReadingPanelDisplay={setIsReadingPanelOpen}/>
            </div>
        </main>
    )
}
export default App;
