import React from 'react';


class FilterSearch extends React.Component {

    alterQueryText = (event) => {
        this.props.pullBooksFromGoodreads(event.target.value);
    }

    render() {
        return (
            <input onChange={(event) => this.alterQueryText(event)}></input>
        );
    }
}

export default FilterSearch;