import React from 'react';
import './App.css';
import BooksTable from './BooksTable/BooksTable';
import FilterSearch from './FilterSearch/FilterSearch';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FilterSearch/>
        <BooksTable/>
      </header>
    </div>
  );
}

export default App;
