import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./products.css"

function Products() {
  const [productItems, setProductItems] = useState([])
  const [statusNote, setStatusNote] = useState("")
  const url = 'https://fakerapi.it/api/v1/products?_quantity=15'

  useEffect(() => {
    axios.get(url)
    .then(response => {
      if(response.status === 200){
        setStatusNote("")
        setProductItems(response.data.data)
      }else{
        setStatusNote("Error while loading data, please refresh the page")
      }
    })

  }, [])

  return (
    <div className='products'>
      <h3>
        List of Products
      </h3>
      <p className='error'>
        {statusNote}
      </p>
      <div className='products_container'>
      <table className='product_table'>
              <tr className='product_table_tr table_heading'>
                <th className='product_th'>No</th>
                <th className='product_th'>Product </th>
                <th className='product_th net_price_heading'>Net Price (&#8358;)</th>
                <th className='product_th taxes_heading'>Taxes (%)</th>
                <th className='product_th'>Price (&#8358;)</th>
              </tr>
      {
        productItems ? productItems.map((productItem, id )=> (
          <tr key={id} className='product_table_tr table_item'>
          <td>{id+1}</td>
            <td className='products_card_image'>
              <img src={productItem.image} alt="product" />
              <span>{productItem.name}</span>
            </td>
            <td className='net_price'>{productItem.net_price}</td>
            <td className='taxes'>{ productItem.taxes} </td>
            <td className='price'>{productItem.price}</td>  
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