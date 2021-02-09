import Link from 'next/link';

export default function Footer() {
    return (
            <footer>
                <ul className='flex justify-center gap-20 py-10'>
                    <li>
                        <Link href='/inicio'>
                            <a>GitHub</a>
                        </Link>
                    </li>
                    <li>
                        lapabla
                    </li>
                    <li>
                        escribir año
                    </li>
                </ul>
            </footer>
    )
}







