import React, { Component } from 'react';

import {BrowserRouter} from "react-router-dom";

import {NavLink} from 'react-router-dom';



class Sidebar extends Component {
	 ComponentDidMount(argument) {

		 fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=categoryPage',{

            method: 'GET',
            headers: {
            },
        })
        .then( response => response.json())
        .then(json => (
        
           this.setState({
            data:json,
           })
          
        ))
	}
	render() {
		return (
			<div className="sidebar">
				<nav className="sideBarLinks">
					<NavLink className="gallery" to='/'>Gallery</NavLink>
					<NavLink className="cat" to='/cat'>Cat</NavLink>
					<NavLink className="dog" to='/dog'>Dog</NavLink>
				</nav>
			</div>
		)
	}
}

export default Sidebar;

// links for each category , cat, dog , gallery , ajax call
