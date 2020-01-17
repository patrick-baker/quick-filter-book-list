import React from 'react';
import axios from 'axios';
import FilterSearch from '../FilterSearch/FilterSearch'


class BooksTable extends React.Component {
    state = {
        originalBookList: [],
        refinedBookList: []
      }
    componentDidMount() {
        let search = 'Awesome';
        this.pullBooksFromGoodreads(search);
    }

    pullBooksFromGoodreads = (queryText) => {
        console.log('queryText for booksList request to server', queryText);
        axios.get(`/books/${queryText}`)
        .then(response => {
            console.log('response of bookList from server:', response);
            this.setState({
              originalBookList: response.data.elements,
              refinedBookList: response.data.elements
            })
        })
        .catch(error => {
          console.log('error in bookList request to server:', error);
        })
    }

    render() {
        return (
            <>
            <FilterSearch />
            <table>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.refinedBookList.map((book, i) => (
                    <tr key = {i}> 
                        <td>{book.elements[8].elements[1].elements[0].text}</td>
                        <td>{book.elements[8].elements[2].elements[1].elements[0].text}</td>
                        <td><img src={book.elements[8].elements[3].elements[0].text}/></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <pre>{JSON.stringify(this.state.refinedBookList, null, 2)}</pre>
        </>
        );
    }
}

export default BooksTable;