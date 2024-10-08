import 'tailwindcss/tailwind.css'
import 'styles/globals.css'
import DarkProvider from 'contexts/darkMode/DarkProvider'
import GAnalytics from 'components/GAnalytics'

// TODO: is this necesary?
export const metadata = {
    title: 'Pablo Delfante Portfolio',
    description: 'Web portfolio, presentation of work and projects. In order to display and provide a personal web image.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <head>
                {/* meta description for accesibility */}
                <meta
                    name="description"
                    content="Pablo Delfante portfolio, personal website, presentation and projects. In order to display and provide a personal web image."
                ></meta>

                {/* Google fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />

                {/* icono pagina */}
                <link rel="shortcut icon" href="/lapabla-ico.ico" />

                {/* NProgress */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />

                {/* PWA assets */}
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/lapabla-ico.ico"></link>
                <meta name="theme-color" content="#fff" />
            </head>
            <body className="dark:bg-dark transition">
                {/* <GAnalytics/> alone in production enviroment */}
                {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && <GAnalytics />}
                <DarkProvider>{children}</DarkProvider>
            </body>
        </html>
    )
}
