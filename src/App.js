import logo from './logo.svg';
import './App.css';
import ProductList from './productList';
import ProductDetails from './productDetails';
import React, { Component, useEffect, useState } from 'react';
import gear from './Gear.gif';
import ProductListFn from './productListFn';
import ProductDetailsFn from './productDetailsFn';

function App() {

  const [productList, setProduct] = useState([
    { prodName: 'Laptop', price: 100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
    { prodName: 'Pc', price: 200, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
    { prodName: 'Mobile', price: 300, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  ]);

  const [singleProduct, setSingleProduct] = useState();
  const [showLoader, setShowLoader] = useState(true);

  const selectProduct = (item) => {
    setShowLoader(true)
    setSingleProduct({ ...singleProduct, item })

  }

  const showListPage = () => {
    setShowLoader(true)
    setSingleProduct()

  }

 console.log(showLoader)

  useEffect(() => {
    console.log('useEffect')
    setTimeout(function () { //Start the timer
      setShowLoader(false)
    }.bind(this), 3000)
  }, [singleProduct])

  return (
    <p>
      {
        showLoader === true ?
          <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
            <img src={gear} />
          </div> :
     (singleProduct ?
        <ProductDetailsFn singleProduct={singleProduct} showListPage={showListPage} /> :
        <ProductListFn products={productList} selectProduct={selectProduct} />)
      }



    </p>
  );
}



export default App;





// class App extends Component {

//   state = {
//     prducts: [
//       { prodName: 'Laptop', price: 100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
//       { prodName: 'Pc', price: 200, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
//       { prodName: 'Mobile', price: 300, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
//     ],
//     currentProduct: null,
//     loading: true
//   }

//   componentDidMount() {

//     setTimeout(function () { //Start the timer
//       this.setState({ loading: false }) //After 1 second, set render to true
//     }.bind(this), 3000)
//   }
//   componentDidUpdate(){
//     setTimeout(function () { //Start the timer
//       this.setState({ loading: false }) //After 1 second, set render to true
//     }.bind(this), 3000)
//   }

//   selectProduct = (data) => {

//     this.setState({ ...this.state, currentProduct: data, loading: true }, () => {
//       console.log(this.state.currentProduct);

//     });

//   }

//   showListPage = (data) => {
//     this.setState({ ...this.state, currentProduct: null,loading:true }, () => {
//       console.log(this.state.currentProduct);
//     });

//   }

//   render() {

//     return (
//       <div>
//         <>

//           {console.log('test--' + this.state.currentProduct)}

//           {
//             // <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
//             //   <img src={gear} />
//             // </div>

//             this.state.loading ? (
//               <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
//                 <img src={gear} />
//               </div>) :
//               (this.state.currentProduct
//                 ? <ProductDetails currentProd={this.state.currentProduct} showListPage={this.showListPage} showLoader={this.showLoader} />
//                 : <ProductList products={this.state.prducts} selectProduct={this.selectProduct} />)
//           }



//         </>

//       </div>
//     );
//   }

// }