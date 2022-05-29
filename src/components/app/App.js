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
import CardsListThird from '../for-your-plashure/second-cars-list';

import AboutIt from '../info-page/about-it/about-it';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {src: "coffe.png", alt: "coffe", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: 0, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!', class: "second-cards__list__item"},
                {src: "coffe.png", alt: "coffe", title: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$", id: 1, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!', class: "second-cards__list__item"},
                {src: "coffe.png", alt: "coffe", title: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$", id: 2, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!', class: "second-cards__list__item"},
                {src: "coffe.png", alt: "coffe", title: "LATE Coffee 1 kg", country: "Brazil", price: "6.99$", id: 3, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!', class: "second-cards__list__item"},
                {src: "coffe.png", alt: "coffe", title: "CAPUCHINO Coffee 1 kg", country: "Brazil", price: "6.99$", id: 4, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!', class: "second-cards__list__item"},
                {src: "coffe.png", alt: "coffe", title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: 5, descr:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, facere repellendus aliquam adipisci, quae recusandae esse officiis commodi dolorem neque harum iure ex, nulla explicabo consequuntur exercitationem modi quisquam labore!', class: "second-cards__list__item"}
            ],
            bestGoods: [
                {src: 'card.png', alt:'coffe', title: 'Solimo Coffee Beans 2 kg', price: '10.73$', id: 6},
                {src: 'card2.png', alt:'coffe', title: 'Presto Coffee Beans 1 kg', price: '15.99$', id: 7},
                {src: 'coffe.png', alt:'coffe', title: 'AROMISTICO Coffee 1 kg', price: '6.99$', id: 8},
            ],
            infoData: [],
            activePage: 1
        }
    }

    setInfoData = (e) => {
        document.querySelector('.second-page').style.display = 'none';
        document.querySelector('.first-page').style.display = 'none';
        document.querySelector('.third-page').style.display = 'none';
        document.querySelector('.info-page').style.display = 'block';  
        
        this.setState({infoData: e})
    }

    goToBeans = () => {
        document.querySelector('.second-page').style.display = 'block';
        document.querySelector('.first-page').style.display = 'none';
    }

    changePage = (pageNumber) => {
        console.log('pageNumber', pageNumber)
        this.setState({
            activePage: pageNumber
        })
    }

    render() {

        const {activePage} = this.state

        return (
            <div className="app">
                <Header onChangePage={this.changePage}/>

                {activePage ===1 && <AboutUs/>}

              {activePage ===2 && ( 
                    <div className="second-page">
                        <SecondPromo/>
                        <Beans/>
                        <SecondCards
                            data={this.state.data}
                            setInfoData={ () => this.changePage(2)} />
                    </div>

              )}

                {activePage ===3 && ( 

                    <div className="third-page">
                        <ThirdPromo/>
                        <AboutGoods/>
                        <CardsListThird setInfoData={this.setInfoData}
                            data={this.state.data}/>
                    </div>
                )}

               
                {activePage ===4 && ( 
                    <div className="info-page">
                        <SecondPromo/>
                        <AboutIt infoData={this.state.infoData}/>
                    </div>
                )}
             
                <Footer/>
            </div>
        )
    }   
}

export default App;
