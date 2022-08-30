function EmailCard() {

    return (
        <div className={'border d-flex flex-row justify-content-between p-2'}>
           <div className="emailContainer">
               <p className={'font-weight-bold h5'}>Maria Smith</p>
               <p>EMAILSUBJECT</p>
               <p>body of the email</p>
           </div>
            <div className="dateContainer">
                <p className={'font-weight-bold'}>23/07/2022</p>
            </div>
        </div>
    )
}
export default EmailCard