import React, { Component } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'; // It Contain Apollo Client and HTTP Request To Server
import { ApolloProvider } from 'react-apollo'; // It will provide react component for client

// Component
import BooksComponent from './Books';
import AddBooksComponent from './AddBook';

// Apollo Client Setup
const client = new ApolloClient({
	link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
	cache: new InMemoryCache()
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div>
					<ul className="header">
						<h3>Book</h3>
						<BooksComponent />
						<br />
						<AddBooksComponent />
					</ul>
				</div>
			</ApolloProvider>
		);
	}
}
export default App;
