import { gql } from "@apollo/client";

const CHARACTER_QUERY = gql`
    query Character($id: ID!) {
        character(id: $id) {
            id
            name
            image
            species
            gender
        }
    }
`;

const CHARACTERS_QUERY = gql`
    query Characters($page: Int = 1, $filter: FilterCharacter = {}) {
        characters(page: $page, filter: $filter) {
            results {
                id
                name
                image
            }
            info {
                count,
                pages,
                next,
                prev
            }
        }
    }
`;


export {
    CHARACTER_QUERY,
    CHARACTERS_QUERY
}
