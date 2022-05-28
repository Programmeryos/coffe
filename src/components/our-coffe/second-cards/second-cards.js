import { Component } from 'react';

import './second-cards.scss';
import Search from './search/search';
import Filter from './filter/filter';
import CardsList from './second-cars-list';

class SecondCards extends Component {
    constructor (props){
        super(props);
        this.state = {
            term: '',
            filter: 'all'
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    searchCard = (items, term) => {
        if (!term.length) {
            return items;
        }

        return items.filter(item => {
            return item.title.toLowerCase().indexOf(term) > -1;
        })
    }

    filterCards = (items, filter) => {
        switch(filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil')
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya')
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia')
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data} = this.props;
        const {filter, term} = this.state;
        const visibleData = this.filterCards(this.searchCard(data, term), filter);

        return(
            <div className="second-cards">
                <div className="container">
                    <div className="second-cards__filters">
                        <Search
                            onUpdateSearch={this.onUpdateSearch}/>
                        <Filter
                            onFilterSelect={this.onFilterSelect}
                            filter={filter}/>
                    </div>
                    <CardsList
                            setInfoData={this.props.setInfoData}
                            data={visibleData}/>
                </div>
            </div>
    )
    }
}

export default SecondCards;