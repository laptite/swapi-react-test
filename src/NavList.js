import React from 'react';

const ResourceList = ({ resources, selection }) => {
	return(
		<div className="navbar-header">
			<ul className="nav-list">
			{
				resources.map((resource, i)=>{
					const categoryName = resource[0];
					const categoryURL = resource[1];
					return(
						<li 
							onClick={selection} 
							category={categoryName}
							category-url={categoryURL}
							className="nav-list__item" 
							key={i}>{categoryName}</li>
					)
				})
			}
			</ul>
		</div>
	)
}

export default ResourceList;
