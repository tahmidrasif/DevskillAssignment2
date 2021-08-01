import logo from './logo.svg';
import './App.css';
import ProductList from './productList';
import ProductDetails from './productDetails';
import React, { Component, useEffect, useState } from 'react';
import gear from './Gear.gif';
import ProductListFn from './productListFn';
import ProductDetailsFn from './productDetailsFn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

function App() {

  const history=useHistory();

  const [productList, setProduct] = useState([
    { id: 1, prodName: 'Laptop', price: 100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
    { id: 2, prodName: 'Pc', price: 200, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
    { id: 3, prodName: 'Mobile', price: 300, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  ]);

  const [singleProduct, setSingleProduct] = useState(null);
  const [productId,setProductId]=useState(null)
  const [showLoader, setShowLoader] = useState(true);

  const selectProduct = (id) => {
    setShowLoader(true)
    //setSingleProduct({ ...singleProduct, singleProduct: item })
    setProductId(id)
    history.push('/product-details/'+id)


  }

  console.log(history)
  const showListPage = () => {
    setShowLoader(true)
    setProductId(null)
    history.push('/')

  }

  useEffect(() => {

    setTimeout(function () { //Start the timer
      setShowLoader(false)
    }.bind(this), 3000)
  }, [productId])

  return (
    <>
      <table>
        <tr>
          <td>
            <Link to='/product-list'>Product List</Link>
          </td>

        </tr>
      </table>

      {
        <Switch>
          <Route exact path='/'>
            {
              showLoader === true ?
                <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
                  <img src={gear} />
                </div> :


                <ProductListFn products={productList} selectProduct={selectProduct} />
            }
          </Route>
          <Route exact path='/product-list' render={() => <Redirect exact to='/' />} />

          <Route exact path='/product-details/:id'>
            {
              showLoader === true ?
                <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
                  <img src={gear} />
                </div> :
                <ProductDetailsFn products={productList} showListPage={showListPage} />
            }
          </Route>

          <Route path='*'>
            <p>404 Not Found</p>
          </Route>
        </Switch>

      }


      {/* <ProductDetailsFn singleProduct={singleProduct} showListPage={showListPage} /> : */}

    </>
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