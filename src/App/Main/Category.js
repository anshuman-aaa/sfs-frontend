import gql from 'graphql-tag';
import React from "react";
import { Query } from "react-apollo";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BlogList = gql`
	query findBlogbyCat($categoryId: Int!){
		findBlogbyCat(categoryId: $categoryId) {
			blogTitle
			_id
		}
	}
`;

class CategoryList extends React.Component {
	render() {
		return (
			<Query query={BlogList} variables={{ categoryId: Number(this.props.match.params.id) }}>
				{({ loading, error, data }) => {
					if (loading) return <h2>Loading..</h2>
					if (error) return <h2>Error : {error.message}</h2>

					return (
						<div>
							<li>
								{data.findBlogbyCat.map((blog, index) => (
									<ul key={index}><Link to={`/blog/${blog._id}`}>{blog.blogTitle}</Link></ul>
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
