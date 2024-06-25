import React from "react"

function Stock({ stock, onPurchase, onSold }) {
  const { id, ticker, name, price, type } = stock

  function handleStockClick() {
    if (onPurchase) {
      onPurchase(stock)
    } else if (onSold) {
      onSold(id)
    }
  }

  return (
    <div onClick={handleStockClick}>
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
