
import './App.css';
import EmailCardList from "./EmailCardList/EmailCardList.js";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import InputBox from "./InputBox/InputBox";
import SentButton from './SideBar/SentButton/SentButton';
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
    const [sendEmailData, setEmailData] = useState()



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
        <main>
            <InputBox />
            <SideBar sidebarIsHidden={sidebarIsHidden} allEmailSnippets={allEmailSnippets} />
            <EmailCardList allEmailSnippets={allEmailSnippets} />
        </main>
    </div>
    )
}
export default App;
