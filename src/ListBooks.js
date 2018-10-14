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
    books: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    query: ''
  };

  updateQuery = (query) => {
  this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  constructor(props) {
    super(props);
    this.defaultState = {
      booksOnShelf: []
    };
    this.state = this.defaultState;
  }
/*
  handleChangeShelf = () => {
    let temp = this.props.booksOnShelf;

    const book = temp.filter(t => t.id === bookId)[0];
    book.shelf = e.target.value;
    BooksAPI.update(book, e.target.value).then(response => {
      this.setState({books: temp});
    });
  };
  */

  render() {
    const {books, onMoveBook} = this.props
    const {query} = this.state

    console.log('Listbook Props', this.props.booksOnShelf)
    return (<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf key="currently" book={this.props.booksOnShelf.filter(booksOnShelf => booksOnShelf.shelf === "currentlyReading")} shelf="Currently Reading"/>
        <BookShelf key="wantToRead" book={this.props.booksOnShelf.filter(book => book.shelf === "wantToRead")} onChangeSelf={this.handleChangeShelf} shelf="Want to Read"/>
        <BookShelf key="read" book={this.props.booksOnShelf.filter(book => book.shelf === "read")} onChangeShelf={this.handleChangeShelf} shelf="Read"/>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>);
  }
}

export default ListBooks;
