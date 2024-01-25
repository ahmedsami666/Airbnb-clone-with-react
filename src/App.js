import React from "react"
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

const createCard = data.map((item) => {
  return (
    <Card   
    key={item.id}
    {...item} 
  />
  )
})

const App = () => {
    return (
      //<Hero />
      <div>
        <NavBar />
        <Hero />
        <section className="cards-list">
                {createCard}
        </section>
      </div>
    )
}

export default App