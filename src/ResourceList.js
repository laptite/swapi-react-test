import React from 'react';
import Resource from './Resource.js'
import './ResourceList.css'

const ResourceList = ({ sectionObj }) => {
	const tableRows = Object.values(sectionObj)

	return(
		<div className="table">
			{
				Object.entries(tableRows).map((data, i) => {
					return <Resource key={`tg-${i}`} tableRow={ data[1] }/>
				})
			}
		</div>
	)
}

export default ResourceList;