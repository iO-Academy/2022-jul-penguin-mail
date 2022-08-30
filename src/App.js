import './App.css';
import {useEffect, useState} from 'react';
import TestComponent from './Components/TestComponent';

const GetAllEmailSnippets = () => {
    const [allEmailSnippets, setAllEmailSnippets] = useState([])
    const fetchAllEmailData = async () => {
        const EmailData = await fetch('http://localhost:8080/emails')
        const jsonEmailData = await EmailData.json()
        setAllEmailSnippets(jsonEmailData)
    }

    useEffect(() => {
        fetchAllEmailData();
    }, [])

    useEffect(() => {
        console.log(allEmailSnippets)
    }, [allEmailSnippets])
} 

function App() {
  return (
    <div className="App">
      <GetAllEmailSnippets />
    </div>
  );
}

export default App;
