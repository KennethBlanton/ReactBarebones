import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import GalleryItem from './GalleryItem';



class ImageCollection extends Component {

 constructor(props) {
   super(props)

   this.state = {
     images: [],
     data:[]
   }
 }

     componentDidMount() {
   // make API calls here
   fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=gallery',{

          method: 'GET',
         
      })
      .then( response => response.json())
      .then(json => (
     
         this.setState({
          data:json,
         })
       
      ));

    }


    render() {
        const { images } = this.props;
        return (

            <ul>
            {this.state.data.map(item =>
                <Link to={"/ImageDetail/" + item.id} ><GalleryItem  key={item.id} {...item} /></Link>)}
            </ul>
            
        )
    }
}



export default ImageCollection;
