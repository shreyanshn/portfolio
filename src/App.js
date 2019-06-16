import React, { Component } from 'react'

import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'



class App extends Component {
  render() {
    return (
      <div>
      		<Navbar></Navbar>
	
  	      
			      <Home></Home>
      			<About></About>
      			<Skills></Skills>
      			<Projects></Projects>
      			<Contact></Contact>
          	
            <Footer></Footer>
      	</div>
 
    );
  }
}

export default App;
