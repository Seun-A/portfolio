'use client'
import Image from 'next/image'
import Link from 'next/link'
import building from '@/icons/building.svg'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center py-20'>
      <Image alt='in-progress' src={building} width={220} priority />
      <h2 className='text-4xl mt-10 mb-5'>Page In Progress</h2>
      <Link href="/" className='text-peach text-2xl underline brightness-95 hover:brightness-100 transition-all'>Return Home</Link>
    </div>
  )
}