import React from 'react';
import './Resource.css'

const Resource = ({ tableRow }) => {
	const header = Object.entries(tableRow)[0]

	return(
		<div className="tr-group">
			<div className="thead">
				<div className="th">
					<div className="td">{header[0]}</div>
					<div className="td">{header[1]}</div>
				</div>
			</div>
			<div className="tbody">
				{
					Object.entries(tableRow).map((tableData, i) => {
						if (i > 0) {
							return(
								<div className="tr">	
									<div className="td">{tableData[0].replace(/_/g, " ")}</div>
									<div className="td">{tableData[1]}</div>
								</div>
							)
						}
					})
				}
			</div>
		</div>
	)
}

export default Resource;
