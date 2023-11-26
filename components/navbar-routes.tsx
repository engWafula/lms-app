
"use client"
import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname} from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { SearchInput } from './search-input'
import { isTeacher } from '@/lib/teacher'
export default function NavbarRoutes() {
  const { userId } = useAuth();

    const pathName = usePathname()
    const isTeacherPage = pathName?.startsWith("/teacher")
    const isCoursePage = pathName?.includes("/courses")
    const isSearchPage = pathName === "/search";

  return (
    <>
          {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
    <div className=' flex  gap-x-2  ml-auto'>
        {
            isTeacherPage || isCoursePage ?(
                <Link href='/'>
                <Button size="sm" variant="ghost">
                <LogOut className='w-4 h-4 mr-2'/>
                Exit
             </Button>
             </Link>
            ): isTeacher(userId) ? (
              <Link href="/teacher/courses">
                <Button size="sm" variant="ghost">
                  Teacher mode
                </Button>
              </Link>
            ) : null}
      <UserButton
      afterSignOutUrl='/'
      />
    </div>
    </>
  )
}
