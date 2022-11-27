import Image from 'next/image'

export default function ({ imageSrc, title, technologies, description }) {
    return (
        <>
            <li className="py-3 md:py-8 rounded border hover:border-primary hover:shadow-lg hover:shadow-indigo-500/40 transition duration-300">
                <figure className="mb-5 opacity-90">
                    <Image
                        src={
                            imageSrc
                                ? imageSrc
                                : 'https://blog.aulaformativa.com/wp-content/uploads/2016/08/ventajas-optimizacion-de-codigo-codigo-fuente-limpio.jpg'
                        }
                        alt=""
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="top"
                        // 16/9 es el formato de origen de la imagen
                        width={3}
                        height={1}
                        quality={100}
                        priority={true}
                    />
                </figure>
                <div className="px-3 md:px-8 grid gap-2">
                    <h3 className="line-clamp-1"> {title} </h3>
                    <ul className="hidden sm:grid sm:justify-start sm:gap-3 sm:grid-flow-col">
                        {technologies?.map((tech, key) => (
                            <li
                                key={key}
                                className="text-white text-xs font-medium truncate px-2 py-1 bg-gray-500 rounded-full"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                    <p className="line-clamp-3">{description}</p>
                </div>
            </li>
        </>
    )
}
