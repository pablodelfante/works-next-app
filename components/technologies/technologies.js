
import { contentTechnologies } from '../../utils/contentTechnologies';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './technologies.module.scss';
import Image from 'next/image';

export default function technologies() {


    const [avatar_url, setAvatar_url] = useState({ value: null })


    useEffect(() => {
        const options = { 
            reset: true,
            delay: 300,
            rotate: {
                x: 0,
                y:0,
                z:-45
            }
        };
        ScrollReveal().reveal('.lapabla-reveal', options );
    }, [])

    // manejador de github api
    useEffect(() => {
        (async () => {
            const res = await fetch('https://api.github.com/users/pablodelfante');
            const data = await res.json();
            avatar_url.value = data.avatar_url;
            setAvatar_url({ value: avatar_url.value });
            // console.log(data)
        })()
    }, [])

    return (
        <>
            {/* contenedor */}
            <section className={`w-full mb-40 grid grid-flow-row xl:grid-cols-2 gap-10 overflow-hidden sm:overflow-visible`}>

                <figure className='grid grid-flow-row auto-rows-max gap-5 border-l'>
                    <picture className=''>
                        {/* si hay imagen retornala sino none prri */}
                        {avatar_url.value ?
                            (<Image
                                src={avatar_url?.value}
                                alt='sin image'
                                layout={'responsive'}
                                width={1}
                                height={1}
                                quality={100}
                                objectFit={'contain'}
                                objectPosition={'left center'}
                            />) : 'no hay imagen'
                        }

                    </picture>
                    <figcaption className='pl-8 pb-8'>
                        <p className='mb-5'>
                            Soy Pablo! diseñador gráfico, estudiante de gráfico web, apasionado por la tecnología, desde pequeño curioso, activo, me gusta compartir, aprender, escucuchar, ayudar y conocer gente.
                            </p>
                        <p className=''>
                            Me considero un colgado resolviendo problemas, de chico fuí muy observador, ver diferentes fromas y posibilidades a problemas... disfruto ser analítico y creativo =D
                            </p>
                    </figcaption>

                </figure>

                {/* TECHNOLOGIES */}
                <div className={`${style.customShadow} lapabla-reveal`}>
                    <div className='bg-white dark:bg-black grid gap-2 p-8'>
                        {/* titulo */}
                        <h3>Tecnologías</h3>
                        <em className='font-extralight'>Proyección</em>

                        {/* lista de tecnologias */}
                        <div className='grid gap-5'>
                        <p >
                        Me atraen pilas como la mern o jam, lo que no descarta ampliar mis conocimientos en cualquier otra o expandirme más en formas como UX UI!
                        </p>
                        <p >
                        Además de lo estrictamente tecnológico, creo en las muchas herramientas e ingenio para mejorar experiencias de usuarios crear sistemas que mejoren la vida de las personas, me emocionan desafíos, aprender, crecer y con ello ayudar a la gente!
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
