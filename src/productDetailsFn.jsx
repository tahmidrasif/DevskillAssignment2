import React, { Component } from 'react';

 const ProductDetailsFn=({singleProduct,showListPage})=>{
    console.log(singleProduct.item,'===rasif')
        return (

            <div style={{ margin: '10px' }}>


                <div style={{ margin: '0 auto', background: 'gray', border: '1px solid red', textAlign: 'left', padding: '30px', width: '70%' }}>
                    <p>{singleProduct.item?.prodName}</p>
                    <p>{singleProduct.item?.price}</p>
                    <p>{singleProduct.item?.description}</p>

                    <button onClick={showListPage}>Back</button> 
                </div>

         
            </div>
        )
    }

export default ProductDetailsFn