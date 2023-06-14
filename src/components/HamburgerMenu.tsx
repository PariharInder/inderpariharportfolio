import { Menu } from 'lucide-react'
import Link from 'next/link'
import { FC, useState } from 'react'

interface HamburgerMenuProps {}

const HamburgerMenu: FC<HamburgerMenuProps> = ({}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className='relative flex flex-col'>
      <Menu
        className='text-white absolute top-0 right-0 m-4 cursor-pointer'
        size={28}
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className='flex flex-col justify-end text-white font-sans relative py-2 px-4 text-right'>
          <div className="absolute top-full right-0 mt-8 mr-4 p-1 rounded-lg flex flex-col">
            <Link href='/projects'>Projects</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
