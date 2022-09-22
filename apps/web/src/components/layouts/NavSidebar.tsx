import { navigation } from '../../config'
import { Logo } from '../components/Logo'
import { NavItem } from '../components/NavItem'

interface NavSidebarProps {
	className?: string
}

const NavSidebar: React.FC<NavSidebarProps> = ({ className = '' }) => {
	return (
		<aside className={`grow-[2] basis-0 py-2 md:px-3 ${className}`}>
			<Logo />

			<nav className="mt-5 flex flex-col gap-2">
				{navigation.map((nav) => (
					<NavItem key={nav.name}>
						{nav.icon}
						<span className="hidden md:block">{nav.name}</span>
					</NavItem>
				))}
			</nav>
		</aside>
	)
}

export { NavSidebar }
