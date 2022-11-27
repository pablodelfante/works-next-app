import Card from 'react-animated-3d-card'
import Image from 'next/image'

export default function ({ work, imageSrc, title, technologies, description }) {
    return (
        <>
            <Card
                style={{
                    backgroundColor: 'transparent',
                    width: 'auto',
                    height: 'auto',
                    cursor: 'pointer',
                    border: '1px solid white',
                }}
                borderRadius="3px"
                onClick={() => console.log('Card clicked')}
            >
                <li className="py-3 md:py-8 ">
                    {/* agregar imagen aca */}
                    <figure className="mb-5 opacity-90">
                        <Image
                            src={
                                work?.url_image
                                    ? work.url_image
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
                        {/* <img src={work?.url_image} alt="" /> */}
                    </figure>
                    {/* work.image.formats.small.url */}
                    {/* ------- */}
                    <div className="px-3 md:px-8 grid gap-2">
                        <h3 className="line-clamp-1"> {work?.title} </h3>
                        <ul className="hidden sm:grid sm:justify-start sm:gap-3 sm:grid-flow-col">
                            {work?.technologies?.map((tech, key) => (
                                <li
                                    key={key}
                                    className="text-white text-xs font-medium truncate px-2 py-1 bg-gray-500 rounded-full"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <p className="line-clamp-3">{work?.description}</p>
                    </div>
                </li>
            </Card>
        </>
    )
}
