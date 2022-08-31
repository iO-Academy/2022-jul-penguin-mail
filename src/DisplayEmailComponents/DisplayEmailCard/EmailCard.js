
import './DisplayEmailCards.css'

function EmailCard(props) {

    return (
        <div className={'btn border d-flex flex-row justify-content-between p-2'} id={props.id}>
            <div className="emailContainer">
                <p className={'font-weight-bold h5'}>{props.name}</p>
                <p>{props.subject}</p>
                <p>{props.body}</p>
            </div>
            <div className="dateContainer">
                <p className={'font-weight-bold'}>{props.date_created}</p>
            </div>
        </div>
    )
}
export default EmailCard
