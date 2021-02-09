import Link from 'next/link'
import Head from 'next/head'
import { COLOR_DARK } from '../../utils/constants';

export default function Header() {
    const backgroundDark = "dark:bg-gray-500";

    return (
        <>
            <Head>
                {/* my content */}
                <title>lapabla | blog</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
            </Head>

            <header className={COLOR_DARK}>
                <ul className='flex justify-end gap-20 py-10'>
                    <li>
                        <Link href='/'>
                            <a>INICIO</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog'>
                            <a>BLOG</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/portfolio'>
                            <a>PORTFOLIO</a>
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    )
}
