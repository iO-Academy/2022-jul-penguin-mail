import EmailCard  from "../DisplayEmailCard/EmailCard";
// import {useState} from 'react'

const DisplayEmailContainer = () => {
        // const [email, setEmail] = useState({
        //         "id": "539",
        //         "name": "Nickie Rusted",
        //         "body": "this is the email body",
        //         "email": "nrustedey@people.com.cn",
        //         "subject": "SDA",
        //         "date_created": "2022-06-30 18:01:08",
        //         "read": "1"
        // })
   return (
       <div className="DisplayEmailContainer col-4 overflow-auto">
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
           <EmailCard emailCard={EmailCard} />
       </div>
   )
}
export default DisplayEmailContainer


