import { gql } from "@apollo/client";
const  searchEvents = gql`
 query searchEvents($filter:events_bool_exp){
    items:events(where:$filter){
      name
      image
      location
      end_date
      description
      category
      view
      thumbnail
      start_date
      rating
    }
  } 
`;