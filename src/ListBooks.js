import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    booksOnShelf: PropTypes.array,
    onMoveBook: PropTypes.func.isRequired
  }

  state = {
    query: ''
  };

  render() {
    //const {books, onMoveBook} = this.props
    //  const {query} = this.state

    const currentlyReadingBooks = this.props.booksOnShelf.filter(book => book.shelf === "currentlyReading");
    const wantToReadBooks = this.props.booksOnShelf.filter(book => book.shelf === "wantToRead");
    const readBooks = this.props.booksOnShelf.filter(book => book.shelf === "read");

    return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf key="currently" books={currentlyReadingBooks} shelf="Currently Reading" handleChangeShelf={this.props.handleChangeShelf}/>
        <BookShelf key="wantToRead" books={wantToReadBooks} shelf="Want to Read" handleChangeShelf={this.props.handleChangeShelf}/>
        <BookShelf key="read" books={readBooks} shelf="Read" handleChangeShelf={this.props.handleChangeShelf}/>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>;
  }
}

export default ListBooks;
