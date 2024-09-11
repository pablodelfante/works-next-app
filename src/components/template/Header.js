import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import DarkContext from 'contexts/darkMode/DarkContext'
import Blob from 'components/Blob'

export default function Header() {
    const activeLinkClassName = 'border-b border-b-2 border-primary text-'
    const { isDark, setIsDark, icono } = useContext(DarkContext)

    const pathname = usePathname()

    useEffect(() => {
        const html = document.getElementsByTagName('html')[0]
        html.className = isDark ? 'dark' : ''
    }, [isDark])

    const switchModeDark = () => {
        setIsDark(!isDark)
    }

    return (
        <>
            <header>
                <ul className="flex justify-end gap-3 md:gap-10 py-10">
                    <li className="mr-auto flex gap-1 text-sm lg:text-base">
                        <Blob
                            blobConfig={{
                                color: 'hwb(243deg 30% 1%)',
                            }}
                            canvasStyles={{ width: '20px' }}
                        />
                        <Link href="/" className={`${pathname === '/' ? activeLinkClassName : ''}`}>Pablo Delfante</Link>
                    </li>
                    <li className="text-sm lg:text-base">
                        <Link href="/portfolio" className={`${pathname === '/portfolio' ? activeLinkClassName : ''}`}>Portfolio</Link>
                    </li>
                    <li className="font-extralight text-sm lg:text-base">
                        <Link href="/experience" className={`${pathname === '/experience' ? activeLinkClassName : ''}`}>Journey</Link>
                    </li>
                    <li onClick={() => switchModeDark()} className="cursor-pointer">
                        {icono}
                    </li>
                </ul>
            </header>
        </>
    )
}
