import React, { Component } from 'react';

class ImageDetail extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: {}
		}
	}

	componentDidMount() {
		if(!this.props.match.params.id){
			console.log('you fucked up')
		}

	    fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=detail&query=' + this.props.match.params.id,{

	            method: 'GET',
	            headers: {
	            },
	        })
	        .then( response => {
	        	console.log(response);
	        	return response.json();
	        })
	        .then(json => (
	        
	           this.setState({
	            data:json,
	           })
	          
	        ));
	    }
	

	render() {
		console.log(this.state.data);
		return (
			<div className="image-detail">
				<img src={`http://circuslabs.net/~michele.james/php/user_uploads/${this.state.data.imagelink}`} />
				<h1>Title: {this.state.data.title}</h1>
				<p>Description: {this.state.data.description}</p>
				<p>Score: {this.state.data.score}</p>
				<p>Username: {this.state.data.username}</p>
			</div>
		)
	}
}

export default ImageDetail;
