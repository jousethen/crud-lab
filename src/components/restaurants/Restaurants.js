import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { connect } from 'react-redux'
class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />)
  render() {
    return (
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default connect()(Restaurants);
