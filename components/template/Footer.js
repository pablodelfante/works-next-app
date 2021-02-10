import Link from 'next/link';

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
            <footer>
                <ul className='flex justify-center gap-20 py-10 px-10 md:px-52'>
                    <li>
                        <Link href='/inicio'>
                            <a>GitHub</a>
                        </Link>
                    </li>
                    <li>
                        pablodelfantexp@gmail.com
                    </li>
                    <li>
                        {year}
                    </li>
                </ul>
            </footer>
    )
}







