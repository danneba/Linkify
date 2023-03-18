import { gql } from "@apollo/client";
let category = gql`
  query get_categories {
    items: categories {
      label: category
      value: id
    }
  }
`;

export default category;
