import Script from "next/script";

/**
 * For check ok use: dataLayer on console chrome
 * **/

export default function GAnalytics() {
    return (
        <>
            <Script
                strategy='lazyOnload'
                src={`https://www.googletagmanager.com/gtag/js?id=G-R3H6RHLT7J`} />

            <Script strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R3H6RHLT7J');
        `}
            </Script>
        </>
    )
}
