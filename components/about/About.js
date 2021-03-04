
import Button from '../button/Button.js';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <section>
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
                        {/* botones */}
                        <div className='grid 2xl:grid-flow-col items-start place-content-start gap-5'>
                            <Button href='/portfolio'>PORTFOLIO</Button>
                            <p>¿como hice esta web?</p>
                            <Button href='portfolio/6025b8ae31c60c396885113c'>VER</Button>
                        </div>


                    </div>
                    <div className='pointer-events-none'>
                        {/* <img src='https://media.giphy.com/media/xT1Ra7uxTuOssARKda/giphy.gif' alt='sin img' className='h-full'></img> */}
                        <Image
                            className='h-full'
                            src={'https://media.giphy.com/media/xT1Ra7uxTuOssARKda/giphy.gif'}
                            alt='sin img'
                            layout={'responsive'}
                            objectFit={'cover'}
                            width={100}
                            height={70}
                        />
                    </div>
                </div>
            </section>


            {/* contenedor con barras */}
            <section className='w-full lg:w-5/12 grid gap-y-5 my-5'>

                <div>
                    <h3>Tecnologías</h3>
                    <em className='font-extralight'>grafican cuán cómodo me siento</em>
                </div>

                <div>
                    <em>Titulo de ejemplo</em>
                    <div className="shadow w-full bg-grey-light">
                        <div className="bg-indigo-700 text-xs leading-none py-1 text-center text-white w-9/12">90%</div>
                    </div>
                </div>
                <div>
                    <em>Titulo de ejemplo</em>
                    <div className="shadow w-full bg-grey-light">
                        <div className="bg-indigo-700 text-xs leading-none py-1 text-center text-white w-5/12">50%</div>
                    </div>
                </div>
                <div>
                    <em>Titulo de ejemplo</em>
                    <div className="shadow w-full bg-grey-light">
                        <div className="bg-indigo-700 text-xs leading-none py-1 text-center text-white w-6/12">60%</div>
                    </div>
                </div>
            </section>
        </>

    )
}
