

function BestCardItem({src, alt, title, price}) {
    return(
        <div className="our-best__card">
            <div className="our-best__card-img">
                <img src={src} alt={alt} />
            </div>
            <div className="our-best__card-title">{title}</div>
            <div className="our-best__card-price">{price}</div>
        </div>
    )
}

export default BestCardItem;