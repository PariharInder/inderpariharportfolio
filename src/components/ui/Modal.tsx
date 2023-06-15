import { FC } from 'react'
import { buttonVariants } from './Button'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null
    }

    return <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-stone-950 p-8 rounded-lg z-10 flex justify-evenly items-center flex-col border-white border-2">
            <div className="my-4 text-white font-bold">{children}</div>
            <button
                    className={buttonVariants({variant: 'secondary', size: 'sm'})}
                    onClick={onClose}
                >
                    Close
            </button>
        </div>
    </div>
}

export default Modal