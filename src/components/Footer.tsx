import { FC } from 'react'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className='border-solid border-t border-slate-900 text-gray-500 text-sans text-light text-center'>
        <span>©2023 inderparihar.ca</span>
    </div>
  )
}

export default Footer