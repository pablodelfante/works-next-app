import Document, { Html, Head, Main, NextScript } from "next/document";

// <Html>, <Head />, <Main />Y <NextScript />son necesarios para que la página sea correcta ejecución.
// esto es mas por si quiero editar html tag body o algo asi mas global
class MyDocument extends Document {
    render() {
        return (
            <Html lang="es" className="dark">
                <Head>
                    {/* meta description for accesibility */}
                    <meta
                        name="description"
                        content="Web portfolio, presentation of work and projects. In order to display and provide a personal web image."
                    ></meta>

                    {/* Google fonts */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />

                    {/* icono pagina */}
                    <link rel="shortcut icon" href="/lapabla-ico.ico" />

                    {/* font awesome  */}
                    {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"/> */}

                    {/* NProgress */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
                    />

                    {/* ScrollReveal */}
                    <script src="https://unpkg.com/scrollreveal"></script>

                    {/* PWA assets */}
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/lapabla-ico.ico"></link>
                    <meta name="theme-color" content="#fff" />
                </Head>
                {/* <Head /> */}
                <body className="dark:bg-dark transition">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
