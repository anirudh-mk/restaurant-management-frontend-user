import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantPage from './screens/RestaurantPage'
import FoodPage from './screens/FoodPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RestaurantPage />} />
        <Route path='/restaurant/:restaurantId' element={<RestaurantPage />} />
        <Route path='/food/:foodId' element={<FoodPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App