'use client'

import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="w-full bg-[#efece4] px-[55.44px] py-[28.08px] ">
      <div className="max-w-7xl mx-auto flex items-center gap-4 mt-[15px]">
        {/* Logo */}
        <a href="#">
        <Image
        
          src="/logo-transparent-png.png"
          alt="Logo"
          width={247}
          height={74}
          className="h-[70px] w-auto"
        />
        </a>
      </div>
    </header>
  )
}


