import { Component } from "react";
import CardsItemThird from "./second-cards-item-third-page";

class CardsListThird extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    openInfo = (e) => {
        
        const elements = document.querySelectorAll('.second-cards__list__item');

        elements.forEach((item, i)=> {
            if (e.currentTarget === item) {
                this.props.setInfoData(this.props.data[i]);
            }
        })

        
    }

    render() {
        const {data} = this.props;

        const elements = data.map(item => {
            const {id, ...itemProps} = item;
    
            return (
                <CardsItemThird
                    key={id}
                    {...itemProps}
                    openInfo={this.openInfo}/>
            )
        })
    
        return (
            <div className="second-cards__list">
                {elements}       
            </div>
        )
    }
}

export default CardsListThird;