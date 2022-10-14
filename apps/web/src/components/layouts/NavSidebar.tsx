import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { navigation } from '../../config'
import { Logo } from '../components/Logo'
import { NavItem } from '../components/NavItem'

interface NavSidebarProps {
	className?: string
}

const NavSidebar: React.FC<NavSidebarProps> = ({ className = '' }) => {
	const { pathname } = useRouter()

	const isCurrentPage = useCallback(
		(path: string, exact = false) => (exact ? pathname === path : pathname.startsWith(path)),
		[pathname]
	)

	return (
		<aside className={`grow-[2] basis-0 py-2 md:px-3 ${className}`}>
			<Logo />

			<nav className="mt-5 flex flex-col gap-2">
				{navigation.map((nav) => (
					<Link key={nav.name} href={nav.href} passHref>
						<a>
							<NavItem>
								{isCurrentPage(nav.href, true) ? nav.active_icon : nav.icon}
								<span className="hidden md:block">{nav.name}</span>
							</NavItem>
						</a>
					</Link>
				))}
			</nav>
		</aside>
	)
}

export { NavSidebar }
