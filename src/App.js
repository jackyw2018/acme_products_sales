import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Nav from './Nav';
import CreateProduct from './CreateProduct';
import Products from './Products';

class App extends Component {
  state = {
    products: [],
    sales: [],
    errorMsg: '',
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/products')
      .then(res => {
        const products = res.data;
        const sales = products.filter(product => product.discount > 0);

        this.setState({
          products,
          sales,
        });
      })
      .catch(() => this.setState({ errorMsg: 'Error: Data download failure' }));
  }

  handleDeleteClick = productId => {
    axios
      .delete(`http://localhost:3000/api/products/${productId}`)
      .then(() => {
        const products = this.state.products.filter(
          product => product.id !== productId
        );
        const sales = this.state.sales.filter(
          product => product.id !== productId
        );
        this.setState({ products, sales });
      })
      .catch(error => console.log(error));
  };

  handleFormSubmit = (event, product) => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/api/products', product)
      .then(res => {
        const products = this.state.products.slice();
        products.push(res.data);

        const sales = products.filter(productElem => productElem.discount > 0);
        this.setState({ products, sales });
      })
      .catch(() =>
        this.setState({ errorMsg: 'Error occured when form is submitted' })
      );
  };

  render() {
    return (
      <Router>
        <div className="container">
          <h1> Acme Products/Sales</h1>
          <Nav
            productsLength={this.state.products.length}
            salesLength={this.state.sales.length}
          />
          <Switch>
            <Route exact path="/" render={() => <h2>Welcome!!</h2>} />
            <Route
              exact
              path="/products"
              render={() => {
                return (
                  <Products
                    products={this.state.products}
                    onDeleteClick={this.handleDeleteClick}
                  />
                );
              }}
            />
            <Route
              path="/products/sales"
              render={() => (
                <Products
                  products={this.state.sales}
                  onDeleteClick={this.handleDeleteClick}
                />
              )}
            />
            <Route
              path="/products/create"
              render={() => {
                return <CreateProduct onFormSubmit={this.handleFormSubmit} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
