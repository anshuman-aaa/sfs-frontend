import gql from 'graphql-tag';
import React from "react";
import { Query } from "react-apollo";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Category = gql`
	query category($id: !ID){
		category(id: $id) {
		categoryId
		categoryUri
		categoryName
		categoryDesc
		}
	}
`;

class CategoryList extends React.Component {
	render() {
		return (
			<Query query={Category}>
				{({ loading, error, data }) => {
					if (loading) return <h2>Loading..</h2>
					if (error) return <h2>Error : {error.message}</h2>

					return (
						<div>
							<li>
								{data.category.map((cat, index) => (
									<ul key={index}><Link to={`/category/${cat.categoryName}`}>{cat.categoryName}</Link></ul>
									)
								)}
							</li>
						</div>
					);
				}
				}
			</Query>

		);
	}
}

export default CategoryList;
