import React from 'react'

const ProductCard = ({name,price,brand}) => {
  return (
    <div>
      <h1>Car Name : {name}</h1>
      <h1>Car price : {price}</h1>
      <h1>Card Brand : {brand}</h1>
    </div>
  )
}

export default ProductCard
