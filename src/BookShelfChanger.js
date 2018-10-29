import React, {Component} from 'react';
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  static propTypes = {
    handleChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const {handleChangeShelf} = this.props
    return <div>
      <select value={this.props.shelf} onChange={(event) => handleChangeShelf(event)}>
        <option value="move" disabled="disabled">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  }
}
export default BookShelfChanger
