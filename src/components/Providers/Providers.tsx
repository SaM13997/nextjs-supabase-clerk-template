'use client'

import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'

function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<ClerkProvider>{children}</ClerkProvider>
		</ThemeProvider>
	)
}

export default Providers
