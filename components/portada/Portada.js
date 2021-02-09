

export default function Portada(props) {

    // desestructurar props
    const { title, icon, content } = props;
    return (
        <div className='py-10 px-10 md:w-6/12'>
            <h2 className='text-4xl inline-flex pb-8'>{title}{icon}</h2>
            <p>{content}</p>
        </div>
    )
}
