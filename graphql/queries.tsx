import { gql } from '@apollo/client';

export const GET_PROMOTED_PRODUCTS = gql`
    query getPromotedProducts {
        getPromotedProducts {
            name
            description
            pageLink
            imageURL
        }
    }
`;

export const GET_SEARCHSUGGESTION_PRODUCTS = gql`
    query getSuggestedSearchProducts($text: String) {
        getSuggestedSearchProducts(text: $text) {
            name
        }
    }
`;