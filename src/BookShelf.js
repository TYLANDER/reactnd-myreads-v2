import React, {Component} from 'react'

import './index.css'
import Book from './Book.js'

class BookShelf extends Component {

  state = {};

  render() {
    const book = 'book';
    return (<div className="bookshelf flex">
      <h4 className="bookshelf-title text-grey-dark font-normal">
        {this.props.shelftitle}
      </h4>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book book={this.props.books.book}/>
        </ol>
      </div>
    </div>);
  }
}
export default BookShelf;
