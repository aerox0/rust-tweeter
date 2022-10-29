'use client'

import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Props {
	children: React.ReactNode
}

const queryClient = new QueryClient()

const Layout: React.FC<Props> = ({ children }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Layout
