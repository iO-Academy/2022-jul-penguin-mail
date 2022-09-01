const CloseButton = (props) => {
    const closeReadingPanel = () => {
        props.setReadingPanelDisplay(false);
    }
    return (
        <div className="d-flex flex-row justify-content-end">
            <button onClick={closeReadingPanel} id="closeButton" type="button"
                    className="btn btn-secondary mt-2 d-md-none">
                Close
            </button>
        </div>
    )
}

export default CloseButton
