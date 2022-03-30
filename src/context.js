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
  const [bitcoinChartData, setBitcoinChartData] = useState({
    labels: [],
    datasets: [],
  })
  const [bitcoinVolumeChartData, setBitcoinVolumeChartData] = useState({
    labels: [],
    datasets: [],
  })
  const [showMenu, setShowMenu] = useState(false)
  const [portfolioItems, setPortfolioItems] = useState([])
  const [showSelectionModal, setShowSelectionModal] = useState(false)

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'

  const fetchAllCoins = async (url) => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setMyData(data)
    console.log(data)
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

  const convertUnixTimeStampToReadableDate = (timeStamp) => {
    const unix = timeStamp
    const dateObject = new Date(unix)
    const readableDate = dateObject.toLocaleDateString()
    return readableDate
  }

  const fetchDataForChart = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    const timeOfPriceChange = data.prices.map((item) => {
      return convertUnixTimeStampToReadableDate(item[0])
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

  const fetchDailyBitCoinData = async () => {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily'
    )
    const data = await response.json()

    const timeOfPriceChange = data.prices.map((item) => {
      return convertUnixTimeStampToReadableDate(item[0])
    })

    const timeOfVolumeChange = data.total_volumes.map((item) => {
      return convertUnixTimeStampToReadableDate(item[0])
    })

    setBitcoinChartData({
      labels: timeOfPriceChange,
      datasets: [
        {
          label: '',
          data: data?.prices?.map((data) => data[1]),
          backgroundColor: ['#004f30'],
          borderColor: '#009e60',
          borderWidth: 3,
          fill: true,
          display: false,
        },
      ],
    })

    setBitcoinVolumeChartData({
      labels: timeOfPriceChange,
      datasets: [
        {
          label: '',
          data: data?.total_volumes?.map((data) => data[1]),
          backgroundColor: ['#4188ff'],
          borderColor: '#4188ff',
          borderWidth: 3,
          fill: true,
          display: false,
          barThickness: 5,
          borderRadius: 5,
        },
      ],
    })
  }

  const displayMobileMenu = () => {
    if (window.innerWidth >= 1024) {
      setShowMenu(true)
    } else {
      setShowMenu(!showMenu)
    }
  }

  useEffect(() => {
    fetchAllCoins(url)
    fetchGlobalMarketData()
    fetchDailyBitCoinData()
  }, [])

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setShowMenu(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
      }
    })
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
        bitcoinChartData,
        bitcoinVolumeChartData,
        showMenu,
        portfolioItems,
        showSelectionModal,
        setShowSelectionModal,
        displayMobileMenu,
        setSearchInput,
        setIsSearching,
        SearchForACoin,
        fetchDataForInfoPage,
        fetchDataForChart,
        setChartTime,
        showMoreCoins,
        fetchDailyBitCoinData,
        convertUnixTimeStampToReadableDate,
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
