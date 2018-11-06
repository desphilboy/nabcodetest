import React from 'react';
import PropTypes from 'prop-types'
import ShowResultEntry from './show-single-entry.jsx'

const ShowEntries = props =>
	<div id="show-entries-container" style={{ float: 'left' }}>
		{
			props.currencyData.map(currencyResult =>
				<ShowResultEntry {...currencyResult} />
			)
		}
	</div>

export default ShowEntries;
