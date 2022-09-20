import { Button } from '../components/Button'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { Avatar } from '../components/Avatar'

interface TweetPostProps {
	className?: string
}

const TweetPost: React.FC<TweetPostProps> = ({ className = '' }) => {
	return (
		<div className={className}>
			<div className="flex flex-row gap-5">
				<Avatar />

				<div className="grow-[1] basis-0">
					<textarea
						className="mt-2 w-full text-lg outline-none"
						placeholder="What's happening?"
					></textarea>
				</div>
			</div>
			<div className="mt-2 ml-auto flex max-w-[calc(100%_-_4.25rem)] flex-row items-center justify-between">
				<PhotoIcon className="h-6 w-6" />
				<Button>Tweet</Button>
			</div>
		</div>
	)
}

export { TweetPost }