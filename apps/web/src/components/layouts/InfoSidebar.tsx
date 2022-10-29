interface InfoSidebarProps {
	children?: React.ReactNode
}

const InfoSidebar: React.FC<InfoSidebarProps> = ({ children }) => {
	return (
		<aside className=" relative hidden grow-[2] basis-0 border-l-[1px] border-blue-50 py-2 px-3 lg:block">
			<div className="sticky top-0 left-0 right-0">
				{children}

				<div className="text-sm text-gray-400">
					&copy; {new Date(Date.now()).getFullYear()} Rust Tweeter Clone.
				</div>
			</div>
		</aside>
	)
}

export default InfoSidebar
