"use client"

import React from 'react'
import {BarChart, Compass, Layout, List} from "lucide-react"
import SidebarItem from './sidebar-item'
import { usePathname } from 'next/navigation'
const guestRoutes = [
    {
        icon:Layout,
        label:"Dashboard",
        href:"/"
    },
    {
        icon:Compass,
        label:"Browse",
        href:"/search"
    }
]

const teacherRoutes = [
  {
    icon:List,
    label:"Course",
    href:"/teacher/courses"
},
{
    icon:BarChart,
    label:"Analytics",
    href:"/teacher/analytics"
}
]

export default function SidebarRoutes() {
  const pathName = usePathname()
  const isTeacherPage = pathName.includes("/teacher")
    const routes = isTeacherPage?teacherRoutes:guestRoutes
  return (
    <div className='flex flex-col w-full'>
      {routes.map((route)=>(
        <SidebarItem
         key={route.href}
         icon={route.icon}
         label={route.label}
         href={route.href}
        />
      ))}
    </div>
  )
}
