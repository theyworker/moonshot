import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Ticket {
  'id' : bigint,
  'status' : bigint,
  'departureCity' : string,
  'departureDate' : string,
  'owner' : string,
  'name' : string,
  'destinationCity' : string,
}
export interface TicketMaster {
  'createTicket' : ActorMethod<
    [string, string, string, string, bigint, string],
    Ticket
  >,
  'getNoTicket' : ActorMethod<[], bigint>,
  'getTicket' : ActorMethod<[bigint], Ticket>,
  'getTicketBuffer' : ActorMethod<[], Array<Ticket>>,
}
export interface _SERVICE extends TicketMaster {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
