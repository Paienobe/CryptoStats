import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [myData, setMyData] = useState([])
  const [globalMarketData, setGlobalMarketData] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchedCoins, setSearchedCoins] = useState([])
  const [infoPageData, setInfoPageData] = useState([])
  const [chartTime, setChartTime] = useState(1)
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })
  const [visibleCurrencies, setVisibleCurrencies] = useState(20)

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y'

  const fetchAllCoins = async (url) => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setMyData(data)
    setLoading(false)
  }

  const fetchDataForInfoPage = async (url) => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setInfoPageData(data)
    setLoading(false)
    console.log(data)
  }

  const fetchDataForChart = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    const timeOfPriceChange = data.prices.map((item) => {
      const unix = item[0]
      const dateObject = new Date(unix)
      const readableDate = dateObject.toLocaleDateString()
      return readableDate
    })
    setChartData({
      labels: timeOfPriceChange,
      datasets: [
        {
          label: 'Price Changes in $',
          data: data.prices.map((data) => data[1]),
          backgroundColor: ['yellow'],
          borderColor: 'yellow',
          borderWidth: 3,
        },
      ],
    })
  }

  const fetchGlobalMarketData = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/global')
    const data = await response.json()
    setGlobalMarketData(data)
  }

  const SearchForACoin = async (e) => {
    let inputedValue = e.target.value
    setSearchInput(inputedValue)
    if (inputedValue.length < 1) {
      setSearchedCoins([])
      setIsSearching(false)
    } else {
      setIsSearching(true)
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${inputedValue}`
      )
      const data = await response.json()
      console.log(data)
      setSearchedCoins(data)
    }
  }

  const showMoreCoins = () => {
    setVisibleCurrencies(visibleCurrencies + 20)
  }

  useEffect(() => {
    fetchAllCoins(url)
  }, [])

  useEffect(() => {
    fetchGlobalMarketData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        loading,
        myData,
        infoPageData,
        chartData,
        chartTime,
        globalMarketData,
        searchInput,
        searchedCoins,
        isSearching,
        visibleCurrencies,
        setSearchInput,
        setIsSearching,
        SearchForACoin,
        fetchDataForInfoPage,
        fetchDataForChart,
        setChartTime,
        showMoreCoins,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
