import React from 'react'
import Image from 'next/image'
export default function Logo() {
  return (
    <div>
      <Image
      height={100}
      width={200}
      src="/logo.png"
      alt='logo'
      />
    </div>
  )
}
