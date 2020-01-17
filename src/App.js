import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import BooksTable from './BooksTable/BooksTable';
import FilterSearch from './FilterSearch/FilterSearch';



class App extends Component {
  state = {
    bookList: [],
  }

  pullBooksFromGoodreads = (queryText) => {
    console.log('queryText for booksList request to server', queryText);
    axios.get(`/books/${queryText}`)
    .then(response => {
        console.log('response of bookList from server:', response);
        this.setState({
          bookList: response
        })
    })
    .catch(error => {
      console.log('error in bookList request to server:', error);
    })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FilterSearch pullBooksFromGoodreads={this.pullBooksFromGoodreads}/>
          <BooksTable bookList={this.state.bookList}/>
        </header>
      </div>
    );
  }
}

export default App;
