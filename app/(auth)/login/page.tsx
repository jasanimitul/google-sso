'use client';

import { signIn } from 'next-auth/react'

export default function Page() {

  return (
    <div className='container'>
      <div className='login-page'>
        <button
          type="button"
          onClick={()=>signIn('google')}
          >Login with Google</button>
      </div>
    </div>
  )
}
