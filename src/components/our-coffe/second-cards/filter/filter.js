import { Component } from 'react';
import './filter.scss';

class Filter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }
    
    render() {
        const btnsData = [
            {name: 'Brazil'},
            {name: 'Kenya'},
            {name: 'Columbia'}
        ];

        const buttons = btnsData.map(({name}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'active' : 'pasive';
            return (
                <button
                    className={`filter-btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}>
                        {name}
                </button>
            )
        })

        return (
            <div className="filter">
                <div className="filter__text" onClick={() => {this.props.onFilterSelect('all')}}>
                    Or filter
                </div>
                <div className="filter__btns">
                    {buttons}
                </div>
            </div>
        )
    }
}

export default Filter;