

export default function Portada({titlePortada, iconoPortada, contentPortada}) {

    return (
        <div className='portada py-10 md:py-24 md:pb-40 md:w-6/12'>
            <h2 className='text-4xl inline-flex pb-4'>{titlePortada}{iconoPortada}</h2>
            
            <p>{contentPortada}</p>
        </div>
    )
}
