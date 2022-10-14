import type { NextPage } from 'next'
import { CreateTweet } from '../components/components/CreateTweet'
import { TweetCard } from '../components/components/Tweet'
import { FollowWidget } from '../components/layouts/FollowWidget'
import { Layout } from '../components/layouts/Index'
import { InfoSidebar } from '../components/layouts/InfoSidebar'
import { NavSidebar } from '../components/layouts/NavSidebar'
import { SearchWidget } from '../components/layouts/SearchWidget'
import { TrendsForYouWidget } from '../components/layouts/TrendsForYouWidget'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
	return (
		<Layout title="Home">
			<div className="flex flex-row justify-between">
				<NavSidebar className="border-r-[1px] border-blue-50" />

				<div className="grow-[8] basis-0 py-4 md:grow-[5]">
					<div className="mb-3 px-5 text-lg font-bold">Home</div>

					<CreateTweet className="px-5 pb-5" />

					<div>
						<div className="border-t-[1px] border-blue-50 p-5">
							<TweetCard name="Simple Name" username="username" hours_ago="2h">
								Some basic text that have no sense.
							</TweetCard>
						</div>
						<div className="mt-2 border-t-[1px] border-blue-50 p-5">
							<TweetCard name="Simple Name" username="username" hours_ago="2h">
								Some basic text that have no sense.
							</TweetCard>
						</div>
						<div className="mt-2 border-t-[1px] border-blue-50 p-5">
							<TweetCard name="Simple Name" username="username" hours_ago="2h">
								Some basic text that have no sense.
							</TweetCard>
						</div>
					</div>
				</div>

				<InfoSidebar>
					<SearchWidget />
					<TrendsForYouWidget />
					<FollowWidget />
				</InfoSidebar>
			</div>
		</Layout>
	)
}

export default Home
