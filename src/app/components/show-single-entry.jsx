import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ResultContainer = styled.div`
	width: 180px;
	padding: 2px 4px 2px 4px;
	border-style: solid;
	border-width: 2px;
	background-color: ffaa22;
	text-align: center;
	float: left;
	margin-right: 10px;
`;

const LightRow = styled.div`
	font-size: 16px;
	background-color: ffee99;
	padding: 2px 2px 2px 2px;
	border: solid 1px black;
`;

const DarkRow = styled.div`
	font-size: 16px;
	font-weight: bold;
	background-color: ffcc77;
	padding: 2px 2px 2px 2px;
	border: solid 1px black;
`;

const TableHeaderCell = styled.div`
	font-weight: bold;
	min-width: 88px;
	border: solid 1px black;
	background-color: eee7ef;
	display: inline-block;
`;

const TableCell = styled.div`
	min-width: 88px;
	border: solid 1px black;
	background-color: eee7ef;
	display: inline-block;
`;

const ShowResultEntry = props =>
	<ResultContainer id={`show-single-result-entry-${props.currency}`}>
		<LightRow id={`date-row-${props.currency}`}> {props.tradeDate} </LightRow>
		<DarkRow id={`name-row-${props.currency}`}> {props.currency} </DarkRow>
		<div id={`buy-sell-header-${props.currency}`}>
			<TableHeaderCell>Buy</TableHeaderCell><TableHeaderCell>Sell</TableHeaderCell>
		</div>
		<div id={`buy-sell-prices-${props.currency}`} >
			<TableCell> {props.buyPrice} </TableCell><TableCell> {props.sellPrice} </TableCell>
		</div>
		<div id={`buy-sell-times-${props.currency}`} >
			<TableCell> {props.buyTime} </TableCell><TableCell> {props.sellTime} </TableCell>
		</div>
		<LightRow id={`profit-row-${props.currency}`}> Profit: {props.profit} </LightRow>
	</ResultContainer>


export default ShowResultEntry;

ShowResultEntry.propTypes = {
	tradeDate: PropTypes.string.isRequired,
}