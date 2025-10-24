interface StatCardProps {
	title: string;
	value: number;
	icon: React.ReactNode;
	valueColor: string;
	bgColor: string;
}

export function StatCard({ title, value, icon, valueColor, bgColor }: StatCardProps) {
	return (
		<div className="bg-white p-6 rounded-2xl shadow-lg">
			<div className="flex items-center justify-between">
				<div>
					<p className="text-gray-600 text-sm font-medium">{title}</p>
					<p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
				</div>
				<div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
					{icon}
				</div>
			</div>
		</div>
	);
}