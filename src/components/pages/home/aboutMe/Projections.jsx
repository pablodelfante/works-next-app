import Terminal from 'components/Terminal'

export default function WhoIam() {
    return (
        <div className="grid justify-center gap-8">
            <h3>Projections</h3>
            <div className="lg:w-[40em] ">
                <Terminal init="projections">
                    <p className="mb-8 text-white">
                        I am interested in a stacks like JAM, technologies like PWA, serverless
                        products, AIs and others. This does not mean that I don't consider other
                        forms.
                    </p>
                    <p className="text-white">
                        In my opinion these tools can help improve the user experinece to create
                        systems to enhance people lives. I am excited about accepting challenges,
                        improving my skills as a professional and helping people
                    </p>
                </Terminal>
            </div>
        </div>
    )
}
