import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./products.css"

function Products() {
  const [productItems, setProductItems] = useState([])
  const [statusNote, setStatusNote] = useState("")
  const url = 'https://fakerapi.it/api/v1/products?_quantity=10'

  useEffect(() => {
    axios.get(url)
    .then(response => {
      console.log(response)
      if(response.status === 200){
        setStatusNote("")
        setProductItems(response.data.data)
      }else{
        setStatusNote("Error while loading data, please refresh the page")
      }
    })

  }, [])
  
  console.log(productItems)

  return (
    <div className='products'>
      <h3>
        Products
      </h3>
      <p className='error'>
        {statusNote}
      </p>
      <div className='products_container'>
      <table className='widget_table'>
              <tr className='widget_table_tr'>
                <th className='widget_th'>Product</th>
                <th className='widget_th'>Net Price</th>
                <th className='widget_th'>Taxes</th>
                <th className='widget_th'>Price</th>
              </tr>
      {
        productItems ? productItems.map((productItem, id )=> (
          
          <tr key={id} className='product_card'>

            <td className='products_card_image'>
              <img src={productItem.image} alt="product" />
              <span>{productItem.name}</span>
            </td>
            <td className='net_price'> {productItem.net_price}</td>
            <td className='taxes'> { productItem.taxes} </td>
            <td className='price'> {productItem.price}</td>  
        </tr>
  
        ) )
        : null
      }
      </table>
      </div>
    </div>
  )
}

export default Products