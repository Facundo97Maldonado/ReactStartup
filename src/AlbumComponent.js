import LittleTrack from 'LittleTrack';

export default class AlbumComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			albumID: '',
			tracksList: [],
		};
	}

	getAlbumTracks(){
		fetch("https://api.spotify.com/v1/albums/" + this.props.albumID + "/tracks?offset=0&limit=20")
		.then((data) => {
			return data.json();
		}).then((track) => {
			track.items.forEach((items) => {
	        	this.state.tracksList.push(items)
	        })
			this.setState({
				tracksList: this.state.tracksList 
			});
		})
	}	

	render(){
		return (
			<div>
			  	<h2>Tracks of {this.props.name} album</h2>
				<ul>
					{this.state.tracksList.map((Track, index) => { 
						return (
							<LittleTrack  key={index} 
										  name={Track.name}
										  preview_url={Track.preview_url}
							>
							</LittleTrack>
						)
					})}
			  	</ul>
		    </div>
		)
	}
}