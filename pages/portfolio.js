import Layout from "../components/template";
import Portada from "../components/portada";
import { getPortadas } from '../connectors/findPortada';
import { useState, useEffect } from 'react'

export default function Portfolio(props) {
    const titlePortada = `Pasa pasa!`;
    const iconPortada = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>;
    const contentPortada = `Esta es mi seeción donde tengo algunos laburos que aprecio mucho y quiero compartirlos con vos!`;



    return (
        <Layout>
            <Portada titlePortada={titlePortada} iconoPortada={iconPortada} contentPortada={contentPortada} />
        </Layout>
    )
}

export async function getStaticProps (context){
    
    //aca llamar cosas dinamicamente

    return {
        props:{
            
        }
    }
}