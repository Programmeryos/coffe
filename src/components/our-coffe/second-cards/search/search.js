import { Component } from 'react';
import './search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const searchData = e.target.value.toLowerCase();
        this.setState({term: searchData});
        this.props.onUpdateSearch(searchData);
    }

    render() {
        return (
            <div className="search">
                <label htmlFor="search">Lookiing for</label>
                <input placeholder='start typing here...' ype="text" id='search' onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

export default Search;