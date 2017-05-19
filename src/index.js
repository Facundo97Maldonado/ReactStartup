import LittleArtist from './LittleArtist';

class IndexComponent extends React.Component {
	constructor(){
		super();
		this.state = {
			ArtistList: [],
		};
		this.searchArtists = this.searchArtists.bind(this);
	}


	searchArtists(){
		let queryString = document.getElementById("searchField").value;
		fetch('https://api.spotify.com/v1/search?q=' + queryString + '&type=artist')
		.then((data) => {
			return data.json();
		})
		.then((artist) => {
			this.state.ArtistList.push(artist)
			this.setState({				
				ArtistList: this.state.ArtistList
			})
			console.log(this.state.ArtistList[0].artists.items[0].name);
		})
	}

	render () {
		return (
		  <div>
		  	<h1>Search an Artist</h1>
		  	<input type="text" id="searchField"/>
		  	<button onClick={() => this.searchArtists()}>Search</button>
		  	<ul>
				{this.state.ArtistList.map((Artist, index) => {
		  			LittleArtist: () => 
		  					<LittleArtist
		  						  key={index} 
		  						  name={Artist.artists.items[0].name} 
		  						  image={Artist.artists.items[0].images[1].url}
		  					/>
		  		})}
		  	</ul>
		  </div>

		 );
	}
}

ReactDOM.render(<IndexComponent />, document.getElementById('app'));

