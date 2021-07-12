import React, { Component } from 'react'

class ProductList extends Component {


   componentDidMount(){
       console.log('product list mounted')
   }
//    componentWillMount() {
//     setTimeout(() => { console.log("World!"); }, 2000);
//   }

    render() {
        return (

            <div style={{ margin: '10px' }}>

                {this.props.products.map(item => (
                    <div style={{ margin: '0 auto', border: '1px solid red', textAlign: 'center', padding: '30px', width: '70%' }}
                    onClick={()=>this.props.selectProduct(item)}>
                        <p>{item.prodName}</p>
                        <p>{item.price}</p>

                    </div>
                ))}

            </div>
        );
    }
}


export default ProductList