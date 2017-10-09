import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styles from './Search.scss' 
import axios from 'axios'
class Search extends Component {
	constructor(){
		super();
		this.state ={
			value:'',
			pokemon:{}
		}

		this.baseUrl = 'http://pokeapi.co/api/v2/pokemon/';
		this.inputChangeHandler = this.inputChangeHandler.bind(this);
		// this.clickHandler = this.clickHandler.bind(this);
	}
	// clickHandler(){
	// 	let url = this.baseUrl + this.state.value;
	// 	console.log(url);
	// 	axios.get(url)
	// 		.then(function(response){
	// 			this.setState({
	// 				pokemon:response.data
	// 			});
	// 		})
	// 		.catch(function(error){
	// 			console.log(error);
	// 		});
	// }

	inputChangeHandler(event){
		// console.log(event.target.value);
		this.setState({
			value: event.target.value,		
		});
		console.log(event.target.value);
		let url = this.baseUrl + event.target.value;
		// console.log(url);
		axios.get(url)
			.then(function(response){
				console.log(response);
				if(response.data!= null){
					this.setState({
						pokemon:response.data
					});
				}
			})
			.catch(function(error){
				console.log(error);
		});
		console.log(this.state.pokemon);
	}

	render(){
		return(
			<div className = "Search">
			     <div className = "search-bar">  


					<div className = "ui input">
						<input className = "inputText" type="text" 
						onChange={this.inputChangeHandler} placeholder="Search Pokemon..." >
						</input> 
					</div>
					

					<div className="menu-title"> 
					<span>Sort by: </span>
					<select>
						<option value = "title"> Title </option>
						<option value = "Weight"> Weight</option>
					</select>	
					</div> 

					


				</div>
			</div>
		)
	}

}

export default Search