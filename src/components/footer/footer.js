import { Component } from 'react';
import './footer.scss';

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    showContent = (e) => {
        const elements = document.querySelectorAll('.footer__list-item');
        
        const target = e.target;

        elements.forEach((item, i) => {
            if (target === item) {
                if (i === 0) {
                    document.querySelector('.first-page').style.display = 'block';
                    document.querySelector('.second-page').style.display = 'none';
                    document.querySelector('.third-page').style.display = 'none';
                    document.querySelector('.info-page').style.display = 'none';
                } else if (i === 1) {
                    document.querySelector('.second-page').style.display = 'block';
                    document.querySelector('.first-page').style.display = 'none';
                    document.querySelector('.third-page').style.display = 'none';
                    document.querySelector('.info-page').style.display = 'none';
                } else {
                    document.querySelector('.third-page').style.display = 'block';
                    document.querySelector('.first-page').style.display = 'none';
                    document.querySelector('.second-page').style.display = 'none';
                    document.querySelector('.info-page').style.display = 'none';
                }
            }
        });
    }

    render() {
        return (
            <section className="footer">
                <div className="container">
                    <nav>
                        <ul className="footer__list">
                            
                            <li className="footer__list-item" onClick={this.showContent} >Coffee house</li>
                            <li className="footer__list-item" onClick={this.showContent} >Our coffee</li>
                            <li className="footer__list-item" onClick={this.showContent} >For your pleasure</li>
                        </ul>
                    </nav>
    
                    <div className="grains">
                        <div className="divider"></div>
                        <img src="grains-black.svg" alt="grains" className="grains-img"/>
                        <div className="divider"></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;