import React, { Component } from 'react';
import Header from './Header.js';
import Resource from './Resource.js'
import './App.css'

class App extends Component {

	constructor() {
		super();
		this.state = {
			resources: [],
			liveResource: '',
			sectionObj: ''
		}
	}

	async componentDidMount() {
		const swapiRoot = await fetch("https://swapi.co/api/");
		const response = await swapiRoot.json();
		const resources = Object.entries(response)
		const defaultResource = resources[0]
		const defaultSectionObj = this.fetchSection(defaultResource[1])
		
		this.setState({ 
			resources: resources,
			liveResource: defaultResource[0],
			sectionObj: defaultSectionObj
		})
	}

	onResourceChange = (event) => {
		const selectedResource = event.target.getAttribute("category")
		const resourceURL = event.target.getAttribute("category-url")
		const selectedObject = this.fetchSection(resourceURL)

		this.setState({ 
			liveResource: selectedResource,
			sectionObj: selectedObject
		})
	}

	fetchSection = (url) => {
		if (typeof(url) !== 'undefined') {
			const jsonURL = `${url}?format=json`
			const objArray = fetch(jsonURL)
				.then( response => response.json() )
				.then( data => data.results )
				.then( promise => {
					for (let [key, value] of Object.entries(promise)) {
					  console.log(`promise -- ${key}: ${value}`);
					}
				})
			return objArray
		}
	}

  render() {
  	const { resources, liveResource, sectionObj } = this.state;

    return (
			<div>
    		<Header 
    			resources={ resources }
    			selection={ this.onResourceChange }
    		/>
    		<div className="resource-body">
					<h1>{ liveResource }</h1>
	    		<Resource sectionObject={ sectionObj } />
				</div>
    	</div>
    );
  }

}

export default App;
