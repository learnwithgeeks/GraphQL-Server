import React, { Component } from 'react';
import { graphql } from 'react-apollo'; //bind apollo to react package use for binding graphql with react component

//Component
import { getBookQuery } from './queries';

class BookDetails extends Component {
	render() {
		return (
			<div id="book-details">
				<p>Output book details here</p>
			</div>
		);
	}
}

export default graphql(getBookQuery, {
	options: (props) => {
		return {
			variables: {
				id: props.bookid
			}
		};
	}
})(BookDetails);
