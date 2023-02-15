import React from 'react'

function ProductCard({title}) {
  return (
    <div>
        <h1>{title}</h1>
        <img src="https://images.unsplash.com/photo-1676310483825-daa08914445e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80" alt="" />
    </div>
  )
}

export default ProductCard