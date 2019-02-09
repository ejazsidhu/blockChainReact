import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Header} from './components/header'
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import PrivateBlockChain from './components/private-blockchain';
import Hashing from './components/hashing';
import Signing from './components/signing';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';




class App extends Component {


  componentDidMount() {

  }
  render() {


    return (
      <div className="container-fluid">
        <div >
          <Router>
            <div>

              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <ul  className="navbar-nav mr-auto white" >
                <li> <h4>Private Blockchain</h4></li>
              </ul>

                <ul className="navbar-nav">
                  <li><Link to={'/'} className="nav-link"> Hashing </Link></li>
                  <li><Link to={'/signing'} className="nav-link">Signing</Link></li>
                  <li><Link to={'/privater-blockchain'} className="nav-link">Private BlockChain</Link></li>
                </ul>
              </nav>
              <hr />

              <Switch>
                <Route exact path='/' component={Hashing} />
                <Route path='/signing' component={Signing} />
                <Route path='/privater-blockchain' component={PrivateBlockChain} />
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
