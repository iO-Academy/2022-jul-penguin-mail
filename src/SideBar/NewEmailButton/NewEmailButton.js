import './NewEmailButton.css'

const NewEmailButton = (props) => {
    const toggleInput = () => {
        props.setIsNewEmailHidden(!props.isNewEmailHidden)
    }
    return (
        <div>
            <button onClick={toggleInput} id="newEmailButton" type="button" href="#" class="btn btn-info w-100 text-left btn-primary:success" >New Email</button>
        </div>
    )
}

export default NewEmailButton