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
			<div className="row">
				<div className="col-12">
					<h3>{this.props.name}</h3>
					<img src={this.props.images} onClick={() => this.refs.child.getArtistAlbums()}
						style={{width: 250, height: 250}}/>
					<ArtistComponent ref = 'child' name = {this.props.name} artistID = {this.props.artistID}/>
				</div>
			</div>
		);
	}
}
