import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Ticket {
  'id' : bigint,
  'status' : string,
  'departureCity' : string,
  'departureDate' : string,
  'name' : string,
  'destinationCity' : string,
  'price' : string,
}
export interface TicketMaster {
  'createTicket' : ActorMethod<[], Ticket>,
  'getNoTicket' : ActorMethod<[], bigint>,
  'getTicket' : ActorMethod<[bigint], Ticket>,
  'getTicketBuffer' : ActorMethod<[], Array<Ticket>>,
}
export interface _SERVICE extends TicketMaster {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
