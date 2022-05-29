import './about-us.scss';

import Promo from '../../coffe-house/promo/promo';
import OurBest from '../../coffe-house/our-best/our-best';

const bestGoods =[
                {src: 'card.png', alt:'coffe', title: 'Solimo Coffee Beans 2 kg', price: '10.73$', id: 6},
                {src: 'card2.png', alt:'coffe', title: 'Presto Coffee Beans 1 kg', price: '15.99$', id: 7},
                {src: 'coffe.png', alt:'coffe', title: 'AROMISTICO Coffee 1 kg', price: '6.99$', id: 8},
            ]

function AboutUs() {
    return (
                         <div className="first-page">
        <Promo />
        <div className='about-us'>
            <div className="container">
                <div className="title">About Us</div>
                <div className="grains">
                    <div className="divider"></div>
                    <img src="grains-black.svg" alt="grains" className="grains-img"/>
                    <div className="divider"></div>
                </div>
                <div className="about-us__descr">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face. <br/><br /> Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </div>
            </div>
        </div>
        <OurBest data={bestGoods}/>
    </div>
    )
}

export default AboutUs;