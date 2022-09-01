
import './App.css';
import EmailCardList from "./EmailCardList/EmailCardList.js";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import InputBox from "./InputBox/InputBox";
import {useEffect, useState} from "react"

const App = () => {

    const dummyData =   {
        "name": "Bob Ross",
        "email": "bob.ross@paintings.com",
        "subject": "Example",
        "body": "Exmaple text",
    }

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
        }
    },[isSentButtonClicked])

    useEffect(() => {
        if(isInboxButtonClicked === true){
            fetchAllSentEmails()
        }
    },[isInboxButtonClicked])

    return (
    <div className="App">
        <Header setSidebarIsHidden={setSidebarIsHidden} sidebarIsHidden={sidebarIsHidden} />
        <main>
            <InputBox />
            <SideBar sidebarIsHidden={sidebarIsHidden} allEmailSnippets={allEmailSnippets} isSentButtonClicked={isSentButtonClicked} setIsSentButtonClicked={setIsSentButtonClicked} isInboxButtonClicked={isSentButtonClicked} setIsInboxButtonClicked={setIsSentButtonClicked} />
            <EmailCardList allEmailSnippets={allEmailSnippets} />
        </main>
    </div>
    )
}
export default App;
