
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
    const [isNewEmailHidden, setIsNewEmailHidden] = useState(true)



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
            <InputBox isNewEmailHidden={isNewEmailHidden} setIsNewEmailHidden={setIsNewEmailHidden}/>
            <SideBar sidebarIsHidden={sidebarIsHidden} allEmailSnippets={allEmailSnippets} setIsNewEmailHidden={setIsNewEmailHidden} isNewEmailHidden={isNewEmailHidden}/>
            <EmailCardList allEmailSnippets={allEmailSnippets} />
        </main>
    </div>
    )
}
export default App;
