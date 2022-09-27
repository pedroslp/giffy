import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'

import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className="App-content">
      <h1>Giffy React App</h1>
      <Link to='/gif/panda'>Gifs de pandas</Link>
      <Link to='/gif/mapache'>Gifs de mapaches</Link>
      <Link to='/gif/españa'>Gifs de España</Link>
      <Route path='/gif/:keyword' component={ListOfGifs}/>
      </section>
    </div>
  )
}

export default App
