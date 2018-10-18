// child component
import React, {Component} from 'react';
import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  constructor(props) {
    super(props);
    //hasThumbnail = this.hasThumbnail.bind(book);
  }

  handleChangeShelf = (event) => {
    console.log('Handle Change Shelf', this.props.book)

    BooksAPI.update(this.props.book, event.target.value).then(response => {
      console.log('Response', response)
    });
    console.log('Select Value', event.target.value)
  };

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
      <BookShelfChanger onChangeShelf={this.handleChangeShelf}/>
    </div>;
  }
}

export default Book;
