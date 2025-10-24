import type { Route } from "./+types/tickets";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { ticketStorage } from "../utils/ticketStorage";
import { Toast } from "../components/Toast";
import { DeleteConfirmationModal } from "../components/DeleteConfirmationModal";
import { TicketCard } from "../components/TicketCard";
import type { Ticket } from "../types/ticket";

export function meta({}: Route) {
  return [
    { title: "Tickets - Ticketer" },
    { name: "description", content: "Manage all tickets" },
  ];
}



export default function Tickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/login");
      return;
    }
    loadTickets();
  }, []);

  const loadTickets = () => {
    setTickets(ticketStorage.getAll());
  };

  const handleDelete = (id: string) => {
    if (ticketStorage.delete(id)) {
      loadTickets();
      setToast({ message: 'Ticket deleted successfully', type: 'success' });
    } else {
      setToast({ message: 'Failed to delete ticket', type: 'error' });
    }
    setDeleteConfirm(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1440px] mx-auto">
        <header className="bg-white shadow-sm border-b">
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Tickets</h1>
              <p className="text-gray-600">Manage all support tickets</p>
            </div>
            <div className="flex gap-3">
              <Link 
                to="/tickets/new"
                className="bg-emerald-600 text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                New Ticket
              </Link>
              <Link 
                to="/dashboard"
                className="bg-gray-600 text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </header>

        <main className="p-6">
          {tickets.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-2">No tickets found</h3>
              <p className="text-gray-500 mb-4">Get started by creating your first ticket</p>
              <Link 
                to="/tickets/new"
                className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Create Ticket
              </Link>
            </div>
          ) : (
            <div className="grid gap-4">
              {tickets.map((ticket) => (
                <TicketCard 
                  key={ticket.id} 
                  ticket={ticket} 
                  onDelete={setDeleteConfirm} 
                />
              ))}
            </div>
          )}
        </main>
      </div>

      <DeleteConfirmationModal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        onConfirm={() => handleDelete(deleteConfirm!)}
        title="Delete Ticket"
        message="Are you sure you want to delete this ticket? This action cannot be undone."
      />

      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
}