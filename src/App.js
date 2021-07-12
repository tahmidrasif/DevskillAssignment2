import logo from './logo.svg';
import './App.css';
import ProductList from './productList';
import ProductDetails from './productDetails';
import React, { Component } from 'react';
import gear from './Gear.gif';

class App extends Component {

  state = {
    prducts: [
      { prodName: 'Laptop', price: 100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
      { prodName: 'Pc', price: 200, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
      { prodName: 'Mobile', price: 300, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
    ],
    currentProduct: null,
    loading: true
  }

  componentDidMount() {

    setTimeout(function () { //Start the timer
      this.setState({ loading: false }) //After 1 second, set render to true
    }.bind(this), 3000)
  }
  componentDidUpdate(){
    setTimeout(function () { //Start the timer
      this.setState({ loading: false }) //After 1 second, set render to true
    }.bind(this), 3000)
  }

  selectProduct = (data) => {

    this.setState({ ...this.state, currentProduct: data, loading: true }, () => {
      console.log(this.state.currentProduct);

    });

  }

  showListPage = (data) => {
    this.setState({ ...this.state, currentProduct: null,loading:true }, () => {
      console.log(this.state.currentProduct);
    });

  }

  render() {

    return (
      <div>
        <>

          {console.log('test--' + this.state.currentProduct)}

          {
            // <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
            //   <img src={gear} />
            // </div>

            this.state.loading ? (
              <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
                <img src={gear} />
              </div>) :
              (this.state.currentProduct
                ? <ProductDetails currentProd={this.state.currentProduct} showListPage={this.showListPage} showLoader={this.showLoader} />
                : <ProductList products={this.state.prducts} selectProduct={this.selectProduct} />)
          }



        </>

      </div>
    );
  }

}

export default App;
