import Link from 'next/link'
import Card from 'components/Card'

function Works({ works = null }) {
    return (
        <>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch">
                {!works && (
                    <p>
                        oops! I don't find works, sure i am on maintenance or break something, sorry😥. If you can write me! pablodelfantexp@gmail.com
                    </p>
                )}

                {works?.map(({ id, image: { url: imageUrl }, title, description, tags }) => (
                    <li key={id}>
                        <Link href={`/portfolio/${id}`}>
                            <div className="grid">
                                <Card imageSrc={imageUrl} title={title} tags={tags} description={description} />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Works
