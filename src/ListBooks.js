import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import Book from './Book'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListBooks extends Component {
  static propTypes = {
    booksOnShelf: PropTypes.array,
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    query: ''
  };

  // updateQuery = (query) => {
  //   this.setState({query: query.trim()})
  // }
  //
  // clearQuery = () => {
  //   this.setState({query: ''})
  // }

  // constructor(props) {
  //   super(props);
  //   this.defaultState = {
  //     booksOnShelf: []
  //   };
  //   this.state = this.defaultState;
  // }

  // componentDidUpdate(prevProps) {
  //   console.log('this.props', this.props)
  //   console.log('prevProps', prevProps)
  // }

  render() {
    const {books, onMoveBook} = this.props
    const {query} = this.state

    const currentlyReadingBooks = this.props.booksOnShelf.filter(book => book.shelf === "currentlyReading");
    const wantToReadBooks = this.props.booksOnShelf.filter(book => book.shelf === "wantToRead");
    const readBooks = this.props.booksOnShelf.filter(book => book.shelf === "read");

    console.log('currentlyReadingBooks', currentlyReadingBooks)
    console.log('wantToReadBooks', wantToReadBooks)

    console.log('Listbook Props', this.props)
    return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf key="currently" books={currentlyReadingBooks} shelf="Currently Reading"/>
        <BookShelf key="wantToRead" books={wantToReadBooks} shelf="Want to Read"/>
        <BookShelf key="read" books={readBooks} shelf="Read"/>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>;
  }
}

export default ListBooks;
