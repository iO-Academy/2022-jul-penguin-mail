import EmailHeader from "./EmailHeader";
import EmailBody from "./EmailBody";
import './style.css'

const DisplayReadingPanel = (props) => {
    return (
        <div className={(props.readingPanelDisplay  ? ' ' : 'd-none') + " col-sm-12  vh-100% col-md-7"}>
            <EmailHeader emailDataById={props.emailDataById}/>
            <EmailBody emailDataById={props.emailDataById}/>
        </div>
    )
}

export default DisplayReadingPanel




{/* <div className={(props.readingPanelDisplay ? '' : 'd-none') + "col-7"}>
{props.readingPanelDisplay ? '' : 'd-none'} + " */}


// <div className="d-none col-sm-12  vh-100% col-m d-7">
