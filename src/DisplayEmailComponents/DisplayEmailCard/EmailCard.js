import './DisplayEmailCards.css'

function EmailCard() {

    return (
        <div className={'border d-flex flex-row justify-content-between p-2'}>
           <div className="emailContainer">
               <p>Maria Smith</p>
               <p>EMAILSUBJECT</p>
               <p>body of the email</p>
           </div>
            <div className="dateContainer">
                <p>23/07/2022</p>
            </div>
        </div>
    )
}
export default EmailCard