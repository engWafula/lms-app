import React from 'react'
import Logo from './logo'
import SidebarRoutes from './sidebarroutes'

export default function Sidebar() {
  return (
    <div className='flex h-full border-r flex-col overflow-y-auto bg-white shadow-sm'>
       <div className='p-6'>
         <Logo/>
       </div>
       <div className='flex flex-col w-full'>
          <SidebarRoutes/>
       </div>
    </div>
  )
}
