import AlbumComponent from 'AlbumComponent';

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
					<h3>{this.props.name}</h3>
					<img className="rounded" src={this.props.images} onClick={() => this.refs.child.getAlbumTracks()}
						style={{width: 200, height: 200}}/> 
					<AlbumComponent ref='child' name={this.props.name} albumID={this.props.albumID}/>
			</div>
		);
	}
}