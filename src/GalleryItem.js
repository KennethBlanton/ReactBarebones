import React, { Component } from 'react';

export default class Gallery extends Component {
	
	render(){
		return(
			

			<div>
				<div className = 'gallery-item' onClick = {this.props.handleClick}>
				<h2>{this.props.title}</h2>
				<img src={`http://circuslabs.net/~michele.james/php/thumbnails/${this.props.thumblink}`}/>
				<div>
					<h6>{this.props.score}</h6>
					<h6>{this.props.username}</h6>
					<h6>{this.props.date}</h6>
				</div>
				<h4>{this.props.description}</h4>
				</div>
			</div>



		)}



 }