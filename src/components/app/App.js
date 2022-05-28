import { Component } from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';

import Promo from '../coffe-house/promo/promo';
import AboutUs from '../coffe-house/about-us/about-us';
import OurBest from '../coffe-house/our-best/our-best';


import SecondPromo from '../our-coffe/second-promo/second-promo';
import Beans from '../our-coffe/beans/beans';
import SecondCards from '../our-coffe/second-cards/second-cards';

import ThirdPromo from '../for-your-plashure/for-your-plashuure__promo/for-your-plashure__promo';
import AboutGoods from '../for-your-plashure/about-our-goods/about-our-goods';
import CardsList from '../our-coffe/second-cards/second-cars-list';

import AboutIt from '../info-page/about-it/about-it';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {src: "coffe.png", alt: "coffe", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: 1, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!'},
                {src: "coffe.png", alt: "coffe", title: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$", id: 2, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!'},
                {src: "coffe.png", alt: "coffe", title: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$", id: 3, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!'},
                {src: "coffe.png", alt: "coffe", title: "LATE Coffee 1 kg", country: "Brazil", price: "6.99$", id: 4, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!'},
                {src: "coffe.png", alt: "coffe", title: "CAPUCHINO Coffee 1 kg", country: "Brazil", price: "6.99$", id: 5, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!'},
                {src: "coffe.png", alt: "coffe", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: 6, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!'}
            ],
            bestGoods: [
                {src: 'card.png', alt:'coffe', title: 'Solimo Coffee Beans 2 kg', price: '10.73$', id: 7},
                {src: 'card2.png', alt:'coffe', title: 'Presto Coffee Beans 1 kg', price: '15.99$', id: 8},
                {src: 'coffe.png', alt:'coffe', title: 'AROMISTICO Coffee 1 kg', price: '6.99$', id: 9},
            ],
            infoData: []
        }
    }

    setInfoData = (e) => {
        document.querySelector('.second-page').style.display = 'none';
        document.querySelector('.first-page').style.display = 'none';
        document.querySelector('.third-page').style.display = 'none';
        document.querySelector('.info-page').style.display = 'block';    
        this.setState({infoData: this.state.data[e]})
    }

    goToBeans = () => {
        document.querySelector('.second-page').style.display = 'block';
        document.querySelector('.first-page').style.display = 'none';
    }

    render() {

        return (
            <div className="app">
                <Header/>
                <div className="first-page">
                    <Promo 
                        goToBeans={this.goToBeans}/>
                    <AboutUs/>
                    <OurBest  data={this.state.bestGoods}/>
                </div>

                <div className="second-page">
                    <SecondPromo/>
                    <Beans/>
                    <SecondCards
                        data={this.state.data}
                        setInfoData={this.setInfoData} />
                </div>

                <div className="third-page">
                    <ThirdPromo/>
                    <AboutGoods/>
                    <CardsList setInfoData={this.setInfoData}
                        data={this.state.data}/>
                </div>

                <div className="info-page">
                    <SecondPromo/>
                    <AboutIt infoData={this.state.infoData}/>
                </div>
                <Footer/>
            </div>
        )
    }   
}

export default App;
