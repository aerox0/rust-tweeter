interface RoundedBlockProps {
	title: string
	children: React.ReactNode
}

const RoundedBlock: React.FC<RoundedBlockProps> = ({ title, children }) => {
	return (
		<div className="mb-4 rounded-2xl bg-gray-100 py-3">
			<h3 className="mb-2 px-3 text-lg font-bold">{title}</h3>

			{children}
		</div>
	)
}

export { RoundedBlock }
