import Link from 'next/link'
import { useContext, useEffect } from 'react'
import DarkContext from '../../contexts/darkMode/DarkContext'

export default function Header() {
    const { isDark, setIsDark, icono } = useContext(DarkContext)

    useEffect(() => {
        const html = document.getElementsByTagName('html')[0]
        html.className = isDark ? 'dark' : ''
    }, [isDark])

    const switchModeDark = () => {
        setIsDark(!isDark)
    }

    return (
        <>
            <header className="border-b">
                <ul className="flex justify-end gap-3 md:gap-10 py-10">
                    <li className="mr-auto">
                        <Link href="/">
                            <a>Pablo Delfante</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            <a>Portfolio</a>
                        </Link>
                    </li>
                    <li
                        onClick={() => switchModeDark()}
                        className="cursor-pointer"
                    >
                        {icono}
                    </li>
                </ul>
            </header>
        </>
    )
}
