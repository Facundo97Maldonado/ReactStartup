import ArtistComponent from 'ArtistComponent';

export default class LittleArtist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			images: '',
		};
	}

	render(){
		return (
			<div>
				<p onClick={() => this.refs.child.getArtistAlbums()}>{this.props.name}</p>
				<img src={this.props.images} style={{width: 250, height: 250}}/>
				<ArtistComponent ref='child' name={this.props.name} artistID={this.props.artistID}/>
			</div>
		);
	}
}
