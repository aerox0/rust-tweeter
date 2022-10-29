import { ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/outline'
import Avatar from './Avatar'
import IconText from './IconText'

interface TweetCardProps {
	name: string
	username: string
	hours_ago: string
	children: React.ReactNode
}

const TweetCard: React.FC<TweetCardProps> = ({ name, username, hours_ago, children }) => {
	return (
		<div className="flex flex-row gap-4">
			<Avatar />
			<div className="flex w-full flex-col">
				<div className="flex flex-row font-semibold">
					{name}
					<div className="ml-2 font-normal text-gray-400">
						@{username}
						<span> - {hours_ago}</span>
					</div>
				</div>
				<div className="mt-1">{children}</div>
				<div className="mt-2 flex w-full flex-row gap-8">
					<IconText icon={<ChatBubbleLeftIcon className="h-4 w-4" />}>22</IconText>
					<IconText icon={<HeartIcon className="h-4 w-4" />}>22</IconText>
				</div>
			</div>
		</div>
	)
}

export default TweetCard
