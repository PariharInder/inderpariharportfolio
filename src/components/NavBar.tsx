import Link from 'next/link'
import { FC } from 'react'
import HamburgerMenu from './HamburgerMenu'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
    return (
        <div>
            <div className="hidden md:flex fixed top-5 right-0 z-2 text-xl text-white w-1/3 items-center justify-evenly font-sans">
                <Link href={'/projects'}>Projects</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/contact'}>Contact</Link>
            </div>
            <div className='flex fixed top-4 right-4 md:hidden z-3'>
            <HamburgerMenu />
            </div>
        </div>
    )
}

export default NavBar