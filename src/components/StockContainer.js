import React from "react"
import Stock from "./Stock"

function StockContainer({ stocks, onPurchase }) {
  const displayedStocks = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onClick={onPurchase} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {displayedStocks}
    </div>
  )
}

export default StockContainer
