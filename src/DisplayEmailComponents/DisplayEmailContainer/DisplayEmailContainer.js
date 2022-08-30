import './DisplayEmailContainer.css'
import EmailCard  from "../DisplayEmailCard/EmailCard";

// const DisplayEmailContainer = EmailCard.map((DisplayEmailCard) =>
//     {
//         const emailItem = <EmailCard emailCard={DisplayEmailCard}/>
//             return (
//                 <ul className="DisplayEmailContainer .col-3 ">
//                     {emailItem}
//                 </ul>
//             )
//     }
// )
//
// export default DisplayEmailContainer



const DisplayEmailContainer = (props) => {
        const emailItems = props.emailItems;
        const emails = emailItems.map((emailItem) =>
            <li>{emailItem}</li>
        )
    return (
        <ul>{emails}</ul>
    )
}

export default DisplayEmailContainer


// function NameList(props) {
//     const myLists = props.myLists;
//     const listItems = myLists.map((myList) =>
//         <li>{myList}</li>
//     );
//     return (
//         <div>
//             <h2>React Map Example</h2>
//             <ul>{listItems}</ul>
//         </div>
//     );
// }