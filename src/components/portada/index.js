import style from './portada.module.scss';

export default function Portada({ titlePortada, iconoPortada, contentPortada }) {

    return (
        <div className={style.portada}>
            <div className='grid grid-flow-col auto-cols-min justify-start items-center gap-5 pb-4'>
                <h1 className='font-bold m-0 p-0'>{titlePortada}</h1>
                {iconoPortada}
            </div>


            <p>{contentPortada}</p>
        </div>
    )
}
