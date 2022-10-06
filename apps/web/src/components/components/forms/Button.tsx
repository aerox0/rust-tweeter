interface ButtonProps {
	children: React.ReactNode
	className?: string
	type?: 'solid' | 'outline'
}

const Button: React.FC<ButtonProps> = ({ children, className = '', type = 'solid' }) => {
	const default_style = 'border border-transparent rounded-full px-3 py-1 font-semibold'

	const type_style =
		type === 'solid'
			? 'bg-blue-500 text-white hover:bg-blue-400'
			: 'border-white border-blue-500 hover:bg-blue-200'

	return <button className={`${default_style} ${type_style} ${className}`}>{children}</button>
}

export { Button }
