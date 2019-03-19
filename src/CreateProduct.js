import React, { Component } from 'react';

import axios from 'axios';

class CreateProduct extends Component {
  state = {
    name: '',
    price: '',
    discount: '',
    availability: 'In Stock',
  };

  onInputChange = event => {
    const type = event.target.name;
    const value = event.target.value;

    this.setState({ [type]: value });
  };

  render() {
    return (
      <form
        onSubmit={event => {
          const product = Object.assign({}, this.state);
          product.price = Number(product.price);
          product.discount = Number(product.discount);
          this.props.onFormSubmit(event, product);
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={this.state.price}
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount %</label>
          <input
            type="text"
            className="form-control"
            name="discount"
            value={this.state.discount}
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability</label>
          <select
            className="form-control"
            name="availability"
            value={this.state.value}
            onChange={this.onInputChange}
          >
            <option>In Stock</option>
            <option>Backordered</option>
            <option>Discontinued</option>
          </select>
        </div>
        <button className="btn btn-primary" style={{ marginTop: '10px' }}>
          Create
        </button>
      </form>
    );
  }
}

export default CreateProduct;
