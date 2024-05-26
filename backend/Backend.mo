// motoko name=initialize
import Buffer "mo:base/Buffer";

actor class TicketMaster() {
  type Ticket = {
  id: Nat;
  name: Text;
  departureDate: Text;
  departureCity: Text;
  destinationCity: Text;
  status : Nat;
  owner: Text
};

  let tickerBuffer = Buffer.Buffer<Ticket>(100);

  public func createTicket(name: Text, departureDate: Text, departureCity: Text, destinationCity: Text, status: Nat, owner: Text) : async Ticket {
    let ticket = {id=tickerBuffer.size(); name=name; departureDate=departureDate; departureCity=departureCity; destinationCity=destinationCity; status=status; owner=owner};
    tickerBuffer.add(ticket);
    return ticket;
  };

  public func getTicket(id: Nat) : async Ticket {
    let ticket = tickerBuffer.get(id);
    return ticket;
  };

  public func getNoTicket(): async Nat {
    return tickerBuffer.size();
  };

  public func getTicketBuffer() : async [Ticket] {
    return Buffer.toArray(tickerBuffer);
  };

};

