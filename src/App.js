
import './App.css';
import EmailCardList from "./EmailCardList/EmailCardList.js";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import InputBox from "./InputBox/InputBox";
import {useEffect, useState} from "react"

const App = () => {

    const [allEmailSnippets, setAllEmailSnippets] = useState([])
    const [sidebarIsHidden, setSidebarIsHidden] = useState(true)
    const [isSentButtonClicked, setIsSentButtonClicked] = useState(false)
    const [isInboxButtonClicked, setIsInboxButtonClicked] = useState(true)

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
        fetchAllEmailData()
    }, [])

    useEffect(() => {
        if(isSentButtonClicked === true){
            fetchAllSentEmails()
            console.log('sent button clicked')
        }
    },[isSentButtonClicked])

    useEffect(() => {
        if(isInboxButtonClicked === true){
            fetchAllEmailData()
            console.log('inbox button clicked')
        }
    },[isInboxButtonClicked])

    return (
    <div className="App">
        <Header setSidebarIsHidden={setSidebarIsHidden} sidebarIsHidden={sidebarIsHidden} />
        <main>
            <InputBox />
            <SideBar sidebarIsHidden={sidebarIsHidden} allEmailSnippets={allEmailSnippets} isSentButtonClicked={isSentButtonClicked} setIsSentButtonClicked={setIsSentButtonClicked} isInboxButtonClicked={isInboxButtonClicked} setIsInboxButtonClicked={setIsInboxButtonClicked} />
            <EmailCardList allEmailSnippets={allEmailSnippets} />
        </main>
    </div>
    )
}
export default App;
