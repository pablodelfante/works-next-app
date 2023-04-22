import Terminal from 'components/Terminal'
import BlobV2 from 'components/BlobV2'
import maskPng from './mask-done.png'
import { useRef } from 'react'

/* FIXME: quedó sin terminar esta sección */
export default function WhoIam() {
    console.log()
    // example use ref with react
    const maskedElement = useRef(null)
    return (
        <div className="grid justify-center grid-flow-row md:grid-flow-col gap-16">
            <div>
                <img className="max-w-sm" src={maskPng.src} alt="" ref={maskedElement} />
                {/*
                 TODO: to solve
                 <BlobV2
                        blobConfig={{
                            color: 'hwb(243deg 30% 1%)',
                            maskedElement: maskedElement.current,
                        }}
                        canvasStyles={{ width: '400px' }}
                    /> */}
            </div>
            <div>
                <div className="grid gap-6 lg:w-[35em]">
                    <h3>¿Quién soy?</h3>
                    <Terminal init="quiensoy">
                        <p className="mb-5 text-white">
                            Soy diseñador gráfico y actualmente estoy estudiando diseño web. Soy un apasionado de la tecnología desde que era un niño
                            curioso y activo. ¡Me encanta compartir, aprender y ayudar a los demás, así como conocer gente nueva!
                        </p>
                        <p className="text-white">¡Me encanta resolver problemas y disfruto mucho siendo analítico y creativo!</p>
                    </Terminal>
                </div>
            </div>
        </div>
    )
}
