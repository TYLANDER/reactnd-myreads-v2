// child component
import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  render() {
    console.log('book this.props', this.props)
    const {title, authors, imageLinks} = this.props.book

    return <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageLinks.thumbnail}")`
          }}></div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
      <BookShelfChanger shelf={this.props.book.shelf} handleChangeShelf={(event) => this.props.handleChangeShelf(event, this.props.book)}/>
    </div>;
  }
}

export default Book;
