import React from 'react';
import ReactDOM from 'react-dom';

var SpotifyApi = require('spotify-web-api-node');

var spotifyWebApi = new SpotifyApi({
	clientId: 'fcecfc72172e4cd267473117a1cbd4d',
	clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
	redirectUri: 'http://www.example.com/callback'
});

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
		spotifyWebApi.searchArtists(this.props.name, {limit: 10, offset: 0})
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

