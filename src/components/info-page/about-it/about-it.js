import { Component } from 'react';
import './about-it.scss';


class AboutIt extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }



    render() {
        const {src, alt, country, descr, price} = this.props.infoData;
        return( 
            <div className="about-it">
                <div className="container">
                    <div className="about-it__wrapper">
                        <div className="about-it__img">
                            <img src={src} alt={alt} />
                        </div>
                        <div className="about-it__content">
                            <div className="title">About it</div>
                            <div className="grains">
                                <div className="divider"></div>
                                <img src="grains-black.svg" alt="grains" className="grains-img"/>
                                <div className="divider"></div>
                            </div>
                            <div className="about-it__country"><span>Country: </span> {country}</div>
                            <div className="about-it__descr"><span>Descripton: </span>{descr}</div>
                            <div className="about-it__price"><span>Price: </span>{price}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutIt;