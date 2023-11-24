import React from 'react'
import Image from 'next/image'
export default function Logo() {
  return (
    <div>
      <Image
      height={90}
      width={90}
      src="/logo.svg"
      alt='logo'
      />
    </div>
  )
}
