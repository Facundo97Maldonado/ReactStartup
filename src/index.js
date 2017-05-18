import React from 'react';
import ReactDOM from 'react-dom';


class ArtistComponent extends React.Component {
	constructor(){
		super();
		this.state = {
			artistList: [],
			showArtist: false,

		};
		this.searchArtist = this.searchArtist.bind(this);
		this.handleAlbumsShow = this.handleAlbumsShow.bind(this);
	}


	searchArtist(){
		fetch('https://api.spotify.com/v1/artists/{id}')
		.then((data) => {
			this.state.artistList.push(data.body.artists.items)

			this.setState({
				artistList: this.state.artistList[0],
				showArtist: false 
			});
		},(error) => {
			console.error(error);
		})
	}

	handleAlbumsShow(){
		this.setState({
			showAlbum: true
		})
	}

	render () {
	  return (
	   	<div>
	   		<h1>Search an Artist and display his Albums</h1>
	   	</div>
	  )
	}
}

ReactDOM.render(<ArtistComponent />, document.getElementById('app'));

