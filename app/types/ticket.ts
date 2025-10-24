export type TicketStatus = 'open' | 'in_progress' | 'closed';

export interface Ticket {
  id: string;
  title: string;
  description?: string;
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTicketData {
  title: string;
  description?: string;
  status: TicketStatus;
}

export interface UpdateTicketData extends CreateTicketData {
  id: string;
}