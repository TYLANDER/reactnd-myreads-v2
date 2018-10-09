// child component
import React, {Component} from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    let book = this.props.book;
    hasThumbnail = this.hasThumbnail.bind(book);
  }
  render() {
    return (<div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${hasThumbnail}")`
          }}></div>
        <p>
          {this.props.book}
          {this.props.moveBook}
          {this.props.book.shelf}
        </p>
      </div>
      <div className="book-title">{this.props.book.title}</div>
      <div className="book-authors">{this.props.book.authors}</div>
    </div>);
  }
}

export default Book;
