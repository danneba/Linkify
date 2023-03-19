import { gql } from "@apollo/client";
const AddEvent = gql`
  mutation addEvent($items: [events_insert_input!]!) {
    insert_events(objects: $items) {
      returning {
        id
      }
    }
  }
`;
const popularEvents = gql`
  query popularEvents($limit: Int) {
    items: events(limit: $limit, order_by: { view: desc }) {
      id
      image
      location
      name
      rating
      start_date
      thumbnail
      updated_at
      view
      host_id
      end_date
      description
      created_at
      category
    }
  }
`;
const upcomingEvents = gql`
  query upcomingEvents($limit: Int) {
    items: events(
      limit: $limit
      order_by: { start_date: asc }
      where: { start_date: { _gt: "now()" } }
    ) {
      id
      image
      location
      name
      rating
      start_date
      thumbnail
      updated_at
      view
      host_id
      end_date
      description
      created_at
      category
    }
  }
`;
const allEvents = gql`
  query popularEvents($limit: Int, $where: events_bool_exp) {
    items: events(
      limit: $limit
      order_by: { created_at: desc }
      where: $where
    ) {
      id
      image
      location
      name
      rating
      start_date
      thumbnail
      updated_at
      view
      host_id
      end_date
      description
      created_at
      category
    }
  }
`;

export { AddEvent, popularEvents, upcomingEvents, allEvents };
