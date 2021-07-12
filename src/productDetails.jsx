import React, { Component } from 'react';

class ProductDetails extends Component {

    componentDidMount(){
        console.log('product detals mounted')
        
    }
    render() {
        return (

            <div style={{ margin: '10px' }}>


                <div style={{ margin: '0 auto', background: 'gray', border: '1px solid red', textAlign: 'left', padding: '30px', width: '70%' }}>
                    <p>{this.props.currentProd?.prodName}</p>
                    <p>{this.props.currentProd?.price}</p>
                    <p>{this.props.currentProd?.description}</p>

                    <button onClick={this.props.showListPage}>Back</button> 
                </div>

         
            </div>
        )

    }
}

export default ProductDetails