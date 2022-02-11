
import Button from 'components/button';
import Image from 'next/image';

export default function About() {

    return (
        <>
            {/* acerca de mi general */}
            <section className='my-20 lg:my-40'>

                <div className='grid xl:grid-cols-2 gap-10'>
                    <div>

                        <h2 className='mb-5'>About this site</h2>
                        <p className='mb-5'>
                            Born from the idea of showing who I am, show and expose! The aim is to find something easy that works with good performance.
                        </p>
                        <p className='mb-5'>How did I do this web?</p>
                        <Button href='/portfolio/6025b8ae31c60c396885113c'>See project</Button>

                    </div>
                    <div className='pointer-events-none'>
                        {/* <img src='https://media.giphy.com/media/xT1Ra7uxTuOssARKda/giphy.gif' alt='sin img' className='h-full'></img> */}
                        <Image
                            className='h-full'
                            src={'https://media.giphy.com/media/xT1Ra7uxTuOssARKda/giphy.gif'}

                            alt='no image provided'
                            layout={'responsive'}
                            objectFit={'cover'}
                            width={100}
                            height={70}
                            priority
                        />
                        {/* <Image width='auto' src={`/giphy.webp`} alt='no image provided'/> */}
                    </div>
                </div>
            </section>
        </>

    )
}
