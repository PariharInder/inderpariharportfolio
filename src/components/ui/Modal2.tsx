import { FC, Key } from 'react'
import { buttonVariants } from './Button'
import ImageSlider from './Carousel'

interface Modal2Props {
    isOpen: boolean
    onClose: () => void
    data: any
}

const Modal2: FC<Modal2Props> = ({ isOpen, onClose, data }) => {
    if (!isOpen) {
        return null
    }

    return <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-stone-950 p-8 rounded-lg z-10 flex flex-col border-white border-2 w-5/6 md:2/5 h-5/6 overflow-y-auto">
            <div className='flex flex-row justify-between items-center'>
                <p className='font-bold text-lg md:xl'>{data.name}</p>
                <button className={buttonVariants({ variant: 'secondary', size: 'sm' })} onClick={onClose}>Close</button>
            </div>
            <div className="my-4 text-white font-bold">
                <div className=''>
                    <ImageSlider images={data.images} />
                </div>
            </div>
            <div className="my-4 text-white font-thin font-lg md:font-xl">
                {data.content.map((block: { _key: Key | null | undefined; children: any[] }) => (
                    <p key={block._key}>
                        {block.children.map((child) => {
                            const isBold = child.marks.some((mark: { _type: string }) => mark._type === 'strong')
                            return (
                                <span key={child._key} style={{ fontWeight: isBold ? 'bold' : 'normal' }}>
                                    {child.text}
                                </span>
                            )
                        })}
                    </p>
                ))}
            </div>
        </div>
    </div>
}

export default Modal2