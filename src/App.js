import { Link, Route } from 'wouter'

import './App.css'
import logo from './logo.svg'
import SearchResults from './pages/SearchResults'
import Details from './pages/Details/index.js'
import Home from './pages/Home'
import StaticContext from './context/StaticContext'
import { GifsContext } from './context/GifsContext'

function App() {
  return (
    <StaticContext.Provider value={{ name: 'Pedro S.', learningReact: true }}>
      <div className="App">
        <section className="App-content">
          <Link className="nav" to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Giffy React App</h1>
          </Link>
          <GifsContext>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Details} path="/gif/:id" />
          </GifsContext>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
