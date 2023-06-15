'use client'
import { FC, FormEvent, useState } from 'react'
import { inputVariants } from './ui/Input'
import { headingVariants } from './ui/Headings'
import Button, { buttonVariants } from './ui/Button'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { sendContactForm } from '@/lib/api'
import Modal from './ui/Modal'

interface ContactFormProps {

}

const ContactForm: FC<ContactFormProps> = ({ }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsLoading(true)

    const data = {
      // @ts-ignore
      name: (event.target as HTMLFormElement).name.value,
      email: (event.target as HTMLFormElement).email.value,
      message: (event.target as HTMLFormElement).message.value
    }
    
    sendContactForm(data).then(res => {
      setMessage(res.message)
      setModalOpen(true)
    })

    setIsLoading(false)
  }

  return (
    <div className='flex flex-col items-center mt-10 md:mt-1'>
      <div>
        <span className='py-7 md:py-10'><span className={headingVariants({ variant: 'headingTealPrimary', size: 'default' })}>
          Let's connect
        </span></span>
      </div>
      <div>
        <p className='font-thin py-8 md:py-10 px-3'>
          Thank you for visiting my portfolio website! I would be delighted to connect with you. Please feel free to reach out to me using the form below or using my social media links.
        </p>
      </div>
      <div className='flex flex-col w-screen items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col w-screen items-center'>
          <input type="text" name="name" id="name" className={inputVariants({ variant: 'text' })} placeholder='Enter your name:' required/>
          <input type="email" name="email" id="email" className={inputVariants({ variant: 'text' })} placeholder='Enter your e-mail:' required/>
          <textarea name="message" id="message" className={inputVariants({ variant: 'textarea' })} placeholder='Enter your message:' required/>
          <Button type="submit" variant={'primary'} size={'submit'} isLoading={isLoading}>Submit</Button>
        </form>
      </div>
      <p className='py-2 font-light text-center'>OR reach out to me using the following or my socials</p>
      <div className='flex flex-col font-thin items-center'>
        <Link href={'tel:+1234567890'} className='flex py-2'><Phone className='mx-2' /> +1 (705)-905-5691</Link>
        <Link href={'mail:2002inderjitsingh@gmail.com'} className='flex py-2'><Mail className='mx-2' /> 2002inderjitsingh@gmail.com</Link>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} children={message}/>
    </div>
  )
}

export default ContactForm