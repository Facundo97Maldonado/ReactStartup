class LittleArtist extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			image: '',
		}
	}
	render(){
		return(
			<div>
				<h3>{this.props.name} {this.props.image}</h3>
			</div>
		)
	}
}

export default LittleArtist