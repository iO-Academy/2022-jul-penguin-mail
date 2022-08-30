import './DisplayEmailContainer.css'
import EmailCard  from "../DisplayEmailCard/EmailCard";

const DisplayEmailContainer = () => {
    const emailItems = props.emailItems;
    const emails = emailItems.map((emailItem) =>
        <EmailCard name={name} date_created={date_created}
                   subject={subject} body={body} />
    )
   return (
       <div className="DisplayEmailContainer col-3">


       </div>

   )
}
export default DisplayEmailContainer


// const exampleName = 'Rayna'
// const exampleDate = '2022-30-08'
// const exampleSubject = 'Bills unpaid'
// const exampleBody = 'Please pay the bills otherwise dire consequences will follol'
// <EmailCard name={exampleName} date_created={exampleDate} subject={exampleSubject} body={exampleBody} />