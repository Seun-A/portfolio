'use client'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center py-20'>
      <h2 className='text-4xl mt-10 mb-5'>Page Not Found</h2>
      <Link href="/" className='text-peach text-2xl underline brightness-95 hover:brightness-100 transition-all'>Return Home</Link>
    </div>
  )
}