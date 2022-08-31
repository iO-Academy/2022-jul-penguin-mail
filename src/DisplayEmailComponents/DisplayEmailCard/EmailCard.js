
import './DisplayEmailCards.css'

function EmailCard(props) {
    const handleClick = event => {
        props.setEmailSearchId(event.currentTarget.id)
        props.setReadingPanelDisplay(true)
    }
  
    return (
        <div className={(props.read == true ? 'btn btn-light col-md-12' : 'btn btn-secondary col-md-12') + "border d-flex flex-row justify-content-between p-2"} id={props.id}
        onClick={handleClick}>
           <div className="emailContainer">
                <p className={'font-weight-bold h5 text-left'}>{props.name}</p>
                <p className={'text-left'}>{props.subject}</p>
                <p>{props.body}</p>
            </div>
            <div className="dateContainer">
                <p className={'font-weight-bold'}>{props.date_created}</p>
            </div>
        </div>
    )
}
export default EmailCard
