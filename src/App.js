import './App.css';
import DisplayEmailContainer from './DisplayEmailComponents/DisplayEmailContainer/DisplayEmailContainer';
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import {useState, useEffect} from "react";
import DisplayReadingPanel from "./ReadingPanel/DisplayReadingPanel";

function App() {
    const [emailSearchId, setEmailSearchId] = useState(98)
    const [emailDataById, setEmailDataById] = useState([])
    const [emailRepliesBoolean, setEmailRepliesBoolean] = useState(false)
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
    useEffect(() => {
        console.log(emailDataById)
    }, [emailDataById])
    return (
        <div className="App">
            <Header />
            <div className={'d-flex flex-row vh-100'}>
                <SideBar />
                <DisplayEmailContainer />
                <DisplayReadingPanel emailDataById={emailDataById}/>
            </div>
        </div>
    )
}

export default App;
