

export default function Portada({titlePortada, iconoPortada, contentPortada}) {

    return (
        <div className='portada py-10 px-10 md:w-6/12'>
            <h2 className='text-4xl inline-flex pb-4'>{titlePortada}{iconoPortada}</h2>
            
            <p>{contentPortada}</p>
        </div>
    )
}
