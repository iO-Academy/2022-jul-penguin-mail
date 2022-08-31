import "./InputBox.css"

const InputBox = () => {
    return (
        <card id="inputBox" class="col-lg-6 border container bg-white pb-2 pl-3">
        <form>
            <div>
                <input
                    id="formBox"
                    type="email"
                    placeholder="To"
                    name="To"
                    class="col-lg-12 m-2"
                    required
                />
            </div>
            <div>
                <input
                    id="formBox"
                    type="text"
                    placeholder="Subject"
                    name="Subject"
                    class="col-lg-12 m-2"
                    required
                />
            </div>
            <div>
        <textarea
            id="formBox"
            placeholder="Your message"
            name="message"
            class="col-lg-12 m-2"
            required
        />
            </div>
            <div id="formButton" class="col-lg-12">
                <button type="submit" className="btn btn-success float-right ml-1">
                    Send
                </button>
                <button type="submit" class="btn btn-secondary float-right">
                    Cancel
                </button>
            </div>
        </form>
        </card>
    )
}

export default InputBox