import React from 'react'


const ProductListFn = ({ products,selectProduct }) => {


    return (

        <div style={{ margin: '10px' }}>
            {products.map(item => (
                <div style={{ margin: '0 auto', border: '1px solid red', textAlign: 'center', padding: '30px', width: '70%' }}
                onClick={()=>selectProduct(item)}>
                    <p>{item.prodName}</p>
                    <p>{item.price}</p>
                </div>
            ))}

        </div>

    );
}

export default ProductListFn


{/* <div style={{ margin: '10px' }}>
{props.productList.map(({ item }) => (
    <div style={{ margin: '0 auto', border: '1px solid red', textAlign: 'center', padding: '30px', width: '70%' }}>
        <p>{item.prodName}</p>
        <p>{item.price}</p>

    </div>
))}

</div> */}