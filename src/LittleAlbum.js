import AlbumComponent from 'AlbumComponent';

export default class LittleAlbum extends React.Component{
	constructor(props){
		super();
		this.state = {
			name: '',
			image: '',
		};
	}

	render(){
		return (
			<div className="row">
				<div className="col-12">
					<p onClick={() => this.refs.child.getAlbumTracks()}>{this.props.name}</p>
					<img src={this.props.images} style={{width: 200, height: 200}}/> 
					<AlbumComponent ref='child' name={this.props.name} albumID={this.props.albumID}/>
				</div>
			</div>
		);
	}
}