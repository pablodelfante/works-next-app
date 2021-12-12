import Header from "./Header";
import Footer from './Footer'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';




export default function Layout(props) {
    const { children } = props;
    const classContainer = `px-4 container m-auto overflow-hidden`;
    const classMain = '';

    const router = useRouter();

    useEffect(() => {
        const handler = (url) => {
            NProgress.start();
        }

        router.events.on('routeChangeStart', handler);
        router.events.on('routeChangeComplete', (url) => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', handler);
        }
    }, [])

    return (
        <div
            className={classContainer}>
            {/* HEADER */}
            <Header />

            {/* CONTENIDO PRINCIPAL */}
            <main className={classMain}>
                {children}
            </main>

            {/* FOOTER */}
            <Footer />


        </div>
    )
}
