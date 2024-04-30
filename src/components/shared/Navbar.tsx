import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function Navbar() {
	return (
		<div className="flex justify-center items-start w-full">
			<header className="flex justify-between w-full items-center max-w-5xl">
				<h1 className="text-2xl font-bold">Next.js + Clerk</h1>
				<div className="flex items-center justify-between p-4">
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</header>
		</div>
	)
}

export default Navbar
