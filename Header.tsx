'use cliant'

import { Shield } from "lucide-react"
import Link from "next/link"
import { SignedIn, SignedOut,UserButton, SignInButton, SignOutButton } from "@clerk/nextjs"

const Header =()=>{
    return(
        <div className="p-4 flex  justify-between items-center">
            <Link href="/" className="flex item-center">
                <Shield className="w-6 h-6 text-slate-900 dark:text-slate-50 mr-2"></Shield>
                <h1 className="text-2xl font-semibold">My app</h1>
            </Link>
            <div>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal" />
                </SignedOut>
            </div>
        </div>
    )
}

export default Header