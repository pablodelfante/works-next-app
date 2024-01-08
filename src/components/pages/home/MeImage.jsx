'use client'
import Image from 'next/image'

const MeImage = () => {
    const meImage = new Date().getMonth() === 11 ? '/img/home/me-christmas.png' : '/img/home/me-v2.webp'
    return (
        <Image
            src={meImage}
            alt="me prfile image"
            width={350}
            height={600}
            priority={true}
            quality={80}
            className="drop-shadow-[0_0px_40px_rgba(0,0,0,0.30)] "
        />
    )
}

export default MeImage
