import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Route,} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer'
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products'

function App() {

    return (
      <Router>
         <Navbar />
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/Services" exact component={Services} />
           <Route path="/Products" exact component={Products} />
         </Switch>
         < Footer/>
      </Router>
    )
}

export default App
