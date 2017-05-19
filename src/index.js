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
		let queryString = document.getElementById("inputSearch").value;
		fetch('https://api.spotify.com/v1/search?q=' + queryString + '&type=artist')
		.then((data) => {
			return data.json();
		})
		.then((artist) => {
			this.state.ArtistList.push(artist)
			this.setState({				
				ArtistList: this.state.ArtistList
			})
			console.log(artist);
		})
	}

	render () {
		return (
		  <div>
		  	<h1>Search an Artist and see his albums</h1>
		  	<input type="text" id="inputSearch" onChange={this.searchArtists}/>	
		  	<ul>
				{this.state.ArtistList.map((Artist, index) => {
		  			<LittleArtist key={index} 
		  						  name={Artist.artists.items[index].name} 
		  						  image={Artist.artists.items[index].images[1].url}>
		  			</LittleArtist>	
		  		})}
		  	</ul>
		  </div>

		 );
		console.log(this.state.ArtistList);
	}
}

export default IndexComponent

ReactDOM.render(<IndexComponent />, document.getElementById('app'));

