import React from 'react';
import axios from 'axios';
import FilterSearch from '../FilterSearch/FilterSearch'

const verbose = true; // shows console logs below

class BooksTable extends React.Component {
    state = {
        // bookList upon retrieving query to GoodReads from server
        originalBookList: [],
        // the rendered bookList, which filters through this.state.originalBookList onChange of FilterSearch input
        refinedBookList: []
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
                    refinedBookList: response.data.elements
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

    render() {
        return (
            <>
                {/* onChange searchFunction filters content according to input */}
                <FilterSearch searchFunction={this.searchFilter} label='Filter Books'/>
                    <div class="container">
                        <div>
                            {this.state.refinedBookList.map((book, i) => (
                                <div class="book" key={i}>
                                    <div class="cover">
                                        <img src= {book.elements[8].elements[3].elements[0].text}/>
                                    </div>
                                    <div class="description">
                                        <p class="title">{book.elements[8].elements[1].elements[0].text}</p>
                                        <p class="author">{book.elements[8].elements[2].elements[1].elements[0].text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                {/* <pre>{JSON.stringify(this.state.refinedBookList, null, 2)}</pre> */}
            </>
        );
    }
}

export default BooksTable;