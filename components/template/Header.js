import { useState } from "react";
import Link from 'next/link'
import Head from 'next/head'
import { COLOR_DARK } from '../../utils/constants';

import { useContext } from 'react';
import DarkContext from '../../contexts/darkMode/DarkContext';

export default function Header() {

    const {dark,setDark,icono,setIcono,sun,moon} = useContext(DarkContext);

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
            <Head>
                {/* my content */}
                <title>pablodelfante | blog</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
                
                {/* icono pagina */}
                <link rel="shortcut icon" href="/lapabla-ico.ico" />

                {/* font awesome  */}
                {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"/> */}
                
                {/* NProgress */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>

                {/* ScrollReveal */}
                <script src="https://unpkg.com/scrollreveal"></script>

            </Head>

            <header className='sticky top-0 bg-white border border-l-0 border-r-0'>
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
