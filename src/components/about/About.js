
import Button from '../button/Button.js';
import Image from 'next/image';
import giphy from "./giphy.webp";

export default function About() {


    return (
        <>
            {/* acerca de mi general */}
            <section className='my-40'>

                <div className='grid xl:grid-cols-2 gap-10'>
                    <div>

                        <h2 className='mb-5'>Sobre este sitio</h2>
                        <p className='mb-5'>
                            Nace de la idea de poder mostrar quién soy, <wbr /> que hago y poder presentar trabajos! La idea es encontrar en la simplicidad algo funional y con un buen rendimiento.
                        </p>

                        <p className='mb-5'>¿como hice esta web?</p>
                        <Button href='/portfolio/6025b8ae31c60c396885113c'>VER</Button>

                    </div>
                    <div className='pointer-events-none'>
                        {/* <img src='https://media.giphy.com/media/xT1Ra7uxTuOssARKda/giphy.gif' alt='sin img' className='h-full'></img> */}
                      {/*   <Image
                            className='h-full'
                            src={'https://media.giphy.com/media/xT1Ra7uxTuOssARKda/giphy.gif'}
                            
                            alt='sin img'
                            layout={'responsive'}
                            objectFit={'cover'}
                            width={100}
                            height={70}
                        /> */}
                        <Image src={giphy} alt='no image provided'/>
                    </div>
                </div>
            </section>
        </>

    )
}
