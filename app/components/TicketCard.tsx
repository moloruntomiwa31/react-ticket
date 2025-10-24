import { Link } from "react-router";
import type { Ticket } from "../types/ticket";

interface TicketCardProps {
	ticket: Ticket;
	onDelete: (id: string) => void;
}

const statusColors = {
	open: 'bg-green-100 text-green-800 border-green-200',
	in_progress: 'bg-amber-100 text-amber-800 border-amber-200',
	closed: 'bg-gray-100 text-gray-800 border-gray-200'
};

export function TicketCard({ ticket, onDelete }: TicketCardProps) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-sm border">
			<div className="flex justify-between items-start mb-3">
				<div className="flex-1">
					<h3 className="text-lg font-semibold text-gray-900 mb-2">{ticket.title}</h3>
					{ticket.description && (
						<p className="text-gray-600 mb-3">{ticket.description}</p>
					)}
				</div>
				<span className={`px-3 py-1 rounded-full text-sm font-medium border capitalize ${statusColors[ticket.status]}`}>
					{ticket.status.replace('_', ' ')}
				</span>
			</div>
			
			<div className="flex justify-between items-center text-sm text-gray-500 mb-4">
				<span>Created: {new Date(ticket.createdAt).toLocaleDateString()}</span>
				<span>Updated: {new Date(ticket.updatedAt).toLocaleDateString()}</span>
			</div>

			<div className="flex gap-2">
				<Link 
					to={`/tickets/${ticket.id}/edit`}
					className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-sm"
				>
					Edit
				</Link>
				<button 
					onClick={() => onDelete(ticket.id)}
					className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm"
				>
					Delete
				</button>
			</div>
		</div>
	);
}