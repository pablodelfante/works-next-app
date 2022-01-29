import Image from 'next/image';

export default function Card({ work }) {
    return (
        <>
            <li className="md:py-8 rounded lg:shadow-md lg:hover:shadow-xl transition-shadow duration-300">
                {/* agregar imagen aca */}
                <div className="mb-5 opacity-90">
                    <Image
                        src={
                            work?.image
                                ? work.image.formats.medium.url
                                : "https://blog.aulaformativa.com/wp-content/uploads/2016/08/ventajas-optimizacion-de-codigo-codigo-fuente-limpio.jpg"
                        }
                        alt=""
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="top"
                        // 16/9 es el formato de origen de la imagen
                        width={3}
                        height={1}
                        quality={100}
                    />
                </div>
                {/* work.image.formats.small.url */}
                {/* ------- */}
                <div className="md:px-8">
                    <h3 className="line-clamp-1"> {work?.title} </h3>
                    <ul className="hidden sm:grid sm:justify-start sm:gap-3 sm:grid-flow-col">
                        {work?.tecnologies.map((tech, key) => (
                            <li
                                key={key}
                                className="text-primary text-sm truncate"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                    <p className="line-clamp-3">{work?.description}</p>
                </div>
            </li>
        </>
    );
}
