import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { RoundedInput } from '../components/forms/RoundedInput'
import { InlineFollow } from '../components/InlineFollow'
import { RoundedBlock } from '../components/RoundedBlock'
import { TagInfo } from '../components/TagInfo'

interface InfoSidebarProps {}

const InfoSidebar: React.FC<InfoSidebarProps> = ({}) => {
	return (
		<aside className=" relative hidden grow-[1] basis-0 border-l-[1px] border-blue-50 py-2 px-3 lg:block">
			<div className="sticky top-0 left-0 right-0">
				<RoundedInput className="mb-4" Icon={MagnifyingGlassIcon} placeholder="Search..." />

				<RoundedBlock title="Trends for you">
					<TagInfo name="Python" count="100k" />
					<TagInfo name="GraphQL" count="100k" />
					<TagInfo name="Typescript" count="500k" />
					<TagInfo name="Javascript" count="300k" />
				</RoundedBlock>

				<RoundedBlock title="Who to follow">
					<InlineFollow name="Github" username="@github" />
					<InlineFollow name="Redux" username="@redux" />
					<InlineFollow name="Binance" username="@binance" />
				</RoundedBlock>

				<div className="text-sm text-gray-400">
					&copy; {new Date(Date.now()).getFullYear()} Rust Tweeter Clone.
				</div>
			</div>
		</aside>
	)
}

export { InfoSidebar }
