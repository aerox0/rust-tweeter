import Head from 'next/head'

interface LayoutProps {
	title: string
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	const head_title = 'Tweeter Clone | ' + title

	return (
		<>
			<Head>
				<title>{head_title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex min-h-screen flex-col items-center justify-start bg-white py-2">
				<main className="mx-auto w-full max-w-6xl pb-8 lg:px-8">{children}</main>
			</div>
		</>
	)
}

export default Layout
