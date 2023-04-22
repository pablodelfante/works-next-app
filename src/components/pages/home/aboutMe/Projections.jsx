import Terminal from 'components/Terminal'

export default function WhoIam() {
    return (
        <div className="grid justify-center gap-8">
            <h3>Proyecciones</h3>
            <div className="lg:w-[40em] ">
                <Terminal init="projections">
                    <p className="mb-8 text-white">
                        Estoy interesado en pilas como JAM, tecnologías como PWA, serverless productos, IA y otros. Esto no quiere decir que no
                        considere otros formas
                    </p>
                    <p className="text-white">
                        En mi opinión, estas herramientas pueden ayudar a mejorar la experiencia del usuario para crear sistemas para mejorar la vida
                        de las personas. Me emociona aceptar retos, mejorar mis habilidades como profesional y ayudar a las personas
                    </p>
                </Terminal>
            </div>
        </div>
    )
}
