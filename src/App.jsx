import Home from './pages/Home'
import Data from "./pages/Data"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import TransactionPage from './pages/TransactionPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/transaction' element={<TransactionPage/>}/>
        <Route path='/data' element={<Data/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
