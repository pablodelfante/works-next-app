import style from './portada.module.scss';

export default function Portada({ titlePortada, iconoPortada, contentPortada }) {

    return (
        <div className={style.portada}>
            <div className='flex pb-4'>
                <h1>{titlePortada}</h1>
                {iconoPortada}
            </div>


            <p>{contentPortada}</p>
        </div>
    )
}
