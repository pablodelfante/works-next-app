import Image from 'next/image'
import Terminal from 'components/Terminal'
import BlobV2 from 'components/BlobV2'
import TypeAnimation from 'components/TypeAnimation'

const Header = () => {
    return (
        <div className="grid lg:grid-cols-[1fr_1fr] items-end">
            <div className="grid gap-4 pb-16">
                <h1 className="font-bold text-[10rem]">Hi</h1>
                <TypeAnimation
                    className="font-bold text-primary text-4xl md:text-5xl xl:text-6xl dark:text-primary"
                    sequence={['Welcome!', 2500, 'new Wel...', 1000, 'new Welcome();', 1000, '<Welcome/>', 1500]}
                    wrapper="h2"
                    cursor={true}
                    repeat={Infinity}
                />
                <div className="md:w-[24em]">
                    <Terminal init="hello">In this section I have some works that I would like to share with you!</Terminal>
                </div>
            </div>
            <div className="hidden lg:grid">
                <div className="grid justify-center col-span-full row-span-full">
                    <BlobV2
                        blobConfig={{
                            color: 'hwb(243deg 30% 1%)',
                        }}
                        canvasStyles={{ width: '400px' }}
                    />
                </div>
                <figure className="[ figure-home ] grid justify-center items-end col-span-full row-span-full">
                    <Image
                        src="/img/home/[removed_ai]serious.png"
                        alt="image on home page"
                        width={350}
                        height={600}
                        priority={true}
                        quality={100}
                        className="drop-shadow-[0_0px_40px_rgba(0,0,0,0.30)]"
                    />
                </figure>
            </div>
        </div>
    )
}

export default Header
