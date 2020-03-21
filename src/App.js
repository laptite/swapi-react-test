import React, { Component } from 'react';
import Header from './Header.js';
import ResourceList from './ResourceList.js'
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
		const defaultResource = Object.keys(response)[0]
		const defaultURL = Object.values(response)[0]

		const swapiResource = await fetch(`${defaultURL}?format=json`)
		const response2 = await swapiResource.json()
		const defaultSectionObj = response2.results

		this.setState({ 
			resources: resources,
			liveResource: defaultResource,
			sectionObj: defaultSectionObj
		})
	}

	onResourceChange = (event) => {
		const selectedResource = event.target.getAttribute("category")
		const resourceURL = event.target.getAttribute("category-url")

		if (typeof(resourceURL) !== 'undefined') {
			return fetch(`${resourceURL}?format=json`)
				.then( response => response.json() )
				.then( data => {
					this.setState({ 
						liveResource: selectedResource,
						sectionObj: data.results
					})
				})
		}
	}

  render() {
  	const { resources, liveResource, sectionObj } = this.state;

    return(
    	<div className="app">
    		<Header 
    			resources={ resources }
    			selection={ this.onResourceChange }
    		/>
    		<div className="section-header resource-body">
					{
						!sectionObj.length ?
							<div className="resource-content">
								<h1>Loading...</h1>
							</div>:
						(
			    		<div className="resource-content">
								<h1>{ liveResource }</h1>
				    		<ResourceList sectionObj={ sectionObj } />
							</div>
						)
					}
					</div>
    	</div>
    );
  }

}

export default App;
