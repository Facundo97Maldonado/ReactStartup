import LittleArtist from 'LittleArtist';

setTimeout(function() {
   $("#fadeOut").fadeOut().empty();
 }, 1500);

export default class ArtistComponent extends React.Component {
	constructor(props){
		super();
		this.state = {
			ArtistList: [],
		};
		this.searchArtists = this.searchArtists.bind(this);
	}

	searchArtists(){
		let queryString = document.getElementById("searchField").value;
		if(queryString != ''){
			fetch('https://api.spotify.com/v1/search?q=' + queryString + '&type=artist')
			.then((data) => {
				return data.json();
			})
			.then((artist) => {
				this.setState({
	 				ArtistList: [],
	 			});
		        artist.artists.items.forEach((items) => {
		        	this.state.ArtistList.push(items)
		        })
		        this.setState({
		            ArtistList: this.state.ArtistList
		        }); 
	    	})
	    }else{
	    	window.alert("Please complete Artist Field before search it")
	    }
	}

	hideArtists(){
		this.setState({
			ArtistList: [], 
		});
	}

	render () {
		return (
		  <div>
			  <nav>
			  	<ul className="navbar" id="navbar-home">
			  		<li>
			  			<a href="#" className="floatLeft">
			  				<i className="fa fa-home"></i> Home
			  			</a>
						<a href="#"  className="floatRight w3-right">
							About
						</a>
						<a href="https://www.spotify.com">
			  				<img src="./public/spotify.png" style={{height: 25}}/>
			  			</a>
					</li>
				</ul>
			  </nav>
			  <div className="container">
			  	<div className="elementToFadeIn">
					<h1 className="searchTitle"><strong>Search an Artist</strong></h1>
					<input className="center"
						type="text" type="search" id="searchField" placeholder="Artist Name"/>
				  	<button onClick={() => this.searchArtists()}>
				  		<i className="material-icons">search</i>
				  	</button>
				</div>
				<div className="loader" id="fadeOut"></div>
				<div className="container">
					  	<ul>
							{this.state.ArtistList.map((Artist, index) => { 
								return (
									<LittleArtist key={index} 
												  name={Artist.name}
												  images={Artist.images.length > 0 ? Artist.images[1].url : "https://goo.gl/dzuBgt"}
												  artistID={Artist.id}
												  
									>
									</LittleArtist>
								)
							})}
					  	</ul>
				</div>
			  </div>	
			  <div className="footer">
					<p>UI Bootcamp - 2017 - &reg; All Rights Reserved -
					Mar del Plata - Buenos Aires - Argentina</p>
			  </div>
		  </div>
		 );
	}
}

ReactDOM.render(<ArtistComponent />, document.getElementById('app'));

