interface ButtonProps {
	children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
	return (
		<button className="rounded-full bg-blue-500 px-3 py-1 font-semibold text-white hover:bg-blue-400">
			{children}
		</button>
	)
}

export { Button }
