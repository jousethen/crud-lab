import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    this.state = {
      text: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({ text: '' })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
