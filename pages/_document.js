import Document, { Html, Head, Main, NextScript } from 'next/document'

// <Html>, <Head />, <Main />Y <NextScript />son necesarios para que la página sea correcta ejecución.
// esto es mas por si quiero editar html tag body o algo asi mas global
class MyDocument extends Document {

  render() {
    return (
      <Html lang='es'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument