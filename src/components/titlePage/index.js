
export default function TitlePage({ titlePortada, contentPortada }) {

    const stripe = `border-l-8 border-primary pl-5`;

    return (
        <section className={`${stripe} my-10 md:my-40 md:max-w-sm`}>
            <h1 className='text-primary dark:text-primary font-bold mb-4 w-min'>{titlePortada}</h1>
            <p>{contentPortada}</p>
        </section>
    )
}
