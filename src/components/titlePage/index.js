import Blob from "components/blob";


export default function TitlePage({ titlePortada, contentPortada }) {

    const stripe = `border-l-[0.8rem] border-primary pl-5`;

    return (
        <section className="my-10 md:my-30 grid lg:grid-cols-[1.5fr_1fr] items-center">
            <section className={`${stripe} md:max-w-sm h-min`}>
                <h1 className='text-primary dark:text-primary font-bold mb-4 lg:w-min'>{titlePortada}</h1>
                <p className="text-xl font-light">{contentPortada}</p>
            </section>
            <aside className="hidden lg:block">
                <Blob/>
            </aside>
        </section>
    )
}
