import Link from 'next/link'
import Card from 'components/Card'

function Works({ works = null }) {
    const draftControl = (draft) =>
        process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' || draft !== 'DRAFT'
    return (
        <>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch">
                {/* si no hay works */}

                {!works && (
                    <p>
                        oops! I don't find works, sure i am on maintenance or
                        break something, sorry😥. If you can write me!
                        pablodelfantexp@gmail.com
                    </p>
                )}

                {works &&
                    works?.map(
                        ({
                            stage,
                            id,
                            image: { url: imageUrl },
                            title,
                            description,
                            tags,
                        }) => (
                            <>
                                {draftControl(stage) && (
                                    <Link href={`/portfolio/${id}`} key={id}>
                                        <a className="grid">
                                            <Card
                                                imageSrc={imageUrl}
                                                title={title}
                                                tags={tags}
                                                description={description}
                                            />
                                        </a>
                                    </Link>
                                )}
                            </>
                        )
                    )}
            </ul>
        </>
    )
}

export default Works
