

export default function Portada({ titlePortada, iconoPortada, contentPortada }) {

    return (
        <div className='portada py-10 md:py-24 md:pb-40 md:max-w-sm'>
            <div className='flex pb-4'>
                <h1>{titlePortada}</h1>
                {iconoPortada}
            </div>


            <p>{contentPortada}</p>
        </div>
    )
}
