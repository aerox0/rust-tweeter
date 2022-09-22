interface InfoSidebarProps {
	children: React.ReactNode
}

const InfoSidebar: React.FC<InfoSidebarProps> = ({ children }) => {
	return (
		<aside className=" relative hidden grow-[1] basis-0 border-l-[1px] border-blue-50 py-2 px-3 lg:block">
			<div className="sticky top-0 left-0 right-0">{children}</div>
		</aside>
	)
}

export { InfoSidebar }
