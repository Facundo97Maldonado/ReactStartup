import ArtistComponent from 'ArtistComponent';

export default class LittleArtist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			images: '',
		};
		this.showArtistComponent = this.showArtistComponent.bind(this);
	}

	showArtistComponent(){
		<ArtistComponent artistID={this.props.artistID} />
	}

	render(){
		return (
				<li> 
					<p>{this.props.name}</p>
					<img src={this.props.images} onClick={this.showArtistComponent}/>
				</li>
		);
	}
}
