import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailedPage from './pages/DetailedPage'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:name' element={<DetailedPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
