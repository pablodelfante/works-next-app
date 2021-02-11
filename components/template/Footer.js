import Link from 'next/link';
import style from './Footer.module.scss';

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
            <footer className={style.prueba}>
                <ul className='flex justify-between py-10 px-10 md:px-72'>
                    <li>
                        <Link href='https://github.com/pablodelfante'>
                            <a target="_blank">GitHub</a>
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







