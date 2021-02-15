import Link from 'next/link';
import style from './Footer.module.scss';

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
            <footer className={style.footer}>
                <ul className='flex flex-col sm:flex-row justify-between'>
                    <li>
                        <Link href='https://github.com/pablodelfante'>
                            <a target="_blank" className='underline'>GitHub</a>
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







