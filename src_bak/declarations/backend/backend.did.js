export const idlFactory = ({ IDL }) => {
  const Ticket = IDL.Record({
    'id' : IDL.Nat,
    'status' : IDL.Text,
    'departureCity' : IDL.Text,
    'departureDate' : IDL.Text,
    'name' : IDL.Text,
    'destinationCity' : IDL.Text,
    'price' : IDL.Text,
  });
  const TicketMaster = IDL.Service({
    'createTicket' : IDL.Func([], [Ticket], []),
    'getNoTicket' : IDL.Func([], [IDL.Nat], []),
    'getTicket' : IDL.Func([IDL.Nat], [Ticket], []),
    'getTicketBuffer' : IDL.Func([], [IDL.Vec(Ticket)], []),
  });
  return TicketMaster;
};
export const init = ({ IDL }) => { return []; };
