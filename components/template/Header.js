import { useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
import { COLOR_DARK } from '../../utils/constants';

export default function Header() {

    // estado para el modo dark
    const [dark, useDark] = useState(false);

    // Funcion modo dark
    const modeDark = () => {
        const html = document.getElementsByTagName('html')[0];

        // html
        html.className = !dark ? 'dark' : '';
        useDark(!dark);
    }

    return (
        <>
            <Head>
                {/* my content */}
                <title>pablodelfante | blog</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>

            <header className='px-5 md:px-72 | sticky top-0 bg-white shadow-sm'>
                <ul className='flex justify-end gap-3 md:gap-10 py-10'>

                    <li className='mr-auto'>
                        <Link href='/'>
                            <a>INICIO</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>INICIO</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/portfolio'>
                            <a>PORTFOLIO</a>
                        </Link>
                    </li>
                    <li onClick={() => modeDark()} className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </li>
                </ul>
            </header>
        </>
    )
}
