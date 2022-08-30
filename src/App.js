import './App.css'
import {useEffect, useState} from 'react'
import SideBar from './SideBar'
import DisplayEmailContainer from "./DisplayEmailComponents/DisplayEmailContainer/DisplayEmailContainer";
import Header from './Header/Header.js'


function App() {
    const [allEmailSnippets, setAllEmailSnippets] = useState([])
    const fetchAllEmailData = async () => {
        const EmailData = await fetch('http://localhost:8080/emails')
        const jsonEmailData = await EmailData.json()
        setAllEmailSnippets(jsonEmailData)
    }

    useEffect(() => {
        fetchAllEmailData()
    }, [])

    useEffect(() => {
        console.log(allEmailSnippets)
    }, [allEmailSnippets])

  return (
    <div className="App">
      <SideBar />
      <DisplayEmailContainer allEmailSnippets={allEmailSnippets}/>
      <Header />

    </div>
  );
}
export default App;
