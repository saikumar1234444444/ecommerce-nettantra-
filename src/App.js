import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useState} from 'react'

import Home from './components/Home'
import Products from './components/Products'
import Item from './components/Item'
import Cart from './components/Cart'
import Context from './context/Context'
import Login from './components/Login'
import './App.css'

const App = () => {
  const [change, setChange] = useState([])
  const addToCart = data => {
    setChange(prevChange => [...prevChange, data[0]])
  }

  const deleteCart = every => {
    const newData = change.filter(simple => simple.id !== every.id)
    setChange(newData)
  }

  return (
    <BrowserRouter>
      <Context.Provider value={{change, addToCart, deleteCart}}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/item/:id" element={<Item />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Home />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App
