"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function ProfileBar() {
  const { data } = useSession()

  return (
    <div className='profile-bar'>
      <Image src={data?.user?.image || ''} alt="Avatar" width={50} height={50} />
      <div className='user-info'>
        {data?.user?.name} <br />
        {data?.user?.email}
      </div>
    </div>
  )
}
