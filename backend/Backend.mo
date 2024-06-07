// motoko name=initialize
import Buffer "mo:base/Buffer";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor class TicketMaster() {
  type Ticket = {
    id : Nat;
    name : Text;
    departureCity : Text;
    destinationCity : Text;
    departureDate : Text;
    price : Text;
    status : Text;
  };

  let tickerBuffer = Buffer.Buffer<Ticket>(100);

  public func createTicket(
    name : Text,
    departureCity : Text,
    destinationCity : Text,
    departureDate : Text,
    price : Text,
    status : Text,
  ) : async Ticket {
    let ticket = {
      id = tickerBuffer.size();
      name = name;
      departureCity = departureCity;
      destinationCity = destinationCity;
      departureDate = departureDate;
      price = price;
      status = status;
    };
    tickerBuffer.add(ticket);
    return ticket;
  };

  public func getTicket(id : Nat) : async Ticket {
    let ticket = tickerBuffer.get(id);
    return ticket;
  };

  public func getNoTicket() : async Nat {
    return tickerBuffer.size();
  };

  public func getTicketBuffer() : async [Ticket] {
    return Buffer.toArray(tickerBuffer);
  };

};
