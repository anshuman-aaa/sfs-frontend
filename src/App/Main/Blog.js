import React from "react";
import { Query } from "react-apollo";
import { BlogFetch } from "../Query/BlogFetch";

// const Blog = ({
//   id: {
//     match: {
//       params: { id }
//     }
//   }
// }) => {
//   const { data, loading, error } = useQuery(BlogFetch, {
//     variables: { id }
//   });
//   console.log(loading, data, error);
//   if (loading) return <h1>Loading</h1>;
//   if (error) return <div>Error</div>
//   else return <div>{ data }</div>
// };

class Blog extends React.Component {
  render() {
    return (
      <Query query={BlogFetch} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <h2>Loading..</h2>
          if (error) return <h2>Error : {error.message}</h2>

          return (
            <div>
              <h1>{data.findBlog.blogTitle}</h1>
            </div>
          );
        }
        }
      </Query>

    );
  }
}

export default Blog;
