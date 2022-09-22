import { Avatar } from './Avatar'
import { Button } from './Button'

interface InlineFollowProps {
	name: string
	username: string
}

const InlineFollow: React.FC<InlineFollowProps> = ({ name, username }) => {
	return (
		<a href="#" className="flex flex-row items-center gap-2 px-3 py-2 hover:bg-gray-200">
			<Avatar size="2.7rem" />
			<div className="flex grow-[1] basis-0 flex-col">
				<h5 className="text-[15px] font-bold leading-none">{name}</h5>
				<span className="text-sm text-[13px] text-gray-500">{username}</span>
			</div>
			<Button className="text-sm">Follow</Button>
		</a>
	)
}

export { InlineFollow }
