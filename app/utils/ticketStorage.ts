import type { Ticket, CreateTicketData, UpdateTicketData } from '../types/ticket';

const STORAGE_KEY = 'tickets';

export const ticketStorage = {
  getAll(): Ticket[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  create(data: CreateTicketData): Ticket {
    const tickets = this.getAll();
    const ticket: Ticket = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    tickets.push(ticket);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
    return ticket;
  },

  update(data: UpdateTicketData): Ticket | null {
    const tickets = this.getAll();
    const index = tickets.findIndex(t => t.id === data.id);
    if (index === -1) return null;
    
    tickets[index] = {
      ...tickets[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
    return tickets[index];
  },

  delete(id: string): boolean {
    const tickets = this.getAll();
    const filtered = tickets.filter(t => t.id !== id);
    if (filtered.length === tickets.length) return false;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },

  getById(id: string): Ticket | null {
    return this.getAll().find(t => t.id === id) || null;
  }
};