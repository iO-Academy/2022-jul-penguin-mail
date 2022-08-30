import './DisplayEmailCard.css'


function displayEmailCard() {

    return (
        <div>
            <div className="displayNameAndDate">
                <h2 className="contactName">Maria Smith</h2>
                <p className="receivedEmailDate">23/07/2022</p>
            </div>
           <div className="displaySubjectAndContent">
               <p className="emailSubject"></p>
               <p className="emailContent"></p>
           </div>
        </div>
    )
}

export default DisplayEmailCard