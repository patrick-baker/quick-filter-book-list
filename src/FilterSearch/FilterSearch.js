import React from 'react';


class FilterSearch extends React.Component {

    render() {
        return (
            <input onChange={(event) => this.props.searchFunction(event.target.value)}></input>
        );
    }
}

export default FilterSearch;