import LittleAlbum from 'LittleAlbum';

export default class ArtistComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			artistID: '',
			albumsList: [],
		};
	}

	getArtistAlbums(){
		fetch("https://api.spotify.com/v1/artists/" + this.props.artistID + "/albums")
		.then((data) => {
			return data.json();
		}).then((album) => {
			album.items.forEach((items) => {
	        	this.state.albumsList.push(items)
	        })
	        console.log(this.state.albumsList)
			this.setState({
				albumsList: this.state.albumsList 
			});
		})
	}	

	render(){
		return (
			<div>
			  	<h2>Albums of {this.props.name}</h2>
				<ul>
					{this.state.albumsList.map((Album, index) => { 
						return (
							<LittleAlbum  key={index} 
										  name={Album.name}
										  images={Album.images.length > 0 ? Album.images[1].url : null}
										  albumID={Album.id}
							>
							</LittleAlbum>
						)
					})}
			  	</ul>
		    </div>
		)
	}
}