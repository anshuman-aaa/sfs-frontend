import gql from 'graphql-tag';

export const BlogFetch = gql`
    query blog($id: ID!) {
        findBlog(id: $id) {
            blogDesc
            blogLogo
            blogTitle
        }
    }
`;