import { Button } from 'semantic-ui-react'
import React, { Component } from 'react'
import styles from './Gallery.scss'
import axios from 'axios' 
import PokemonView from './PokemonView.jsx' 

class Gallery extends Component {
	constructor(props){
		super(props);
		this.state ={
			value:'',
			type:{},
			items: [],

		}

		this.baseUrl = 'http://pokeapi.co/api/v2/type/';
		this.clickHandler = this.clickHandler.bind(this);
		// this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler(event){
		this.setState({
			items:[]
		})
		event.preventDefault();
		// console.log(event.target.id);
		// this.setState({
		// 	value: event.target.id,		
		// });
		// console.log(this.state.value);
		let url = this.baseUrl + event.target.id + "/";
		console.log(url);
		axios.get(url)

			.then((response)=>{
				// console.log(response.data);
				if(response.data!= null){
					let pokemon_arr = response.data.pokemon;
					// console.log(pokemon_arr);
					// let urls =[]
					// if(pokemon_arr!=null){
					// 	this.setState({items: pokemon_arr })
					// }
					pokemon_arr.forEach((element) =>{
						let url = element.pokemon.url
						if(this.state.items.length <=50){
							axios.get(url)
								.then((response)=>{
									if(response.data!= null){
										// console.log(response.data);
										var data = response.data;
										let config={
											name: data.name,
											profile: data.sprites.front_default,
											id: data.id,
											weight: data.weight,
											height:data.height,
											base_experience: data.base_experience
										}
										let item = this.state.items;
										item.push(config)
										// console.log(config)
										this.setState({
											items:item
										});
									}
								})
								console.log(this.state.items)
						}
					})
					// this.setState({
					// 	type:response.data
					// });
				}
			})
			.catch(function(error){
				console.log(error);
		});	
	}

	render(){
		let items = this.state.items
		return(
			<div className="Gallery"> 
				<div className="ui buttons">
					<button className="ui red button" onClick={this.clickHandler} id="fire">FIRE</button>
					<button className="ui yellow button" onClick={this.clickHandler} id="electric">ELECTRIC</button>
					<button className="ui green button" onClick={this.clickHandler} id="grass">GRASS</button>
					<button className="ui teal button" onClick={this.clickHandler} id="ice">ICE</button>
					<button className="ui blue button" onClick={this.clickHandler} id="water">WATER</button>
					<button className="ui violet button" onClick={this.clickHandler} id="poison">POISON</button>
					<button className="ui pink button" onClick={this.clickHandler} id="fairy">FAIRY</button>
					<button className="ui brown button" onClick={this.clickHandler} id="ground">GROUND</button>
					<button className="ui black button" onClick={this.clickHandler} id="dark">DARK</button>
				</div>
				
				<div className="flex-container">
					{items.map((item,i)=> <PokemonView 
													key={i} 
													profile={item.profile} 
													name={item.name}  
													id={item.id}
													weight={item.weight}
													height={item.height}
													base_experience={item.base_experience}
										    />
					)}
				</div>

			</div>
		)
	}
}
export default Gallery
