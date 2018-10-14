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
    BooksAPI.getAll().then((book) => {
      this.setState({book})
    })
  }

  handleChangeShelf = (book : any, shelf : string) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooksOnShelf();
    })
  }

  getBooksOnShelf() {
    BooksAPI.getAll().then(book => {
      this.setState(state => ({
        books: state.books.concat([book])
      }))
    })
  }

  render() {
    console.log('App Props', this.props)
    return (<div className="app">
      <Route path="/" render={() => (<ListBooks onMoveBook={this.handleChangeShelf} booksOnShelf={this.state.books}/>)}/>
      <Route path="/search" render={() => <SearchPage onChangeShelf={this.handleChangeShelf} booksOnShelf={this.state.books}/>}/></div>)
  }
}

export default BooksApp
