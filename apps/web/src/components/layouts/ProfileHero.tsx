import { CalendarDaysIcon } from '@heroicons/react/24/outline'

interface ProfileHeroProps {
	className?: string
}

const ProfileHero: React.FC<ProfileHeroProps> = ({ className = '' }) => {
	return (
		<div className={`${className}`}>
			<div>
				<h2 className="text-3xl">
					<b>aerox0</b>
				</h2>
				<span className="text-gray-500">@aerox0</span>
			</div>
			<div className="flex flex-row items-center gap-2">
				<CalendarDaysIcon className="h-5 w-5" />
				<span>Joined December 2014</span>
			</div>
			<div className="flex flex-row gap-4">
				<span>
					<b>35</b> Following
				</span>
				<span>
					<b>1</b> Follower
				</span>
			</div>
		</div>
	)
}

export default ProfileHero
