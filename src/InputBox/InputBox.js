const InputBox = () => {
    return (
        <card class="col-lg-4">
        <form>
            <div>
                <input
                    type="email"
                    placeholder="To"
                    name="To"
                    class="col-lg-12"
                    required
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Subject"
                    name="Subject"
                    class="col-lg-12"
                    required
                />
            </div>
            <div>
        <textarea
            placeholder="Your message"
            name="message"
            class="col-lg-12"
            required
        />
            </div>
            <div>
                <button type="submit" class="btn btn-secondary">
                    Cancel
                </button>
                <button type="submit" class="btn btn-success">
                    Send
                </button>
            </div>
        </form>
        </card>
    )
}

export default InputBox