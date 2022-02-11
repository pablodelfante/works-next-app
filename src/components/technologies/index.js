
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
                        <h2>About me... Who am I?</h2>
                        <p className='font-extralight block mb-5'>...Who am I?</p>

                        <p className='mb-5'>
                            I am a graphic designer and I am currrently studying web design. I have been passionate about technology since I was a curious and active child. I love sharing, learning and helping others as well as meeting new people!
                        </p>
                        <p className=''>
                            I love sorting out problems and I really enjoy being analytic and creative!
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
                            <p>
                                I am interested in stacks like jam, technologies like PWA, and others. This does not mean that I don't consider other forms such as UX UI.
                            </p>
                            <p>
                            In my opinion these tools can help improve the user experinece to create systems to enhance people lives. I am excited about accepting challenges, improving my skills as a professional and helping people
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
