import React, { Component } from 'react';
import Products from './products';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div className="justify-content-center w-100">
        <Header />
        <Products />
      </div>
    );
  }
}
