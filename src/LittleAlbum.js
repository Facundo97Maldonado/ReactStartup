import TrackComponent from 'TrackComponent';

export default class LittleAlbum extends React.Component{
	constructor(props){
		super();
		this.state = {
			name: '',
			image: '',
			albumShow: true,
		};
	}

	render(){
		return (
			<div className="row">
				<div className="col-12">
					<h3>{this.props.name}</h3>
					<img className="rounded" src={this.props.images} onClick={() => this.refs.child.getAlbumTracks()}
						style={{width: 200, height: 200}}/> 
					<TrackComponent ref='child' name={this.props.name} albumID={this.props.albumID}/>
				</div>
			</div>
		);
	}
}