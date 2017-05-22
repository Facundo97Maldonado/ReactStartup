import LittleTrack from 'LittleTrack';

export default class AlbumComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			albumID: '',
			tracksList: [],
			mode: 'AlbumComponent',
			albumShow: this.props.albumShow,
		};
	}

	getAlbumTracks(){
		fetch("https://api.spotify.com/v1/albums/" + this.props.albumID + "/tracks?offset=0&limit=20")
		.then((data) => {
			return data.json();
		}).then((track) => {
			this.setState({
 				tracksList: []
 			});
			track.items.forEach((items) => {
	        	this.state.tracksList.push(items)
	        })
			this.setState({
				tracksList: this.state.tracksList,
				albumShow: false,
			});
		})
	}	

	render(){
		return (
			<div className="container">
			  	<h3>{this.state.tracksList.length > 0 ?
			  		<div>Enjoy 30 seconds of each track of {this.props.name}
				  		<table>
					  		<tr>
								<th className="tableHeader">Name</th>
								<th className="tableHeader">Track</th>
							</tr>
						</table>
					</div>
			  		:null
			  		}
			  	</h3>

				<ul className="tracksOnTable">
					{this.state.tracksList.map((Track, index) => { 
						return (
							<LittleTrack  key={index} 
										  name={Track.name}
										  preview_url={Track.preview_url}
										  spotifyUrl={Track.external_urls.spotify}
							>
							</LittleTrack>
						)
					})}
			  	</ul>
		    </div>
		)
	}
}