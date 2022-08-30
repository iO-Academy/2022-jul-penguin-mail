import './App.css';
import {useEffect, useState} from 'react';
import TestComponent from './Components/TestComponent';

function App() {
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

  return (
    <div className="App">
      <TestComponent allEmailSnippets={allEmailSnippets} />
    </div>
  );
}

export default App;
