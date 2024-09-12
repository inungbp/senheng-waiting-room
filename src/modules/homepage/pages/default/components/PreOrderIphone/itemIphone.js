const ItemIphone = (props) => {
    const {
        imageUrl,
        handlePhoneSelection,
        buttonDisabled,
        color,
        title,
        price,
        memory,
        urlIphone,
    } = props;

    return (
        <div className="card card-wrapper">
            <div className="card-wrapper__image">
                <img
                    src={imageUrl}
                    className="img-fluid rounded-lg-start"
                    alt="..."
                />
            </div>
            <div className="card-wrapper__desc">
                <h5 className="card-title font-weight-bold mb-4">{title}</h5>
                <div className="spacing-mobile" />
                <p className="card-text prod-desc mb-0">{price}</p>
                <p className="card-text prod-desc mb-0">{memory}</p>
                <div className="d-flex mb-4 justfiy-content-center color-picker">
                    {
                        color.map((item, idx) => (
                            <div key={idx} className={item} />
                        ))
                    }
                </div>
                <p className="desc mb-0">Pre-order starting 13 Sept, 8PM.</p>
                <p className="desc mb-0">Available starting 20 Sept.</p>
                <button
                    disabled={buttonDisabled}
                    className={buttonDisabled ? 'dialog-button-disabled' : 'dialog-button'}
                    onClick={() => handlePhoneSelection(urlIphone)}
                >
                    {buttonDisabled ? 'COMING SOON' : 'PRE-ORDER NOW'}
                </button>
            </div>
        </div>
    )
}

export default ItemIphone;
