
import { contentTechnologies } from '../../utils/contentTechnologies';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './technologies.module.scss';

export default function technologies() {
    // escucha para borrar clase al pasar por arriba
    const [classTechnologies, setClassTechnologies] = useState(style.technologiesStartPosition);

    useEffect(() => {
        const node2 = document.querySelector('.technologies');
        const handler = () => {
            // top del elemento respecto de la ventana scrolleable
            const top = node2.getBoundingClientRect().top;
            if (top < 500 ){
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

    return (
        <>
            {/* contenedor con barras */}
            <section className={`${classTechnologies} technologies w-full lg:w-6/12 my-20 group`}>
                {/* titulo */}
                <h3>Tecnologías</h3>
                <em className='font-extralight'>grafican cuán cómodo me siento con la tecnología</em>

                {/* lista de tecnologias */}
                <ul className='grid gap-y-5 mt-5'>
                    {contentTechnologies.map((item, key) => {
                        const { title, percentage } = item;
                        // calculos de porcentajes
                        const percentageOf12 = Math.round(12 * percentage / 100);
                        const result = percentageOf12 < 1 ? '1/12' : percentageOf12 > 11 ? 'full' : `${percentageOf12}/12`;
                        return (
                            <li key={key}>
                                <p className='font-thin'>{title}</p>
                                <div className="shadow w-full bg-grey-light">
                                    <div className={`bg-indigo-600 text-xs leading-none py-1 text-center text-white transition-all duration-1000 delay-300 w-${result}`}>
                                        {percentage}%
                                    </div>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}
