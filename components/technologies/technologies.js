
import { contentTechnologies } from '../../utils/contentTechnologies';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './technologies.module.scss';

export default function technologies() {
    // escucha para borrar clase al pasar por arriba
    const [classTechnologies, setClassTechnologies] = useState(style.technologiesStartPosition);
    const [node, setNode] = useState({ value: null });


    useEffect(() => {
        // selecciono nodo
        node.value = document.querySelector(`.${classTechnologies}`);

        // remueve clase y evento
        const handler = () => {
            node.value.classList.remove(`${classTechnologies}`);
            node?.value?.removeEventListener('mouseenter', handler);
        }
        // agregar evento
        node?.value?.addEventListener('mouseenter', handler);

        // elminar evento
        return () => {
            node?.value?.removeEventListener('mouseenter', handler);
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
                                    <div className={`bg-indigo-600 text-xs leading-none py-1 text-center text-white transition-all duration-1000 delay-1000 w-${result}`}>
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
