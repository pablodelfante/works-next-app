
import { contentTechnologies } from '../../utils/contentTechnologies';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './technologies.module.scss';

export default function technologies() {
    // creo estado para mantener section
    const [section, setSection] = useState();

    // escucha para borrar clase al pasar por arriba
    const handler = (e) => {
        section.classList.remove(`${style.technologiesStartPosition}`);
        console.log(section)
    }

    useEffect(() => {
        // selecciono nodo
        const node = document.querySelector(`.${style.technologiesStartPosition}`);
        // seteo nodo como estado
        setSection(node);
        // agrego eventos
        section.addEventListener('mouseenter', handler);
        // limpieza o sanitización
        return () => {
            section.removeEventListener('mouseenter', handler);
        }
    }, [])


    return (
        <>
            {/* contenedor con barras */}
            <section className={`${style.technologiesStartPosition} w-full lg:w-6/12 my-20 group`}>
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
                                <div class="shadow w-full bg-grey-light">
                                    <div class={`bg-indigo-600 text-xs leading-none py-1 text-center text-white w-${result}`}>
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
