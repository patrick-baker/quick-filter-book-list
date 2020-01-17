import React, { Component } from 'react';
import './App.css';
import BooksTable from './BooksTable/BooksTable';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BooksTable />
        </header>
      </div>
    );
  }
}

export default App;
