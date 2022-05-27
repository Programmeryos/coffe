import BestCardList from './cards/our-best-card-list';
import './our-best.scss';

function OurBest({data}) {
    
    return (
        <div className="our-best">
            <div className="container">
                <div className="title">Our best</div>
                <BestCardList
                    data={data}/>
            </div>
        </div>
    )
}

export default OurBest;