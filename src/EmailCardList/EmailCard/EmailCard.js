
function EmailCard(props) {
    const handleClick = event => {
        props.setEmailSearchId(event.currentTarget.id)
        props.setReadingPanelDisplay(true)
    }
  
    return (
        <div className={(props.read == true ?  'btn-light' : 'btn-secondary') + " btn col-md-12 border-bottom d-flex flex-row justify-content-between p-2"} id={props.id}
        onClick={handleClick}>
           <div>
                <p className={'font-weight-bold h5 text-left'}>{props.name}</p>
                <p className={'text-left'}>{props.subject}</p>
                <p className={'text-left'}>{props.body}</p>
            </div>
            <div>
                <p className={'font-weight-bold'}>{props.date_created}</p>
            </div>
        </div>
    )
}
export default EmailCard
