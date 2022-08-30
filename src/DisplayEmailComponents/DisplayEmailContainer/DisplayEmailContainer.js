import './DisplayEmailContainer.css'
import EmailCard  from "../DisplayEmailCard/EmailCard";

const DisplayEmailContainer = (props) => {
    const emailItems = props.EmailCard;
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


// const exampleName = 'Rayna'
// const exampleDate = '2022-30-08'
// const exampleSubject = 'Bills unpaid'
// const exampleBody = 'Please pay the bills otherwise dire consequences will follol'
// <EmailCard name={exampleName} date_created={exampleDate} subject={exampleSubject} body={exampleBody} />