"use client"
import { signOut } from 'next-auth/react'
import { useAppSelector } from '@/hooks/useReduxHooks';
import { cartSelector } from '@/redux/cartSlice';

export default function Header() {
  const {totalItem} = useAppSelector(cartSelector);

  return (
    <header className="header">
      <div className="container">
        <div className='header-box'>
          <h2>My Brand </h2>
          <div className='header-right'>
            <p>Cart: {totalItem}</p>
            <button onClick={()=>signOut()}>Logout</button>
          </div>
        </div>
      </div>
    </header>
  )
}
