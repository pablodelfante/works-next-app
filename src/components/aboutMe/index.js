import { useEffect } from 'react'
import { useState } from 'react'
import style from './technologies.module.css'
import Image from 'next/image'

export default function () {
    const [avatar] = useState({ src: '/img/home/profile.jpg' })

    useEffect(() => {
        const options = {
            reset: true,
            delay: 300,
            rotate: {
                x: 0,
                y: 0,
                z: -45,
            },
        }
        ScrollReveal().reveal('.lapabla-reveal', options)
    }, [])

    return (
        <>
            <section
                className={`w-full mb-40 grid grid-flow-row xl:grid-cols-2 gap-10`}
            >
                <figure className="grid grid-flow-row auto-rows-max gap-5 border-l">
                    <picture className="">
                        <Image
                            src={avatar.src}
                            alt="sin image"
                            layout={'responsive'}
                            width={1}
                            height={1.3}
                            quality={100}
                            objectFit={'cover'}
                            objectPosition={'left center'}
                        />
                    </picture>
                    <figcaption className="pl-8 pb-8">
                        {/* titulo */}
                        <h2>About me... Who am I?</h2>
                        <p className="font-extralight block mb-5">
                            ...Who am I?
                        </p>

                        <p className="mb-5">
                            I am a graphic designer and I am currrently studying
                            web design. I have been passionate about technology
                            since I was a curious and active child. I love
                            sharing, learning and helping others as well as
                            meeting new people!
                        </p>
                        <p className="">
                            I love sorting out problems and I really enjoy being
                            analytic and creative!
                        </p>
                    </figcaption>
                </figure>

                <div className={`${style.customShadow} lapabla-reveal`}>
                    <div className="bg-white dark:bg-black grid gap-2 p-8">
                        <h3>Projections</h3>
                        <div className="grid gap-5">
                            <p>
                                I am interested in a stacks like JAM,
                                technologies like PWA, serverless products, AIs
                                and others. This does not mean that I don't
                                consider other forms.
                            </p>
                            <p>
                                In my opinion these tools can help improve the
                                user experinece to create systems to enhance
                                people lives. I am excited about accepting
                                challenges, improving my skills as a
                                professional and helping people
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
