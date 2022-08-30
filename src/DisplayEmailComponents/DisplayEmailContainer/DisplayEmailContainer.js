import './DisplayEmailContainer.css'
import EmailCard  from "../DisplayEmailCard/EmailCard";

const DisplayEmailContainer = () => {
   return (
       <div className="DisplayEmailContainer col-3">
           <EmailCard emailCard={EmailCard} />
       </div>

   )
}
export default DisplayEmailContainer


