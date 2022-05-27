import { Component } from 'react';
import './second-cards.scss';

class CardsItem extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const {src, alt, title, country, price} = this.props;
        return(
            <div className="second-cards__list__item">
                <div className="second-cards__list__item-img">
                    <img src={src} alt={alt} />
                </div>
                <div className="second-cards__list__item-title">
                    {title}
                </div>
                <div className="second-cards__list__item-country">
                    {country}
                </div>
                <div className="second-cards__list__item-price">
                    {price}
                </div>
            </div>
        )
    }
}

export default CardsItem;