'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
// new hook for you revise it

function Navbaritem({title,param})  {
    const searchParams=useSearchParams();
    const genre=searchParams.get('genre');
  return (
    <div>
        <Link
        className={`hover:text-amber-600 font-semibold  ${genre===param?'underline underline-offset-8 decoration-2 decoration-amber-500 rounded-lg':' '}`}
         href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default Navbaritem