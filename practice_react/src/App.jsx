import React from 'react'
import "./App.css"
import WeatherCard from './Components/WeatherCard'
const App = () => {
  return (
    <>
      <WeatherCard location={"Agra"} />

      <WeatherCard
        location={"Delhi"} />

      <WeatherCard
        location={"Jaipur"} />

    </>

  )
}

export default App
