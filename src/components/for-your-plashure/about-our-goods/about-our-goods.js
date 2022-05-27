import './about-our-goods.scss';

function AboutGoods() {
    return (
        <div className="about-our-goods">
            <div className="container">
                <div className="about-our-goods__wrapper">
                    <div className="about-our-goods__img">
                        <img src="about-our-goods.png" alt="coffe cup" />
                    </div>
                    <div className="about-our-goods__content">
                        <div className="title">
                            About our goods
                        </div>
                        <div className="grains">
                            <div className="divider"></div>
                            <img src="grains-black.svg" alt="grains" className="grains-img"/>
                            <div className="divider"></div>
                        </div>
                        <div className="about-our-goods__descr">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /> <br />
                            Afraid at highly months do things on at. Situation recommend objection do intention <br />
                            so questions. <br />
                            As greatly removed calling pleased improve an. Last ask him cold feel <br />
                            met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                            is song that held help face. <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="big-divider"></div>
        </div>
    )
}

export default AboutGoods