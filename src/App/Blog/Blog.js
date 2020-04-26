import React from "react";
import { Query } from "react-apollo";
import { BlogFetch } from "../Query/BlogFetch";

class Blog extends React.Component {
  render() {
    return (
      <Query query={BlogFetch} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <h2>Loading..</h2>;
          if (error) return <h2>Error : {error.message}</h2>;

          return (
            <div>
              <h1>{data.findBlog.blogTitle}</h1>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Blog;
