import {useEffect, useState} from 'react';

const DisplayEmailSnippet = () => {
    const [allEmails, setAllEmails] = useState(null)
    
    const fetchAllEmailData = async () => {
        const EmailData = await fetch('http://localhost:8080/emails')
        const jsonEmailData = await EmailData.json()
        setAllEmails(jsonEmailData)
    }

    useEffect(() => {
        fetchAllEmailData();
    }, [])

    useEffect(() => {
        console.log(allEmails)
    }, [allEmails])
}

export default DisplayEmailSnippet