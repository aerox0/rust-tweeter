import { HomeIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

export const navigation = [
	{
		name: 'Home',
		icon: <HomeIcon className="h-8 w-8" />,
	},
	{
		name: 'Explore',
		icon: <MagnifyingGlassIcon className="h-8 w-8" />,
	},
	{
		name: 'Profile',
		icon: <UserIcon className="h-8 w-8" />,
	},
]
