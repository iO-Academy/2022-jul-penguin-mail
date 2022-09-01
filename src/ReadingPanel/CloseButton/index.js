const CloseButton = (props) => {
    const clickResetView = () => {
        props.setReadingPanelDisplay(false);
    }
    return (
        <div className="d-flex flex-row justify-content-end">
            <button onClick={clickResetView} id="closeButton" type="button"
                    className="btn btn-secondary mt-2 d-md-none">X Close
            </button>
        </div>
    )
}

export default CloseButton
