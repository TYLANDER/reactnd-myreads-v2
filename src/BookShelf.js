import React, {Component} from 'react'

import './index.css'
import Book from './Book.js'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {};

  render() {
    console.log('book shelf props: ', this.props)

    const {books, shelf} = this.props
    if (books == null) 
      return null

    const newArrayOfBooks = books.map(book => {

      return <Book book={book} key={book.title} handleChangeShelf={this.props.handleChangeShelf}/>
    })

    return (<div className="bookshelf flex">
      <h4 className="bookshelf-title text-grey-dark font-normal">
        {shelf}
      </h4>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {newArrayOfBooks}
        </ol>
      </div>
    </div>);
  }
}
export default BookShelf;
