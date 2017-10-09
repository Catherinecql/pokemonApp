import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Search from '../Search/Search.jsx'
import Gallery from '../Gallery/Gallery.jsx'
import styles from './Home.scss'

class Home extends Component {

    render() {
        return(
        <Router>
        	<div>
            	<div className="Home">
	                <h1>Pokemon App</h1>
	                <ul className = "menu">
	                	<li className="nav-bar">
	                		<Link to="/">Search</Link>
	                	</li>
	                	<li className="nav-bar">
	                		<Link to="/Gallery">Gallery</Link>      
	                	</li>
	                </ul>
	            </div>
                <Route exact path="/" component={Search}/>
                <Route path="/Gallery" component={Gallery}/>

            </div>
        </Router>
        )
    }
}

export default Home
