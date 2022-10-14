interface NavItemProps {
	children: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
	return (
		<div className="flex cursor-pointer flex-row items-center gap-4 rounded-full py-2 px-3 text-lg font-semibold hover:bg-gray-200">
			{children}
		</div>
	)
}

export { NavItem }
