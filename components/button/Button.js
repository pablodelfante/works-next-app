import Link from 'next/link';

export default function Button({ href, children }) {
    return (
        <>
            <Link href={href}>
                <a className='
                inline-block
                px-6 py-2
                text-center

                bg-white
                hover:bg-black
                hover:text-white
                dark:bg-black
                dark:hover:bg-white
                dark:hover:text-black
                
                transition
                duration-300
                border-2
                border-gray-900
                dark:border-white
                '>
                    {children}
                </a>
            </Link>
        </>
    )
}
