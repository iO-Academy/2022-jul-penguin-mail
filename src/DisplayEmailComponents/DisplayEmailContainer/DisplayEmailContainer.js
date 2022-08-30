import './DisplayEmailContainer.css'
import EmailCard  from "../DisplayEmailCard/EmailCard";

const DisplayEmailContainer = () => {
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


