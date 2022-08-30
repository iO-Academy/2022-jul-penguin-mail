import './App.css';
import SideBar from './SideBar'
import {useState, useEffect} from "react";

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
        setEmailDataById(jsonEmailById)
    }
    useEffect(() => {
        fetchEmailById()
    }, [])
    useEffect(() => {
        console.log(emailDataById)
    }, [emailDataById])
  return (
    <div className="App">
      <SideBar />
    </div>
  );
}

export default App;
