import Blob from "components/blob";
import BlobV2 from "components/blob/blobV2";


export default function TitlePage({ titlePortada, contentPortada }) {

    const stripe = `border-l-8 border-primary pl-5`;

    return (
        <section className="my-10 md:my-40 grid grid-cols-[2fr_1fr] items-center">
            <section className={`${stripe} md:max-w-sm h-min`}>
                <h1 className='text-primary dark:text-primary font-bold mb-4 w-min'>{titlePortada}</h1>
                <p>{contentPortada}</p>
            </section>
            <aside>
                {/* <Blob /> */}
                <BlobV2/>
            </aside>
        </section>
    )
}
