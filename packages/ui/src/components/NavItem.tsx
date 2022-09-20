interface NavItemProps {
	href?: string
	children: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ href = '#', children }) => {
	return (
		<a
			href={href}
			className="flex flex-row items-center gap-4 rounded-full py-2 px-3 text-lg font-semibold hover:bg-gray-200"
		>
			{children}
		</a>
	)
}

export { NavItem }
