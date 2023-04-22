import Link from 'next/link'
import Card from 'components/Card'

function Works({ works = null }) {
    const draftControl = (draft) => process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' || draft !== 'DRAFT'
    const worksAvailablesToRender = works.filter((work) => draftControl(work.stage))
    return (
        <>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-stretch">
                {/* si no hay works */}

                {!works && (
                    <p>
                        ¡ups! No encuentro obras, seguro estoy en mantenimiento o romper algo, lo siento 😥. Si puedes escribeme!
                        pablodelfantexp@gmail.com
                    </p>
                )}

                {worksAvailablesToRender?.map(({ id, image: { url: imageUrl }, title, description, tags }) => (
                    <Link href={`/portfolio/${id}`} key={id}>
                        {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                        <a className="grid">
                            <Card imageSrc={imageUrl} title={title} tags={tags} description={description} />
                        </a>
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default Works
