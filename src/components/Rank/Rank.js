import React from 'react';


const Rank = ({ entries, name }) => {
	return(
		<div>
			<div className="f3 white">
				{`${name}, your current rank is...`}
			</div>
			<div className="f1 white">
				{`${entries} entries`}
			</div>
		</div>
	)
}

export default Rank;