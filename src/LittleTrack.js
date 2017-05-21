export default class LittleAlbum extends React.Component{
	constructor(props){
		super();
		this.state = {
			name: '',
			preview_url: '',
			spotifyUrl: '',
		};
	}

	render(){
		return	(
				<div className="row">
					<div className="col-12">
						<p>Enjoy 30 seconds of {this.props.name} track.</p>
						<audio controls> 
							<source src={this.props.preview_url} />
						</audio>
						<a href={this.props.spotifyUrl} className="tooltip">
							<i className="fa fa-spotify fa-2x" aria-hidden="true" style={{width: 45, height: 45}}></i>
							<span className="tooltiptext">See in spotify!</span>
						</a>
					</div>
				</div>
			);
	}
}