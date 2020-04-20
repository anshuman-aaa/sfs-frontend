import gql from 'graphql-tag';

export const BlogFetch = gql`
    query events($id: ID!) {
        blog(id: $id) {
            blogDesc
            blogLogo
            blogTitle
        }
    }
`;