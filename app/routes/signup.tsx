import type { Route } from "./+types/signup";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Toast } from "../components/Toast";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Sign Up - Ticketer" },
		{ name: "description", content: "Create your Ticketer account" },
	];
}

export default function Signup() {
	const [formData, setFormData] = useState({ name: "", email: "", password: "" });
	const [errors, setErrors] = useState({ name: "", email: "", password: "" });
	const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrors({ name: "", email: "", password: "" });

		// Validation
		const newErrors = { name: "", email: "", password: "" };
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email) newErrors.email = "Email is required";
		else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
		if (!formData.password) newErrors.password = "Password is required";
		else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

		if (newErrors.name || newErrors.email || newErrors.password) {
			setErrors(newErrors);
			return;
		}

		// Check if user exists
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		if (users.find((u: any) => u.email === formData.email)) {
			setToast({ message: "Email already exists", type: "error" });
			return;
		}

		// Register user
		const newUser = { ...formData, id: Date.now() };
		users.push(newUser);
		localStorage.setItem("users", JSON.stringify(users));
		localStorage.setItem("currentUser", JSON.stringify(newUser));

		setToast({ message: "Account created successfully!", type: "success" });
		setTimeout(() => navigate("/dashboard"), 1000);
	};

	return (
		<div className="min-h-screen bg-slate-50 flex items-center justify-center">
			{toast && (
				<Toast 
					message={toast.message} 
					type={toast.type} 
					onClose={() => setToast(null)} 
				/>
			)}

			<div className="max-w-md w-full mx-4">
				<div className="bg-white p-8 rounded-2xl shadow-lg">
					<h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Join Ticketer</h1>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
							<input 
								type="text" 
								value={formData.name}
								onChange={(e) => setFormData({...formData, name: e.target.value})}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
									errors.name ? "border-red-500" : "border-gray-300"
								}`}
							/>
							{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
							<input 
								type="email" 
								value={formData.email}
								onChange={(e) => setFormData({...formData, email: e.target.value})}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
									errors.email ? "border-red-500" : "border-gray-300"
								}`}
							/>
							{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
							<input 
								type="password" 
								value={formData.password}
								onChange={(e) => setFormData({...formData, password: e.target.value})}
								className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
									errors.password ? "border-red-500" : "border-gray-300"
								}`}
							/>
							{errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
						</div>
						<button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
							Sign Up
						</button>
					</form>
				</div>
				<div className="mt-4 text-center">
					<p className="text-gray-600">Already have an account? <Link to="/login" className="text-emerald-600 hover:underline">Login</Link></p>
				</div>
			</div>
		</div>
	);
}