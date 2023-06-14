import { FC } from 'react'
import { inputVariants } from './ui/Input'

interface ContactFormProps {
  
}

const ContactForm: FC<ContactFormProps> = ({}) => {
  return (
    <div>
        <div>
            <form action="">
                <input type="text" name="" id="" className={inputVariants({variant: 'text'})}/>
            </form>
        </div>
    </div>
  )
}

export default ContactForm