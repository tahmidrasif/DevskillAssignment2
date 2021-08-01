import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useParams
  } from "react-router-dom";

const ProductDetailsFn = ({ products, showListPage }) => {
   

    const params= useParams();
    console.log(params.id, '===rasif')
    var item = products.filter(function (obj) { 
        console.log(obj.id,'===obj')
        return obj.id==params.id; 
    })[0];

    //console.log(products,'===products')
   //console.log(item)
    return (

        
        <div style={{ margin: '10px' }}>


            <div style={{ margin: '0 auto', background: 'gray', border: '1px solid red', textAlign: 'left', padding: '30px', width: '70%' }}>
                <p>{item?.prodName}</p>
                <p>{item?.price}</p>
                <p>{item?.description}</p>

                <button onClick={showListPage}>Back</button> 
            </div>


        </div>
    )
}

export default ProductDetailsFn