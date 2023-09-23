"use client"
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import ScreenLoading from './ScreenLoading';

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode
}) {

  const session = useSession();

  if(session?.status === "loading"){
    return (<ScreenLoading />)
  }

  if(session?.status !== "authenticated"){
    redirect('/login')
  }

  return (
    <> {children}</>
  )
}
