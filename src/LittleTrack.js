export default class LittleTrack extends React.Component{
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
				<table>
					<tr>
						<td>
							<p>{this.props.name}</p>
						</td>
						<td>
							<div className="tracks">
								<audio className="preview" controls> 
									<source src={this.props.preview_url} />
								</audio>
								<a href={this.props.spotifyUrl} className="tooltip">
									<i className="fa fa-spotify fa-2x" aria-hidden="true" style={{width: 45, height: 45}}></i>
									<span className="tooltiptext"> See in spotify!</span>
								</a>
							</div>
						</td>
					</tr>
				</table>
			);
	}
}