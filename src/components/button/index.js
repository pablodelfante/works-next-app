import Link from 'next/link'

export default function Button({ href, children }) {
    return (
        <>
            <Link
                href={href}
                className=" inline-block
                px-6 py-2
                text-center

                bg-white
                hover:bg-black
                hover:text-white
                dark:bg-dark
                dark:hover:bg-white
                dark:hover:text-black
                
                transition
                duration-100
                border-2
                border-gray-900
                dark:border-white"
                style={{ minWidth: '10rem' }}
            >
                {children}
            </Link>
        </>
    )
}
