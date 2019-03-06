import React, { Component } from 'react';
import { graphql } from 'react-apollo'; //bind apollo to react package use for binding graphql with react component

//Component
import { getBooksQuery } from './queries';
import BookDetails from './BookDetails';

class BooksList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null
		};
	}
	renderBooks() {
		const data = this.props.data;
		if (data.loading) return <h3>Loading</h3>;
		else
			return data.books.map((book) => (
				<li
					key={book.id}
					onClick={(e) => {
						this.setState({ selected: book.id });
					}}
				>
					{book.name}
				</li>
			));
	}
	render() {
		return (
			<div>
				<ul className="book-list">{this.renderBooks()}</ul>
				<BookDetails bookid={this.state.selected} />
			</div>
		);
	}
}
export default graphql(getBooksQuery)(BooksList);
