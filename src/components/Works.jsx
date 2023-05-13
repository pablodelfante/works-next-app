import Link from 'next/link'
import Card from 'components/Card'

function Works({ works = null }) {
    const draftControl = (draft) => process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' || draft !== 'DRAFT'

    const worksAvailablesToRender = works.filter((work) => true)
    return (
        <>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch">
                {/* si no hay works */}

                {!works && (
                    <p>
                        oops! I don't find works, sure i am on maintenance or break something, sorry😥. If you can write me! pablodelfantexp@gmail.com
                    </p>
                )}

                {worksAvailablesToRender?.map(({ id, image: { url: imageUrl }, title, description, tags }) => (
                    <Link href={`/portfolio/${id}`} key={id}>
                        {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                        <div className="grid">
                            <Card imageSrc={imageUrl} title={title} tags={tags} description={description} />
                        </div>
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default Works
