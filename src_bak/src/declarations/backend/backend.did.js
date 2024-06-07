export const idlFactory = ({ IDL }) => {
  const Ticket = IDL.Record({
    'id' : IDL.Nat,
    'status' : IDL.Nat,
    'departureCity' : IDL.Text,
    'departureDate' : IDL.Text,
    'owner' : IDL.Text,
    'name' : IDL.Text,
    'destinationCity' : IDL.Text,
  });
  const TicketMaster = IDL.Service({
    'createTicket' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Nat, IDL.Text],
        [Ticket],
        [],
      ),
    'getNoTicket' : IDL.Func([], [IDL.Nat], []),
    'getTicket' : IDL.Func([IDL.Nat], [Ticket], []),
    'getTicketBuffer' : IDL.Func([], [IDL.Vec(Ticket)], []),
  });
  return TicketMaster;
};
export const init = ({ IDL }) => { return []; };
