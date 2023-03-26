import { gql } from "@apollo/client";
let insertTicket = gql`
  mutation insertTicketInfo(
    $available_tickets: Int
    $general_admission: String
    $full_capacity: Int
    $vip: String
    $vvip: String
    $event_id: uuid!
    $free: Boolean
  ) {
    insert_ticket(
      objects: {
        available_tickets: $available_tickets
        full_capacity: $full_capacity
        general_admission: $general_admission
        vip: $vip
        vvip: $vvip
        event_id: $event_id
        free: $free
      }
    ) {
      returning {
        id
      }
    }
  }
`;
let getTicket = gql`
  query getTicket($event_id: uuid!) {
    ticket(where: { event_id: { _eq: $event_id } }) {
      available_tickets
      created_at
      event_id
      full_capacity
      general_admission
      host_id
      id
      updated_at
      vip
      vvip
    }
  }
`;

export { insertTicket, getTicket };
