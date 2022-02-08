
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
                        <h2>About me... Who I am?</h2>
                        <p className='font-extralight block mb-5'>...who i am?</p>

                        <p className='mb-5'>
                        I am Pablo! I am graphic design and i am studing web design, i passionate about  technology, since i was a child was curious and active. I love share, learn, help and I like meet new people!
                        </p>
                        <p className=''>
                        I love solve problems! I enjoy so much be analytic and creative!
                        </p>
                    </figcaption>

                </figure>

                {/* TECHNOLOGIES */}
                <div className={`${style.customShadow} lapabla-reveal`}>
                    <div className='bg-white dark:bg-black grid gap-2 p-8'>
                        {/* titulo */}
                        <h3>Technologies</h3>
                        <p className='font-extralight'>Projection</p>

                        {/* lista de tecnologias */}
                        <div className='grid gap-5'>
                            <p >
                            I'm interestesting in stacks like jam, technologies like PWA, and others. This dont mean that expand my knlowledge on other forms like UX UI.</p>
                            <p >
                            I belive in the many tools and wit to get better the user’s experiences to create systems to get best the people’s life. I am excited for challenges, learn, grow up and help the people!                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
