import React from 'react';

class LittleArtist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			image: '',
		};
	}

	componentWillReceiveProps(props){
		this.setState({
			name: this.props.name,
			image: this.props.image, 
		});
	}

	render(){
		return(
			<div>
				<h3>{this.state.name}</h3>
				<p>{this.state.image}</p>
			</div>
		);
	}
}

export default LittleArtist