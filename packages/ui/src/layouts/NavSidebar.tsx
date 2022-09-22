interface NavSidebarProps {
	children: React.ReactNode
	className?: string
}

const NavSidebar: React.FC<NavSidebarProps> = ({ children, className = '' }) => {
	return <aside className={`grow-[2] basis-0 py-2 md:px-3 ${className}`}>{children}</aside>
}

export { NavSidebar }
