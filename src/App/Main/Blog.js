import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { BlogFetch } from "../Query/BlogFetch";

const Blog = ({
  id: {
    match: {
      params: { id }
    }
  }
}) => {
    const { data, loading, error } = useQuery(BlogFetch, {
        variables: { id }
    });
  console.log(loading, data, error);
    if(loading) return <h1>loading</h1>;
else return <div></div>
};

export default Blog;
