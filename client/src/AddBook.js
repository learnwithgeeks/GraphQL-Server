import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'; //bind apollo to react package use for binding graphql with react component

// Component
import { getAuthorsQuery, addBookMutation, getBooksQuery } from './queries';

class AddBook extends Component {
	constructor(props) {
		super(props);
		this.state = { bookName: '', genre: '', author: '' };
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addBookMutation({
			variables: {
				name: this.state.bookName,
				genre: this.state.genre,
				authorId: this.state.author
			},
			refetchQueries: [ { query: getBooksQuery } ]
		});
	};
	renderBooks() {
		const data = this.props.getAuthorsQuery;
		if (data.loading) return <option disabled>Loading</option>;
		else
			return data.authors.map((author) => (
				<option key={author.id} value={author.id}>
					{author.name}
				</option>
			));
	}
	render() {
		return (
			<div className="form">
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Book Name"
						onChange={(e) => this.setState({ bookName: e.target.value })}
					/>
					<input type="text" placeholder="Genre" onChange={(e) => this.setState({ genre: e.target.value })} />
					<select onChange={(e) => this.setState({ author: e.target.value })}>{this.renderBooks()}</select>
					<input type="submit" />
				</form>
			</div>
		);
	}
}
export default compose(
	graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
	graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
