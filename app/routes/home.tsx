import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Ticketer - Your Ultimate Ticketing Solution" },
		{ name: "description", content: "Welcome to Ticketer! Your one-stop solution for all ticketing management needs." },
	];
}

export default function Home() {
	return (
		<div className="min-h-screen bg-slate-50">
			{/* Main Container */}
			<div className="max-w-[1440px] mx-auto">
				{/* Hero Section */}
				<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
					{/* Wavy Background */}
					<div className="absolute inset-0 bg-linear-to-br from-emerald-600 to-teal-700">
						<svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
							<path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
					</div>

					{/* Decorative Circles */}
					<div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-sm"></div>
					<div className="absolute top-40 right-20 w-20 h-20 bg-orange-300/20 rounded-full"></div>
					<div className="absolute bottom-40 left-1/4 w-16 h-16 bg-cyan-300/20 rounded-full"></div>

					{/* Hero Content */}
					<div className="relative z-10 text-center px-6 max-w-4xl">
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
							Ticketer
						</h1>
						<p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
							Your ultimate solution for seamless ticket management and event organization.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link to="/signup" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg text-center">
								Get Started
							</Link>
							<Link to="/login" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors text-center">
								Login
							</Link>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20 px-6">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
							Why Choose Ticketer?
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
								<div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
									<svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-4">Easy Ticket Management</h3>
								<p className="text-gray-600">Create, manage, and track tickets effortlessly with our intuitive interface.</p>
							</div>

							<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
								<div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
									<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-4">Lightning Fast</h3>
								<p className="text-gray-600">Process tickets and manage events with blazing speed and reliability.</p>
							</div>

							<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
								<div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
									<svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-4">Secure & Reliable</h3>
								<p className="text-gray-600">Your data is protected with enterprise-grade security and 99.9% uptime.</p>
							</div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-gray-800 text-white py-12 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="grid md:grid-cols-4 gap-8">
							<div>
								<h3 className="text-2xl font-bold mb-4">Ticketer</h3>
								<p className="text-gray-400">Your ultimate ticketing solution for seamless event management.</p>
							</div>
							<div>
								<h4 className="font-semibold mb-4">Product</h4>
								<ul className="space-y-2 text-gray-400">
									<li><a href="#" className="hover:text-white transition-colors">Features</a></li>
									<li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
									<li><a href="#" className="hover:text-white transition-colors">API</a></li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold mb-4">Company</h4>
								<ul className="space-y-2 text-gray-400">
									<li><a href="#" className="hover:text-white transition-colors">About</a></li>
									<li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
									<li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold mb-4">Support</h4>
								<ul className="space-y-2 text-gray-400">
									<li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
									<li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
									<li><a href="#" className="hover:text-white transition-colors">Status</a></li>
								</ul>
							</div>
						</div>
						<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
							<p>&copy; 2025 Ticketer. All rights reserved.</p>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
