import type { NextPage } from 'next'
import FollowWidget from '../components/layouts/FollowWidget'
import Layout from '../components/layouts/Index'
import InfoSidebar from '../components/layouts/InfoSidebar'
import NavSidebar from '../components/layouts/NavSidebar'
import SearchWidget from '../components/layouts/SearchWidget'
import TrendsForYouWidget from '../components/layouts/TrendsForYouWidget'

interface PageProps {}

const ExplorePage: NextPage<PageProps> = ({}) => {
	return (
		<Layout title="Explore">
			<div className="flex flex-row justify-between">
				<NavSidebar className="border-r-[1px] border-blue-50" />

				<div className="grow-[8] basis-0 p-5 py-4 md:grow-[5]">
					<SearchWidget />

					<div>
						<TrendsForYouWidget />
					</div>
				</div>

				<InfoSidebar>
					<FollowWidget />
				</InfoSidebar>
			</div>
		</Layout>
	)
}

export default ExplorePage
