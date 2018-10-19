import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks.js'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      screen: 'search'
    };
  }

  componentDidMount() {
    this.loadBooks()
  }

  handleChangeShelf = (event, book) => {
    console.log('Handle Change Shelf', this.props.book)

    BooksAPI.update(book, event.target.value).then(books => {
      console.log('Response', books)
      this.loadBooks()
    });
    console.log('Select Value', event.target.value)
  }

  loadBooks() {
    BooksAPI.getAll().then((books) => {
      console.log('All books: ', books);
      this.setState({books})
    })
  }

  render() {
    console.log('App Props', this.props)
    console.log('App state', this.state)
    return (<div className="app">
      <Route path="/" render={() => (<ListBooks handleChangeShelf={this.handleChangeShelf} booksOnShelf={this.state.books}/>)}/>
      <Route path="/search" render={() => <SearchPage handleChangeShelf={this.handleChangeShelf} booksOnShelf={this.state.books}/>}/>
    </div>)
  }
}

export default BooksApp
