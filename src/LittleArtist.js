export default class LittleArtist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			images: '',
		};
	}

	render(){
		return(
				<li>
					<p>{this.props.name}</p>
					<img src={this.props.images}></img>
				</li>
		);
	}
}
