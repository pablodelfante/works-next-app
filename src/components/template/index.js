'use client'
import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import NProgress from 'nprogress'
import Container from 'components/layouts/Container'

export default function Layout({ children }) {
    const router = useRouter()

    useEffect(() => {
        NProgress.start()
        NProgress.done()
    }, [router])

    return (
        <>
            <Container>
                <Header />
            </Container>

            <main className="">{children}</main>

            <Container>
                <Footer />
            </Container>
        </>
    )
}
