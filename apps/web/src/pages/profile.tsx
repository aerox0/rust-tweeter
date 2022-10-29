import { Tab } from '@headlessui/react'
import type { NextPage } from 'next'
import Avatar from '../components/components/Avatar'
import Button from '../components/components/forms/Button'
import TweetCard from '../components/components/Tweet'
import FollowWidget from '../components/layouts/FollowWidget'
import Layout from '../components/layouts/Index'
import InfoSidebar from '../components/layouts/InfoSidebar'
import NavSidebar from '../components/layouts/NavSidebar'
import ProfileHero from '../components/layouts/ProfileHero'
import TrendsForYouWidget from '../components/layouts/TrendsForYouWidget'
import { cls } from '../utils/helpers'

interface PageProps {}

const ProfilePage: NextPage<PageProps> = ({}) => {
	const tabs = [
		{
			name: 'Tweets',
			content: (
				<TweetCard name="Aerox" username="aerox0" hours_ago="5h">
					Asd
				</TweetCard>
			),
		},
		{
			name: 'Likes',
			content: (
				<TweetCard name="Aerox" username="aerox0" hours_ago="5h">
					Asd
				</TweetCard>
			),
		},
	]

	return (
		<Layout title="Profile">
			<div className="flex flex-row justify-between">
				<NavSidebar className="border-r-[1px] border-blue-50" />

				<div className="grow-[8] basis-0 p-5 py-4 md:grow-[5]">
					<div className="h-52 bg-blue-300"></div>

					<div className="flex items-center justify-between gap-4">
						<Avatar size="7rem" className="-mt-14" />
						<div>
							<Button type="outline">Edit Profile</Button>
						</div>
					</div>

					<ProfileHero className="flex flex-col gap-4" />

					<div className="mt-4">
						<Tab.Group>
							<Tab.List className="flex">
								{tabs.map((t) => (
									<Tab
										key={t.name}
										className={({ selected }) =>
											cls(
												'w-full border-b-4 border-transparent py-2.5 text-sm font-medium leading-5',
												selected ? 'border-blue-500' : ''
											)
										}
									>
										{t.name}
									</Tab>
								))}
							</Tab.List>
							<Tab.Panels>
								{tabs.map((t) => (
									<Tab.Panel className="py-3">{t.content}</Tab.Panel>
								))}
							</Tab.Panels>
						</Tab.Group>
					</div>
				</div>

				<InfoSidebar>
					<FollowWidget />
					<TrendsForYouWidget />
				</InfoSidebar>
			</div>
		</Layout>
	)
}

export default ProfilePage
