import { Avatar } from '../components/Avatar'

interface PostProps {
	name: string
	username: string
	hours_ago: string
	children: React.ReactNode
}

const Post: React.FC<PostProps> = ({ name, username, hours_ago, children }) => {
	return (
		<div className="flex flex-row gap-4">
			<Avatar />
			<div className="flex flex-col">
				<div className="flex flex-row font-semibold">
					{name}
					<div className="ml-2 font-normal text-gray-400">
						@{username}
						<span> - {hours_ago}</span>
					</div>
				</div>
				<div className="mt-1">{children}</div>
			</div>
		</div>
	)
}

export { Post }
