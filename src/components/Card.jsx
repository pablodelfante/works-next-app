import Image from 'next/image'

import Tag from 'components/Tag'

export default function ({ imageSrc, title, tags: tagsInput, description }) {
    const tags = tagsInput.slice(0, 6)
    const tagsWasSliced = tagsInput.length > 6
    return (
        <div className="pb-8 rounded-lg overflow-clip [ shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-indigo-500/40 ] [ dark:shadow-sm dark:hover:shadow-lg dark:hover:shadow-indigo-500/40 dark:transition dark:duration-300 ] transition duration-300 [ bg-white bg-opacity-5 hover:bg-opacity-10 backdrop-blur-lg ]">
            <figure className="mb-5 opacity-90">
                <Image
                    src={
                        imageSrc
                            ? imageSrc
                            : 'https://blog.aulaformativa.com/wp-content/uploads/2016/08/ventajas-optimizacion-de-codigo-codigo-fuente-limpio.jpg'
                    }
                    alt="card image"
                    width={700}
                    height={400}
                    quality={80}
                    priority={false}
                />
            </figure>
            <div className="px-3 md:px-8 grid gap-2">
                <h3 className="line-clamp-1"> {title} </h3>
                <ul className="hidden sm:grid sm:justify-start sm:gap-3 sm:grid-flow-col">
                    {tags?.map((tech, key) => (
                        <li key={key}>
                            <Tag>{tech}</Tag>
                        </li>
                    ))}
                    {tagsWasSliced && <li className="opacity-20">...</li>}
                </ul>
                <p className="line-clamp-3">{description}</p>
            </div>
        </div>
    )
}
