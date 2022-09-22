import type { NextPage } from 'next'
import { FollowWidget } from '../components/layouts/FollowWidget'
import { Layout } from '../components/layouts/Index'
import { InfoSidebar } from '../components/layouts/InfoSidebar'
import { NavSidebar } from '../components/layouts/NavSidebar'

interface ProfileProps {}

const ProfilePage: NextPage<ProfileProps> = ({}) => {
	return (
		<Layout title="Profile">
			<div className="flex flex-row justify-between">
				<NavSidebar className="border-r-[1px] border-blue-50" />

				<div className="grow-[8] basis-0 p-5 py-4 md:grow-[5]"></div>

				<InfoSidebar>
					<FollowWidget />
				</InfoSidebar>
			</div>
		</Layout>
	)
}

export default ProfilePage
