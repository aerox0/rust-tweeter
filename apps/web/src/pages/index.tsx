import { Post } from '../components/components/Post'
import { TweetPost } from '../components/components/TweetPost'
import Layout from '../components/layouts/Index'
import { InfoSidebar } from '../components/layouts/InfoSidebar'
import { NavSidebar } from '../components/layouts/NavSidebar'

const Home = () => (
	<Layout title="Home">
		<div className="flex flex-row justify-between">
			<NavSidebar className="border-r-[1px] border-blue-50" />

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

			<InfoSidebar />
		</div>
	</Layout>
)

export default Home
