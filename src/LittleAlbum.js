export default class LittleAlbum extends React.Component{
	constructor(props){
		super();
		this.state = {
			name: '',
			image: '',
		};
	}

	render(){
		return	(
				<li>
					<p>{this.props.name}</p>
					<img src={this.props.images}></img>
				</li>
			);
	}
}