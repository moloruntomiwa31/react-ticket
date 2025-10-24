interface DeleteConfirmationModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title?: string;
	message?: string;
}

export function DeleteConfirmationModal({ 
	isOpen, 
	onClose, 
	onConfirm, 
	title = "Delete Item", 
	message = "Are you sure you want to delete this item? This action cannot be undone." 
}: DeleteConfirmationModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
				<h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
				<p className="text-gray-600 mb-4">{message}</p>
				<div className="flex gap-3 justify-end">
					<button 
						onClick={onClose}
						className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
					>
						Cancel
					</button>
					<button 
						onClick={onConfirm}
						className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}