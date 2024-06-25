import React from "react"

function Stock({ stock, onPurchase }) {
  const { id, ticker, name, price, type } = stock

  function handlePurchase() {
    onPurchase(name)
  }

  return (
    <div onClick={handlePurchase}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {ticker}: {price}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Stock
