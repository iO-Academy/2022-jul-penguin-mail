import {useEffect, useState} from 'react';

const DisplayEmailSnippet = () => {
    const [allEmails, setAllEmails] = useState(null)
    
    const fetchAllEmailData = async () => {
        const EmailData = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsonEmailData = await EmailData.json()
        await setAllEmails(jsonEmailData)

    }

    useEffect(() => {

        const result = fetchAllEmailData()
            .then(()=> {
                console.log(allEmails)
            })
            .catch(console.error)
    }, [])
}

export default DisplayEmailSnippet