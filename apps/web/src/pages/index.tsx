import { HomeIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import {
	Logo,
	NavItem,
	NavSidebar,
	Post,
	TweetPost,
	RoundedInput,
	TagInfo,
	RoundedBlock,
	InlineFollow,
	InfoSidebar,
} from '@w/ui'
import Layout from '../components/layouts/Index'

const navigation = [
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

const Home = () => (
	<Layout title="Home">
		<div className="flex flex-row justify-between">
			<NavSidebar className="border-r-[1px] border-blue-50">
				<Logo />

				<nav className="mt-5 flex flex-col gap-2">
					{navigation.map((nav) => (
						<NavItem key={nav.name}>
							{nav.icon}
							<span className="hidden md:block">{nav.name}</span>
						</NavItem>
					))}
				</nav>
			</NavSidebar>

			<div className="grow-[8] basis-0 py-4 md:grow-[5]">
				<div className="mb-3 px-5 text-lg font-bold">Home</div>

				<TweetPost className="px-5 pb-5" />

				<div>
					<div className="border-t-[1px] border-blue-50 p-5">
						<Post name="Simple Name" username="username" hours_ago="2h">
							Some basic text that have no sense.
						</Post>
					</div>
					<div className="mt-2 border-t-[1px] border-blue-50 p-5">
						<Post name="Simple Name" username="username" hours_ago="2h">
							Some basic text that have no sense.
						</Post>
					</div>
					<div className="mt-2 border-t-[1px] border-blue-50 p-5">
						<Post name="Simple Name" username="username" hours_ago="2h">
							Some basic text that have no sense.
						</Post>
					</div>
				</div>
			</div>

			<InfoSidebar>
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
			</InfoSidebar>
		</div>
	</Layout>
)

export default Home
