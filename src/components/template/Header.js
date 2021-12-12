import { useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
import { COLOR_DARK } from '../../utils/constants';

import { useContext } from 'react';
import DarkContext from '../../contexts/darkMode/DarkContext';

export default function Header() {

    const { dark, setDark, icono, setIcono, sun, moon } = useContext(DarkContext);

    // Funcion modo dark
    const modeDark = () => {
        const html = document.getElementsByTagName('html')[0];

        // html
        html.className = !dark ? 'dark' : undefined;
        if (dark) { setIcono(sun) } else { setIcono(moon) }
        setDark(!dark);
    }

    return (
        <>
            <header className='sticky top-0 z-10 border-b'>
                <ul className='flex justify-end gap-3 md:gap-10 py-10'>

                    <li className='mr-auto'>
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
                        {icono}
                    </li>
                </ul>
            </header>
        </>
    )
}
