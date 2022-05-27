import './promo.scss';

function Promo() {
    return (
        <div className="promo">
            <div className="container">
                <div className="promo__wrapper">
                    <div className="promo__header">Everything You Love About Coffee</div>
                    <div className="grains">
                        <div className="divider"></div>
                        <img src="grains.svg" alt="grains" className="grains-img"/>
                        <div className="divider"></div>
                    </div>
                    <div className="promo__descr">We makes every day full of energy and taste</div>
                    <div className="promo__descr promo__descr-2">Want to try our beans?</div>
                    <button className="promo__btn">More</button>
                </div>
            </div>
        </div>
    )
}

export default Promo;