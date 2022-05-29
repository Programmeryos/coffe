import { Component } from 'react';
import './header.scss';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props)
    }
    
    showContent = (e) => {
        const elements = document.querySelectorAll('.header__list-item');
        
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
    
    render(){
        return (
            <div className="header">
                <div className="header__container">
                    <div className="header__content">
                        <nav>
                            <ul className="header__list">
                                <img src="Logo.svg" alt="logo" className='header__logo'/>
                                <li className="header__list-item" onClick={() => this.props.onChangePage(1)}>Coffee house</li>
                                <li className="header__list-item" onClick={() => this.props.onChangePage(2)}>Our coffee</li>
                                <li className="header__list-item" onClick={this.showContent}>For your pleasure</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;