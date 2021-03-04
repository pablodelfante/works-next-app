import Header from "./Header";
import Footer from './Footer'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import nprogress from 'nprogress';




export default function Layout(props) {
    const { children } = props;
    const classPersonalBlog = `personal-blog px-4 lg:px-80`;
    const classMain = 'xl:container';

    const router = useRouter();

    useEffect(() => {
        const handler = (url) => {
            nprogress.start();
        }

        router.events.on('routeChangeStart', handler);
        router.events.on('routeChangeComplete', (url) => nprogress.done());

        return () => {
            router.events.off('routeChangeStart', handler);
        }
    }, [])

    return (
        <div
            className={classPersonalBlog}>
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
