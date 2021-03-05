
import { contentTechnologies } from '../../utils/contentTechnologies';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './technologies.module.scss';
import Image from 'next/image';

export default function technologies() {
    // escucha para borrar clase al pasar por arriba
    const [classTechnologies, setClassTechnologies] = useState(style.technologiesStartPosition);
    const [avatar_url, setAvatar_url] = useState({value:null})

    // manejador de graficas
    useEffect(() => {
        const node2 = document.querySelector('.technologies');
        const handler = () => {
            // top del elemento respecto de la ventana scrolleable
            const top = node2.getBoundingClientRect().top;
            if (top < 500) {
                node2.classList.remove(`${classTechnologies}`);
            } else {
                node2.classList.add(`${classTechnologies}`);
            }
        }
        window.addEventListener('scroll', handler);
        // limpieza
        return () => {
            window.removeEventListener('scroll', handler);
        }
    }, [])

    // manejador de github api
    useEffect(() => {
        (async () => {
            const res = await fetch('https://api.github.com/users/pablodelfante');
            const data = await res.json();
            avatar_url.value = data.avatar_url;
            setAvatar_url({value:avatar_url.value});
            console.log(data)
        })()
    }, [])

    return (
        <>
            {/* contenedor con barras */}
            <section className={`w-fullx lg:w-6/12x mb-40 grid grid-flow-row xl:grid-flow-col gap-10`}>

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
                            />):'no hay imagen'
                        }
                        
                    </picture>
                    <figcaption className='px-10 pb-10'>
                            <p className='mb-5'>
                            Soy Pablo! diseñador gráfico, estudio diseño gráfico web, y soy apasionado por la tecnología, desde pequeño he sido muy curioso, activo, me gusta compartir, aprender, escucuchar, ayudar y conocer gente.
                            </p>
                            <p className=''>
                            Me considero un colgado resolviendo problemas, de chico fuí muy observador, ver que caminos podían tomar diferentes problemas y soluciones, posibilidades... disfruto ser analítico y creativo =D
                            </p>
                    </figcaption>

                </figure>
                <div className={`${classTechnologies} technologies`}>
                    {/* titulo */}
                    <h3>Tecnologías</h3>
                    <em className='font-extralight'>Grafican cuán cómodo me siento con la tecnología, en base a mi experiencia</em>

                    {/* lista de tecnologias */}
                    <ul className='grid gap-y-5 mt-5'>
                        {contentTechnologies.map((item, key) => {
                            const { title, percentage } = item;
                            // calculos de porcentajes
                            const percentageOf12 = Math.round(12 * percentage / 100);
                            const result = percentageOf12 < 1 ? 'w-1/12' : percentageOf12 > 11 ? 'w-full' : `w-${percentageOf12}/12`;
                            // esto es para que no se purguen estas clases ya que tailwind no se lleva con la concatenación de cadenas ${}
                            const tailwind = 'w-full w-1/12 w-2/12 w-3/12 w-4/12 w-5/12 w-6/12 w-7/12 w-8/12 w-9/12 w-10/12 w-11/12';
                            return (
                                <li key={key}>
                                    <p className='font-thin'>{title}</p>
                                    <div className="shadow w-full bg-grey-light dark:bg-gray-900">
                                        <div className={`bg-primary text-xs leading-none py-1 text-center text-white transition-all duration-1000 delay-300 ${result}`}>
                                            {percentage}%
                                    </div>
                                    </div>

                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}
