import './DisplayEmailContainer.css'
import displayEmailCard  from "../DisplayEmailCard/DisplayEmailCard";

const emails = displayEmailContainer.map((displayEmailContainer) =>
    {
        const emailItem = <DisplayEmailCard emailCard={displayEmailCard}/>
            return (
                <ul className="displayEmailContainer .col-3 ">
                    {emailItem}
                </ul>
            )
    }
)

export default DisplayEmailContainer

// function displayEmailContainer() {
//     return (
//         <div className="displayEmailContainer .col-3 ">
//             <DisplayEmailCard emailCard={displayEmailCard} />
//         </div>
//     )
// }
