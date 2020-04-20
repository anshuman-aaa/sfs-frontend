import gql from 'graphql-tag';

export const CategoryFetch =  gql`
    {
        category {
            categoryId
            categoryName
        }
    }
`;
