import './DisplayEmailContainer.css'
import EmailCard  from "../DisplayEmailCard/EmailCard";

const DisplayEmailContainer = (props) => {
    const emailItems = props.allEmailSnippets;
    const emailCardsArray = emailItems.map((emailItem) =>
        <EmailCard name={emailItem.name} date_created={emailItem.date_created}
                   subject={emailItem.subject} body={emailItem.body} />
    )
   return (
       <div className="DisplayEmailContainer col-3">
           {emailCardsArray}
       </div>

   )
}
export default DisplayEmailContainer

