import { Component } from "react";
import CardsItem from "./second-cards-item";

class CardsList extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    openInfo = (e) => {
        const elements = document.querySelectorAll('.second-cards__list__item');
        let count = 0;

        elements.forEach((item, i) => {
            if (e.target === item) {
                count = i;
            }
        })

        //Знизу хитро-мудра схема 

        if (count > 5) {
            count -= 6;
        }

        this.props.setInfoData(count);

    }

    render() {
        const {data} = this.props;

        const elements = data.map(item => {
            const {id, ...itemProps} = item;
    
            return (
                <CardsItem
                    key={id}
                    {...itemProps}
                    openInfo={this.openInfo}/>
            )
        })
    
        return (
            <div className="second-cards__list" onClick={this.openInfo}>
                {elements}       
            </div>
        )
    }
}

export default CardsList;