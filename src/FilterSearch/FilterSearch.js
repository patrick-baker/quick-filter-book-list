import React from 'react';


class FilterSearch extends React.Component {

    render() {
        return (
            <label>
                {this.props.label}
                <input 
                className="bordered-input" 
                onChange={(event) => this.props.searchFunction(event.target.value)}
                ></input>
            </label> 
        );
    }
}

export default FilterSearch;