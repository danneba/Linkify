import { gql } from "@apollo/client";
let category = gql`
  query get_categories($limit: Int) {
    items: categories(limit: $limit) {
      label: category
      value: id
    }
  }
`;

export default category;
