
const email = {
    "data": {
        id: 98,
        name: 'Tom',
        read: 0
    }
}

function EmailCard() {

        return (
        <button className={(email.data.read === 1 ? 'btn btn-light col-md-12' : 'btn btn-secondary col-md-12')}>
           <div className="emailContainer">
               <p className={'font-weight-bold h5'}>Maria Smith</p>
               <p>EMAILSUBJECT</p>
               <p>body of the email</p>
           </div>
            <div className="dateContainer">
                <p className={'font-weight-bold'}>23/07/2022</p>
            </div>
        </button>
    )
    }


export default EmailCard

    // <button className={(email.data.read === 1 ? 'btn btn-light' : 'btn btn-secondary')}>
