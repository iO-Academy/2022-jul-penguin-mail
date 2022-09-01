import './App.css';
import EmailCardList from "./EmailCardList/EmailCardList.js";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import ReadingPanel from "./ReadingPanel/ReadingPanel";
import {useState, useEffect} from "react";

const App = () => {
    const [allEmailSnippets, setAllEmailSnippets] = useState([])
    const [readingPanelCurrentEmailId, setReadingPanelCurrentEmailId] = useState([])
    const [readingPanelEmailData, setReadingPanelEmailData] = useState([])
    const [sidebarIsHidden, setSidebarIsHidden] = useState(true)
    const [isReadingPanelOpen, setIsReadingPanelOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const fetchEmailById = async () => {
        let fetchUrl = 'http://localhost:8080/emails/' + readingPanelCurrentEmailId
        const emailData = await fetch(fetchUrl)
        const jsonEmailData = await emailData.json()
        setReadingPanelEmailData(jsonEmailData.data.email)
    }

    const setEmailAsRead = async () => {
        const requestOptions = {
            method: 'PUT'
        }
        await fetch('http://localhost:8080/emails/' + readingPanelCurrentEmailId, requestOptions)
    }

    const fetchAllEmailData = async () => {
        const emailData = await fetch('http://localhost:8080/emails')
        const jsonEmailData = await emailData.json()
        setAllEmailSnippets(jsonEmailData.data)
    }


    useEffect(() => {
        fetchEmailById()
        setEmailAsRead()
        fetchAllEmailData()
    }, [readingPanelCurrentEmailId])

    useEffect(() => {
        fetchAllEmailData()
    }, [])

    return (
        <main className="App">
            <Header setSidebarIsHidden={setSidebarIsHidden} sidebarIsHidden={sidebarIsHidden}/>
            <div className={'d-flex flex-row vh-100'}>
                <SideBar allEmailSnippets={allEmailSnippets} sidebarIsHidden={sidebarIsHidden}
                         setIsReadingPanelOpen={setIsReadingPanelOpen}/>
                <EmailCardList allEmailSnippets={allEmailSnippets} setReadingPanelCurrentEmailId={setReadingPanelCurrentEmailId}
                               fetchEmailById={fetchEmailById} isReadingPanelOpen={isReadingPanelOpen}
                               setIsReadingPanelOpen={setIsReadingPanelOpen} setIsActive={setIsActive}/>
                <ReadingPanel emailData={readingPanelEmailData} isReadingPanelOpen={isReadingPanelOpen}
                              setIsReadingPanelOpen={setIsReadingPanelOpen}/>
            </div>
        </main>
    )
}
export default App;
