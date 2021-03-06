import { Component } from "react";
import CardsItemSecond from "./second-cards-item-second-page";

class CardsList extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    openInfo = (e) => {
        
        const elements = document.querySelectorAll('.second-cards__list__item1');

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
                <CardsItemSecond
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

export default CardsList;