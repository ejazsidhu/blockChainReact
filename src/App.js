import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Header} from './components/header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
// import About from './components/about';
import Contact from './components/contact'




class App extends Component {
  

  componentDidMount() {
    
  }
  render() {
    

    return (
    <div className="container">
    <div >
    <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Search Block </Link></li>
            {/* <li><Link to={'/save'} className="nav-link">Save Block</Link></li> */}
            {/* <li><Link to={'/about'} className="nav-link">About</Link></li> */}
          </ul>
          </nav>
          <hr />

          
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/save' component={Contact} />
              {/* <Route path='/about' component={About} /> */}
          </Switch>
        </div>
      </Router>
    
    </div>
     
    </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
