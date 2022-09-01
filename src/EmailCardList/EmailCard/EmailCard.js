const EmailCard = (props) => {
    return (
        <div className={(props.read == true ? 'btn-light' : 'btn-secondary') + " btn col-md-12 border-bottom d-flex flex-row justify-content-between p-2"}>
            <div className="emailContainer">
                <p className={'font-weight-bold h5 text-left'}>{props.name}</p>
                <p className={'text-left'}>{props.subject}</p>
                <p className={'text-left'}>{props.body}</p>
            </div>
            <div className="dateContainer">
                <p className={'font-weight-bold'}>{props.date_created}</p>
            </div>
        </div>
    )
}
export default EmailCard
