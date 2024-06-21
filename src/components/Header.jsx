import React from 'react'
import MenuItem from './MenuItem' 
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkModeSwitch from "./DarkModeSwitch"
function Header() {
  return (
    // {/ *display flex make its content inline* /}
    <div className='flex justify-between items-center p-3 max-w-6xl'>
        <div className='flex gap-4'>
            <MenuItem title='home' address='/' Icon={AiFillHome}/>

            <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
        <div className='flex items-center gap-4'>
         <DarkModeSwitch/>
        <div className='flex gap-4 items-center'>
            <span className='text-2xl  font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMdb</span>

            </div>{/*item center used to make itmes centrally aligned */}
    </div>
    </div>
  )
}

export default Header