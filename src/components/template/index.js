import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Container from 'components/layouts/Container'

export default function Layout({ children }) {
    const router = useRouter()

    useEffect(() => {
        const handler = (url) => {
            NProgress.start()
        }

        router.events.on('routeChangeStart', handler)
        router.events.on('routeChangeComplete', (url) => NProgress.done())

        return () => {
            router.events.off('routeChangeStart', handler)
        }
    }, [])

    return (
        <>
            <Container>
                <Header />
            </Container>

            {/* CONTENIDO PRINCIPAL */}
            <main className="">{children}</main>

            {/* FOOTER */}
            <Container>
                <Footer />
            </Container>
        </>
    )
}
