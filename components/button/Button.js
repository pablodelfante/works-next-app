import Link from 'next/link';

export default function Button({ href, children }) {
    return (
        <>
            <Link href={href}>
                <a className='inline-block px-10 py-2 bg-white hover:bg-indigo-50 transition border-2 border-gray-600'>
                    {children}
                </a>
            </Link>
        </>
    )
}
