import { Button } from 'semantic-ui-react'
import React, { Component } from 'react'
import axios from 'axios'
import styles from './PokemonView.scss'


class PokemonView extends Component {
	// constructor(props){
	//     super(props);
	//  	this.state ={}
	// }
	render(){
		const name = this.props.name;
		const profile = this.props.profile;

		return(
			<div className="flex-item">
				<div className="ui card">
					<div className="image">
						<img src={profile}></img>
					</div>
					<div className="content">
						<a className="header">{name}</a>
						<div className="description">
					 		 Kristy is an art director living in New York.
						</div>
					</div>
				</div>
			</div>
		)

	}
}
export default PokemonView
