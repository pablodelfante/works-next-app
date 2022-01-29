
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
                y: 0,
                z: -45
            }
        };
        ScrollReveal().reveal('.lapabla-reveal', options);
    }, [])

    // manejador de github api
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('https://api.github.com/users/pablodelfante');
                const data = await res.json();
                avatar_url.value = data.avatar_url;
                setAvatar_url({ value: avatar_url.value });
            } catch (error) {
                console.warn("error on fetch image from github");
            }

        })()
    }, [])

    return (
        <>
            {/* contenedor */}
            <section className={`w-full mb-40 grid grid-flow-row xl:grid-cols-2 gap-10`}>

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
                        {/* titulo */}
                        <h2>Sobre mi</h2>
                        <p className='font-extralight block mb-5'>...quién soy?</p>

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
                        <p className='font-extralight'>Proyección</p>

                        {/* lista de tecnologias */}
                        <div className='grid gap-5'>
                            <p >
                                Me atrapan pilas como la jam, o tecnologías como las PWA, lo que no descarta ampliar mis conocimientos en cualquier otra o expandirme más en formas como UX UI!
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
