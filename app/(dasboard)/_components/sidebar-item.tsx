"use client"

import { LucideIcon } from 'lucide-react'
import React from 'react'
import {usePathname,useRouter} from "next/navigation"
import { cn } from '@/lib/utils';
interface SidebarItemProps{
    icon:LucideIcon;
    label:string;
    href:string;
}

export default function SidebarItem({icon:Icon,label,href}:SidebarItemProps) {
    const pathName = usePathname()
    const router = useRouter()
    const isActive = (pathName === "/" && href === "/") || pathName===href || pathName?.startsWith(`${href}/`)

    const onClick = ()=>{
        router.push(href)
    }
  return (
    <button className={cn('flex items-center font-[500] pl-6 gap-x-2 text-sm text-slate-500 py-2 px-4 rounded-lg transition-all hover:bg-slate-300/20', isActive && 'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20')} onClick={onClick} type='button'>


       <div className={cn("flex items-center gap-x-2 py-4")}>
             <Icon size={20} className={isActive ? "text-sky-700" : "text-slate-500"}/>
            {label}
       </div>
       <div className={cn(
        "ml-auto opacity-0 border-2 border-sky-700 h-full  transition-all",
        isActive && "opacity-100",
       )}
        />
    </button>
  )
}
