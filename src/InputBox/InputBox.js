import "./InputBox.css"
import {useState} from "react";

const InputBox = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        if (message) {
            setError(error.concat(message));
        }
        setMessage('');
        event.preventDefault();
    };

    return (
        <card id="inputBox" class="col-lg-6 offset-lg-1 col-md-7 offset-md-2 col-sm-12 col-xs-12 border container bg-white p-4 pr-5">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        id="formBox"
                        type="email"
                        placeholder="To"
                        name="To"
                        className="col-lg-12 m-4 border"
                        onChange={handleChange}
                        required
                    />
                    {error && <p className={"text-center"} style={{color: 'red'}}>{error}</p>}
                </div>
                <div>
                    <input
                        id="formBox"
                        type="text"
                        placeholder="Subject"
                        name="Subject"
                        className="col-lg-12 m-4 border"
                        required
                    />
                </div>
            <div>
        <textarea
            id="formBox"
            placeholder="Your message"
            name="message"
            className="col-lg-12 m-4 border"
            required
        />
                </div>
                <div id="formButton" className="col-lg-12">
                    <button type="submit" className="btn btn-success float-right ml-1">
                        Send
                    </button>
                    <button type="submit" className="btn btn-secondary float-right">
                        Cancel
                    </button>
                </div>
            </form>
        </card>
    )
}

export default InputBox