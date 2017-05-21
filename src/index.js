import LittleArtist from 'LittleArtist';

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
			this.setState({
 				ArtistList: []
 			});
	        artist.artists.items.forEach((items) => {
	        	this.state.ArtistList.push(items)
	        })
	        this.setState({
	            ArtistList: this.state.ArtistList
	        });
    	})
	}

	render () {
		return (
		  <div>
			  <nav>
			  	<ul className="navbar">
			  		<li>
			  			<a href="#" className="floatLeft"><i className="fa fa-home"></i> Home</a>
						<a href="#" className="floatRight dropbtn">About</a>
					</li>
				</ul>
			  </nav>
			  <div className="container">
				<h1 className="searchTitle">Search an Artist</h1>
				<input className="center"
					type="text" type="search" id="searchField" placeholder="Artist Name"/>
			  	<button onClick={() => this.searchArtists()}>
			  		<i className="material-icons">search</i>
			  	</button>
			  	<ul>
					{this.state.ArtistList.map((Artist, index) => { 
						return (
							<LittleArtist key={index} 
										  name={Artist.name}
										  images={Artist.images.length > 0 ? Artist.images[1].url : null}
										  artistID={Artist.id}
							>
							</LittleArtist>
						)
					})}
			  	</ul>
			  </div>	
			  <div className="footer">
					<p className="footerLeft">UI Bootcamp - 2017 - &reg; All Rights Reserved</p>
					<p className="footerRight">Mar del Plata - Buenos Aires - Argentina</p>
			  </div>
		  </div>
		 );
	}
}

ReactDOM.render(<IndexComponent />, document.getElementById('app'));

