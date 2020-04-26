import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import Album from "../Common/Album";

const Categories = gql`
  query categories {
    category {
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
      <Query query={Categories}>
        {({ loading, error, data }) => {
          if (loading) return <h2>Loading..</h2>;
          if (error) return <h2>Error : {error.message}</h2>;

          return (
            <div>
              <Album data={data} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default CategoryList;
