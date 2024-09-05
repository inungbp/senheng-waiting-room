const ItemIphone = (props) => {
    const {
        imageUrl,
        handlePhoneSelection,
        buttonDisabled,
        color,
        title,
        price,
        memory
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
                        color.map((item) => (
                            <div className={item} />
                        ))
                    }
                </div>
                <button
                    disabled={buttonDisabled}
                    className={buttonDisabled ? 'dialog-button-disabled' : 'dialog-button'}
                    onClick={() => handlePhoneSelection('apple-iphone-16-pro')}
                >
                    {buttonDisabled ? 'COMING SOON' : 'PRE-ORDER NOW'}
                </button>
            </div>
        </div>
    )
}

export default ItemIphone;
