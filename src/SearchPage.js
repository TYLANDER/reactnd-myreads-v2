import React, {Component} from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import DebounceInput from 'react-debounce-input'

class SearchPage extends Component {
  // static propTypes = {
  //   books: PropTypes.object.isRequired,
  //   onChangeShelf: PropTypes.func.isRequired,
  //   searchResults: PropTypes.array.isRequired
  // }

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({query})
    this.searchForBooks(query);
  }

  searchForBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchResults) => {
        searchResults.error
          ? this.setState({searchResults: []})
          : this.setState({searchResults});
      })
    } else {
      this.setState({searchResults: []})
    }
  }

  render() {
    const {books, onChangeShelf} = this.props
    console.log('State: ', this.state)
    const newArrayOfSearchResults = this.state.searchResults.map(searchedBook => {
      const matchingBook = this.props.booksOnShelf.filter(bookWithShelf => bookWithShelf.id === searchedBook.id)[0]
      console.log('matchingBook', matchingBook)
      if (matchingBook == null) 
        return null

      searchedBook.shelf = matchingBook.shelf
      return <Book book={searchedBook} key={searchedBook.id} handleChangeShelf={this.props.handleChangeShelf}/>
    })

    const {query} = this.state
    return (<div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/">Close</a>
        <div className="search-books-input-wrapper">
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */
          }
          <DebounceInput type='text' placeholder='Search contacts' value={query} debounceTimeout={250} onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {newArrayOfSearchResults}
        </ol>
      </div>
    </div>)
  }
}

export default SearchPage;
