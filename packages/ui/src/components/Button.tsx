interface ButtonProps {
	children: React.ReactNode
	className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
	return (
		<button
			className={`rounded-full bg-blue-500 px-3 py-1 font-semibold text-white hover:bg-blue-400 ${className}`}
		>
			{children}
		</button>
	)
}

export { Button }
