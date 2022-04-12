import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const getDataFromLocalStorage = (
    requiredDataName,
    alternativeReturnedItem
  ) => {
    const myData = localStorage.getItem(requiredDataName)
    if (myData) {
      return JSON.parse(myData)
    } else {
      return alternativeReturnedItem
    }
  }

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
  const [visibleCurrencies, setVisibleCurrencies] = useState(10)
  const [bitcoinChartData, setBitcoinChartData] = useState({
    labels: [],
    datasets: [],
  })
  const [bitcoinVolumeChartData, setBitcoinVolumeChartData] = useState({
    labels: [],
    datasets: [],
  })
  const [showMenu, setShowMenu] = useState(false)
  const [portfolioItems, setPortfolioItems] = useState(
    getDataFromLocalStorage('portfolioItems', [])
  )
  const [showSelectionModal, setShowSelectionModal] = useState(false)
  const [selectedCoin, setSelectedCoin] = useState('')
  const [currency, setCurrency] = useState(
    getDataFromLocalStorage('currencyComparison', 'usd')
  )
  const [showCurrencyList, setShowCurrencyList] = useState(false)

  const currencySymbol =
    currency === 'usd'
      ? '$'
      : currency === 'eur'
      ? '€'
      : currency === 'gbp'
      ? '£'
      : currency === 'ngn'
      ? '₦'
      : ''

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`

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
          label: `Price Changes ${currencySymbol}`,
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
      setSearchedCoins(data)
    }
  }

  const showMoreCoins = () => {
    setVisibleCurrencies(visibleCurrencies + 10)
  }

  const fetchDailyBitCoinData = async () => {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily'
    )
    const data = await response.json()

    const timeOfPriceChange = data.prices.map((item) => {
      return new Date(item[0]).getMonth() + 1
    })

    const timeOfVolumeChange = data.total_volumes.map((item) => {
      return new Date(item[0]).getMonth() + 1
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
      labels: timeOfVolumeChange,
      datasets: [
        {
          label: '',
          data: data?.total_volumes?.map((data) => data[1]),
          backgroundColor: ['#296d98'],
          borderColor: '#296d98',
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

  const fetchDataForPortfolioPage = async (url, date, quantity) => {
    const response = await fetch(url)
    const chosenCoin = await response.json()
    setPortfolioItems([...portfolioItems, { chosenCoin, date, quantity }])
  }

  useEffect(() => {
    fetchAllCoins(url)
    fetchGlobalMarketData()
    fetchDailyBitCoinData()
  }, [currency])

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

  const setLocalStorage = () => {
    localStorage.setItem('portfolioItems', JSON.stringify(portfolioItems))
    localStorage.setItem('currencyComparison', JSON.stringify(currency))
  }

  useEffect(() => {
    setLocalStorage()
  }, [portfolioItems, currency])

  const deleteItemFromPortfolio = (e) => {
    const itemToBeDeleted =
      e.target.parentElement.parentElement.parentElement.id
    const newArray = portfolioItems.filter((item) => {
      return item?.chosenCoin?.id !== itemToBeDeleted
    })
    setPortfolioItems(newArray)
  }

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
        selectedCoin,
        showCurrencyList,
        currency,
        currencySymbol,
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
        fetchDataForPortfolioPage,
        setPortfolioItems,
        setShowCurrencyList,
        setCurrency,
        deleteItemFromPortfolio,
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
