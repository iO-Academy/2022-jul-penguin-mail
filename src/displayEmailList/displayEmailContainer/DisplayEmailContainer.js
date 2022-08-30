import './DisplayEmailContainer.css'
import displayEmailCard  from "../displayEmailCard/DisplayEmailCard";

function displayEmailContainer() {
    return (
        <div className="displayEmailContainer" ".col-3">
            <DisplayEmailCard emailCard={displayEmailCard} />
        </div>
    )
}

export default DisplayEmailContainer