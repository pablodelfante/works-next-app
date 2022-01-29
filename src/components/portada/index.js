
export default function Portada({ titlePortada, iconoPortada, contentPortada }) {

    const stripe = `border-l-8 border-primary pl-5`;

    return (
        <section className={`${stripe} my-10 md:my-40 md:max-w-sm`}>
            <div className='grid grid-flow-col auto-cols-min justify-start items-center gap-5 pb-4'>
                <h1 className='text-primary font-bold m-0 p-0'>{titlePortada}</h1>
            </div>

            <p>{contentPortada}</p>
        </section>
    )
}
