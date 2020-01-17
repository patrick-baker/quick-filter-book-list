import React from 'react';
import axios from 'axios';
import FilterSearch from '../FilterSearch/FilterSearch'

const verbose = true; // shows console logs below

class Content extends React.Component {
    state = {
        // bookList upon retrieving query to GoodReads from server
        originalBookList: [],
        // the rendered bookList, which filters through this.state.originalBookList onChange of FilterSearch input
        refinedBookList: [],
        // renders input for new API search when true
        newSearchMode: false,
        // search parameters for new API search
        search: ''
    }

    componentDidMount() {
        let search = 'Software';
        this.pullBooksFromGoodreads(search);
    }

    // request to server for GoodReads query
    pullBooksFromGoodreads = (queryText) => {
        if (verbose) console.log('queryText for booksList request to server', queryText);
        // query text defines search parameters to GoodReads API
        axios.get(`/books/${queryText}`)
            .then(response => {
                if (verbose) console.log('response of bookList from server:', response);
                // sets originalBookList to filter through, and refinedBookList to render
                this.setState({
                    originalBookList: response.data.elements,
                    refinedBookList: response.data.elements,
                    newSearchMode: false
                })
            })
            .catch(error => {
                console.log('error in bookList request to server:', error);
            })
    }

    searchFilter = (string) => {
        if (verbose) console.log('string in searchFilter:', string);
        this.setState({
            refinedBookList: this.state.originalBookList.filter(book =>
                // filter contents apply to book title
                book.elements[8].elements[1].elements[0].text.toLowerCase().includes(string.toLowerCase()) ||
                // filter contents apply to author
                book.elements[8].elements[2].elements[1].elements[0].text.toLowerCase().includes(string.toLowerCase()))
        })
    }

    toggleSearchMode = () => {
        this.setState({
            newSearchMode: !this.state.newSearchMode
        })
    }

    onChangeEventHandler = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log(this.state.search);
    }

    render() {
        return (
            <>
                {/* renders input for new API call */}
                {this.state.newSearchMode &&
                    <div className="search-bar">
                        <label>
                            Search New Books
                            <input 
                                // changes this.state.search for new queryText for API search
                                onChange={(event) => this.onChangeEventHandler(event)} 
                                className="bordered-input"
                            />
                        </label>
                        <button
                            // runs API search with new queryText 
                            onClick={() => this.pullBooksFromGoodreads(this.state.search)}
                            type="button"
                        >
                            Search
                        </button>

                    </div>}
                {/* renders book list and filter  */}
                {!this.state.newSearchMode &&
                    <div>
                        {/* onChange searchFunction filters content according to input */}
                        <div className="new-search" onClick={this.toggleSearchMode}>
                            <i className="fas fa-search"></i>
                            <p>new search</p>
                        </div>
                        {/* input component for filtering search */}
                        <FilterSearch searchFunction={this.searchFilter} label='Filter Books' />
                        <div class="container">
                            <div>
                                {/* maps out filtered bookList */}
                                {this.state.refinedBookList.map((book, i) => (
                                    <div class="book" key={i}>
                                        <div class="cover">
                                            {/* location of cover image in returned json */}
                                            <img src={book.elements[8].elements[3].elements[0].text} />
                                        </div>
                                        <div class="description">
                                            {/* title of returned json book */}
                                            <p class="title">{book.elements[8].elements[1].elements[0].text}</p>
                                            {/* author of returned json book */}
                                            <p class="author">{book.elements[8].elements[2].elements[1].elements[0].text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default Content;