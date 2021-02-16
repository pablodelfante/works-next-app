import Link from 'next/link';
import Button from './Button.js';

export default function About() {
    return (
        <>
            <hr className='mb-20' />
            <h3 className='mb-5'>Acerca de mi</h3>

            <div className='grid xl:grid-cols-2 gap-10'>
                <div className=''>
                    <p className='mb-5'>
                        Soy Pablo! soy diseñador gráfico, estudio diseño gráfico web, y soy apasionado por la tecnología,
                        desde pequeño he sido muy curioso, activo, me gusta compartir, aprender, escucuchar, ayudar y conocer gente.
                    </p>
                    <p className='mb-5'>
                        Soy un colgado resolviendo problemas, de chico fuí muy observador, ver que caminos tomaban diferentes soluciones,
                        posibilidades... disfruto ser analítico y creativo =D
                    </p>
                   <Button></Button>
                </div>
                <div className='pointer-events-none'>
                    <img src='https://media.giphy.com/media/xT1Ra7uxTuOssARKda/giphy.gif' alt='sin img' className='h-full'></img>
                </div>
            </div>
        </>
    )
}
