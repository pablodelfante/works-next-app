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
                <img
                    className="max-w-sm"
                    src={maskPng.src}
                    alt=""
                    ref={maskedElement}
                />
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
                <div className="lg:w-[35em]">
                    <Terminal init="whoIam">
                        <p className="mb-5 text-white">
                            I am a graphic designer and I am currrently studying
                            web design. I have been passionate about technology
                            since I was a curious and active child. I love
                            sharing, learning and helping others as well as
                            meeting new people!
                        </p>
                        <p className="text-white">
                            I love sorting out problems and I really enjoy being
                            analytic and creative!
                        </p>
                    </Terminal>
                </div>
            </div>
        </div>
    )
}
