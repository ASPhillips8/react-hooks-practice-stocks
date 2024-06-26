import React, { useEffect, useState } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfoliosStock] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [filteredCategory, setFilteredCategory] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((stockData) => setStocks(stockData))
  }, [])

  function handleStockPurchase(boughtStock) {
    portfolioStocks.includes(boughtStock) ||
      setPortfoliosStock([...portfolioStocks, boughtStock])
  }

  function handleStockSelling(soldStock) {
    const updatedPortfolio = portfolioStocks.filter(
      (stock) => stock.id !== soldStock.id
    )
    setPortfoliosStock(updatedPortfolio)
  }

  function handleSortStock(sortOption) {
    setSortBy(sortOption)
  }

  function sortStocks(stocks, sortBy) {
    return [...stocks].sort((a, b) => {
      if (sortBy === "Alphabetically") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "Price") {
        return a.price - b.price
      }
    })
  }

  const filteredStocks = filteredCategory
    ? stocks.filter((stock) => stock.type === filteredCategory)
    : stocks
  const sortedStocks = sortStocks(filteredStocks, sortBy)

  return (
    <div>
      <SearchBar
        onSortOption={handleSortStock}
        setFilteredCategory={setFilteredCategory}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={sortedStocks}
            onPurchase={handleStockPurchase}
          />
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
