import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfoliosStock] = useState([])

  // need to pass in a new array to PortolioContainer
  // contains items clicked
  // create a event handler on the stock

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((stockData) => setStocks(stockData))
  }, [])

  function handleStockPurchase(boughtStock) {
    setPortfoliosStock([...portfolioStocks, boughtStock])
  }

  console.log(portfolioStocks)

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onPurchase={handleStockPurchase} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
