'use client'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Modal from 'components/Modal'

const page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const imageUrl = searchParams.get('imageUrl')
    return (
        <div onClick={() => router.back()}>
            <Modal>
                <div className="grid">
                    <Image
                        src={imageUrl}
                        width={1920}
                        height={1080}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        quality={100}
                        alt="image component"
                    />
                    <p className="bg-black text-white">click somwhere to close overlay</p>
                </div>
            </Modal>
        </div>
    )
}

export default page
