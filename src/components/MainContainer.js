import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfoliosStock] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((stockData) => setStocks(stockData))
  }, [])

  function handleStockPurchase(boughtStock) {
    // check if bought is in portfolio
    // if is return unchanged
    // if not add to portfolio
    setPortfoliosStock([...portfolioStocks, boughtStock])
  }

  function handleStockSelling(soldStock) {
    const updatedPortfolio = portfolioStocks.filter(
      (stock) => stock.id !== soldStock.id
    )
    setPortfoliosStock(updatedPortfolio)
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onPurchase={handleStockPurchase} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioStocks={portfolioStocks}
            onSold={handleStockSelling}
          />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
