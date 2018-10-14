import React, {Component} from 'react'

import './index.css'
import Book from './Book.js'

class BookShelf extends Component {

  state = {};

  render() {
    return (<div className="bookshelf flex">
      <h4 className="bookshelf-title text-grey-dark font-normal">
        {this.props.shelf}
      </h4>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book book={this.props.book}/>
        </ol>
      </div>
    </div>);
  }
}
export default BookShelf;
