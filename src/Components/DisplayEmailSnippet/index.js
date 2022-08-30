import {useEffect, useState} from 'react';

const DisplayEmailSnippet = () => {
    const [allEmails, getAllEmails] = useState(null)
    useEffect(() => {
        const fetchAllEmailData = async () => {
            const EmailData = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await EmailData.json()
            console.log(json)
            return json
        }
        const result = fetchAllEmailData()
            .catch(console.error)
    }, [])
}

export default DisplayEmailSnippet