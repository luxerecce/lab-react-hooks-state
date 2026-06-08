import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const appStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#f1f1f1' : '#111111',
    minHeight: '100vh',
    transition: 'background-color 0.25s ease, color 0.25s ease',
    padding: '2rem',
  }

  return (
    <div style={appStyle}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
