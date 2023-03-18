import { gql } from "@apollo/client";
let categories = gql`
  query get_categories {
    items: categories {
      label: category
      value: id
    }
  }
`;

export default categories;
