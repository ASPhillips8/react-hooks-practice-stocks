import React from "react"
import Stock from "./Stock"

function PortfolioContainer({ portfolioStocks, onSold }) {
  const displayedPurchaseStocks = portfolioStocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onClick={onSold} />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {displayedPurchaseStocks}
    </div>
  )
}

export default PortfolioContainer
