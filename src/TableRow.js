import React from 'react';

const TableRow = ({ tableData }) => {
	return(
		<div className="tr">	
			<div className="td">{tableData[0].replace(/_/g, " ")}</div>
			<div className="td">{tableData[1]}</div>
		</div>
	)
}

export default TableRow;