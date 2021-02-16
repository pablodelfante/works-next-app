import Link from 'next/link';

export default function Button({ href, children }) {
    return (
        <>
            <Link href={href}>
                <a className='
                inline-block
                px-10 py-2
                bg-white
                dark:bg-black
                hover:bg-black
                hover:text-white
                transition
                border-2
                border-gray-700
                dark:border-white
                '>
                    {children}
                </a>
            </Link>
        </>
    )
}
