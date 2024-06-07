// motoko name=initialize
import Buffer "mo:base/Buffer";

actor class TicketMaster() {
  type Ticket = {
    id : Nat;
    name : Text;
    departureDate : Text;
    departureCity : Text;
    destinationCity : Text;
    status : Text;
    price : Text;
  };

  let tickerBuffer = Buffer.Buffer<Ticket>(100);

  public func createTicket(
    name : Text,
    departureDate : Text,
    departureCity : Text,
    destinationCity : Text,
    status : Text,
    owner : Text,
  ) : async Ticket {
    // let ticket = {
    //   id = tickerBuffer.size();
    //   name = "Dev";
    //   departureDate = "2022-01-01";
    //   departureCity = "New York";
    //   destinationCity = "London";
    //   status = "Pending";
    //   price = "50";
    // };

    let ticket = {
      id = tickerBuffer.size();
      name = name;
      departureDate = departureDate;
      departureCity = departureCity;
      destinationCity = destinationCity;
      status = status;
      price = owner;
    };
    tickerBuffer.add(ticket);
    return ticket;
  };

  public func newTicket(
    name : Text,
    departureDate : Text,
    departureCity : Text,
    destinationCity : Text,
    price: Text
  ) : async Ticket {
    let ticket = {
      id = tickerBuffer.size();
      name = name;
      departureDate = departureDate;
      departureCity = departureCity;
      destinationCity = destinationCity;
      status = "Pending";
      price = price;
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
