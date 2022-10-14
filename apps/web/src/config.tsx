import {
	HomeIcon as SolidHomeIcon,
	MagnifyingGlassIcon as SolidMagnifyingGlassIcon,
	UserIcon as SolidUserIcon,
} from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon, UserIcon, HomeIcon } from '@heroicons/react/24/outline'

export const navigation = [
	{
		name: 'Home',
		icon: <HomeIcon className="h-8 w-8" />,
		active_icon: <SolidHomeIcon className="h-8 w-8" />,
		href: '/',
	},
	{
		name: 'Explore',
		icon: <MagnifyingGlassIcon className="h-8 w-8" />,
		active_icon: <SolidMagnifyingGlassIcon className="h-8 w-8" />,
		href: '/explore',
	},
	{
		name: 'Profile',
		icon: <UserIcon className="h-8 w-8" />,
		active_icon: <SolidUserIcon className="h-8 w-8" />,
		href: '/profile',
	},
]
