import type { Route } from "./+types/dashboard";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ticketStorage } from "../utils/ticketStorage";
import type { Ticket } from "../types/ticket";
import { StatCard } from "../components/StatCard";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Dashboard - Ticketer" },
		{ name: "description", content: "Ticketer Dashboard" },
	];
}

export default function Dashboard() {
	const [user, setUser] = useState<any>(null);
	const [tickets, setTickets] = useState<Ticket[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const currentUser = localStorage.getItem("currentUser");
		if (!currentUser) {
			navigate("/login");
			return;
		}
		setUser(JSON.parse(currentUser));
		setTickets(ticketStorage.getAll());
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("currentUser");
		navigate("/login");
	};

	if (!user) return null;

	return (
		<div className="min-h-screen bg-slate-50">
			<div className="max-w-[1440px] mx-auto">
				{/* Header */}
				<header className="bg-white shadow-sm border-b">
					<div className="px-6 py-4 flex justify-between items-center">
						<div>
							<h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
							<p className="text-gray-600">Welcome back, {user.name}!</p>
						</div>
						<button 
							onClick={handleLogout}
							className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
						>
							Logout
						</button>
					</div>
				</header>

				{/* Main Content */}
				<main className="p-6">
					{/* Statistics Cards */}
					<div className="grid md:grid-cols-3 gap-6 mb-8">
						{[
							{
								title: "Total Tickets",
								value: tickets.length,
								valueColor: "text-gray-800",
								bgColor: "bg-emerald-100",
								icon: <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
							},
							{
								title: "Open Tickets",
								value: tickets.filter(t => t.status === 'open' || t.status === 'in_progress').length,
								valueColor: "text-orange-600",
								bgColor: "bg-orange-100",
								icon: <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							},
							{
								title: "Resolved Tickets",
								value: tickets.filter(t => t.status === 'closed').length,
								valueColor: "text-green-600",
								bgColor: "bg-green-100",
								icon: <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							}
						].map((stat, index) => (
							<StatCard key={index} {...stat} />
						))}
					</div>

					{/* Navigation Section */}
					<div className="bg-white p-8 rounded-2xl shadow-lg">
						<h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
						<div className="grid md:grid-cols-2 gap-4">
							<Link 
								to="/tickets" 
								className="flex items-center p-4 border-2 border-emerald-200 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-colors group"
							>
								<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-200">
									<svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-gray-800">Manage Tickets</h3>
									<p className="text-gray-600 text-sm">View and manage all tickets</p>
								</div>
							</Link>

							<Link 
								to="/tickets/new" 
								className="flex items-center p-4 border-2 border-teal-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 transition-colors group"
							>
								<div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-200">
									<svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-gray-800">Create New Ticket</h3>
									<p className="text-gray-600 text-sm">Add a new support ticket</p>
								</div>
							</Link>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}