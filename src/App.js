import './App.css';

import DisplayEmailContainer from './DisplayEmailComponents/DisplayEmailContainer/DisplayEmailContainer';
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import {useState, useEffect} from "react";
import DisplayReadingPanel from "./ReadingPanel/DisplayReadingPanel";

function App() {
    const [allEmailSnippets, setAllEmailSnippets] = useState([])
    const [emailSearchId, setEmailSearchId] = useState(98)
    const [emailDataById, setEmailDataById] = useState([])
    const [emailRepliesBoolean, setEmailRepliesBoolean] = useState(false)
    const [sidebarIsHidden, setSidebarIsHidden] = useState(true)

    const fetchEmailById = async () => {
        let queryString = 'http://localhost:8080/emails/' + emailSearchId
        if (emailRepliesBoolean) {
            queryString = queryString + '?replies=1'
        }
        const EmailById = await fetch(queryString)
        const jsonEmailById = await EmailById.json()
        setEmailDataById(jsonEmailById.data.email)
    }

    useEffect(() => {
        fetchEmailById()
    }, [])

    useEffect(()=> {
        fetchEmailById()
        },[emailSearchId])

    const fetchAllEmailData = async () => {
        const EmailData = await fetch('http://localhost:8080/emails')
        const jsonEmailData = await EmailData.json()
        setAllEmailSnippets(jsonEmailData.data)
    }

    useEffect(() => {
        fetchAllEmailData()
    }, [])


    return (
        <div className="App">
            <Header setSidebarIsHidden={setSidebarIsHidden} sidebarIsHidden={sidebarIsHidden}/>
            <div className={'d-flex flex-row vh-100'}>
                <SideBar sidebarIsHidden={sidebarIsHidden}/>
                <DisplayEmailContainer allEmailSnippets={allEmailSnippets} setEmailSearchId={setEmailSearchId} fetchEmailById={fetchEmailById}/>
                <DisplayReadingPanel emailDataById={emailDataById} />
            </div>
        </div>
    )
}

export default App;
