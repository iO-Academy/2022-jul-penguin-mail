import './App.css';
import EmailCardList from "./EmailCardList/EmailCardList.js";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import InputBox from "./InputBox/InputBox";
import ReadingPanel from "./ReadingPanel/ReadingPanel";
import {useState, useEffect} from "react";

const App = () => {

    const [allEmailSnippets, setAllEmailSnippets] = useState([])
    const [readingPanelCurrentEmailId, setReadingPanelCurrentEmailId] = useState([])
    const [readingPanelEmailData, setReadingPanelEmailData] = useState([])
    const [sidebarIsHidden, setSidebarIsHidden] = useState(true)
    const [isNewEmailHidden, setIsNewEmailHidden] = useState(true)
    const [isSentButtonClicked, setIsSentButtonClicked] = useState(false)
    const [isInboxButtonClicked, setIsInboxButtonClicked] = useState(true)
    const [isReadingPanelOpen, setIsReadingPanelOpen] = useState(false)

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

    const fetchAllSentEmails = async () => {
        const emailData = await fetch('http://localhost:8080/emails/sent')
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

    useEffect(() => {
        if(isSentButtonClicked === true){
            fetchAllSentEmails()
        }
    },[isSentButtonClicked])

    useEffect(() => {
        if(isInboxButtonClicked === true){
            fetchAllEmailData()
        }
    },[isInboxButtonClicked])

    return (
        <main className="App">
            <Header setSidebarIsHidden={setSidebarIsHidden} sidebarIsHidden={sidebarIsHidden}/>
            <div className={'d-flex flex-row vh-100'}>
                <InputBox isNewEmailHidden={isNewEmailHidden} setIsNewEmailHidden={setIsNewEmailHidden}/>
                <SideBar allEmailSnippets={allEmailSnippets} sidebarIsHidden={sidebarIsHidden} isSentButtonClicked={isSentButtonClicked} setIsSentButtonClicked={setIsSentButtonClicked}
                         setIsReadingPanelOpen={setIsReadingPanelOpen} isInboxButtonClicked={isInboxButtonClicked} setIsInboxButtonClicked={setIsInboxButtonClicked} setIsNewEmailHidden={setIsNewEmailHidden} isNewEmailHidden={isNewEmailHidden} />
                <EmailCardList allEmailSnippets={allEmailSnippets} setReadingPanelCurrentEmailId={setReadingPanelCurrentEmailId}
                               fetchEmailById={fetchEmailById} isReadingPanelOpen={isReadingPanelOpen}
                               setIsReadingPanelOpen={setIsReadingPanelOpen} readingPanelCurrentEmailId={readingPanelCurrentEmailId}/>
                <ReadingPanel emailData={readingPanelEmailData} isReadingPanelOpen={isReadingPanelOpen}
                              setIsReadingPanelOpen={setIsReadingPanelOpen}/>
            </div>
        </main>
    )
}
export default App;
