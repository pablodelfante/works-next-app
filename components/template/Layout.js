import Header from "./header";
import Footer from './Footer'

import Head from 'next/head'


export default function Layout(props) {
    const {children} = props;
    return (
        <div 
        className='personal-blog | container m-auto md:w-8/12'>
            {/* HEADER */}
            <Header/>

            {/* CONTENIDO PRINCIPAL */}
            <main>
            {children}
            </main>

            {/* FOOTER */}
            <Footer/>
            
            
        </div>
    )
}
