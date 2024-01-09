import Terminal from 'components/Terminal'
import maskPng from './mask-done.png'
import Image from 'next/image'
import TypeAnimation from 'components/TypeAnimation'

export default function WhoIam() {
    return (
        <div className="grid justify-center md:grid-cols-[.5fr_1fr] xl:grid-cols-[25em_.8fr] gap-16 overflow-clip">
            <div className="flex justify-center">
                <Image
                    className="object-contain fade-in-from-left "
                    src={maskPng.src}
                    quality={100}
                    alt="who i am masked image"
                    width={400}
                    height={400}
                    priority={false}
                />
            </div>
            <div>
                <div className="grid gap-6">
                    <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl fade-in-from-right">
                        <span>I'm...</span>
                        <TypeAnimation
                            style={{ whiteSpace: 'pre-line', height: '2.5em', display: 'block' }}
                            className="text-primary dark:text-primary leading-[1.2em]"
                            sequence={[
                                'web\n designer 🧑‍💻🖌',
                                500,
                                'graphic\n designer 🎨👨‍🏫',
                                500,
                                'full stack web\n developer 🤖🌆',
                                500,
                                'creative\n dev 🪐🚀',
                                500,
                                'a\n beginner 🌊🏊‍♂️',
                                500,
                                'Queen\n lover 👑🎸',
                                500,
                                'Team 🧉👨‍🦱 \n and ☕️☕️',
                                500,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h3>
                    <div className='fade-in-from-right'>
                        <Terminal init="whoIam">
                            <p className="mb-5 text-white">
                                I am full stack developer, graphic designer and digital designer. I have been passionate about technology since I was a
                                curious and active child. I love sharing, learning and helping others as well as meeting new people!
                            </p>
                            <p className="text-white">I love sorting out problems and I really enjoy being analytic and creative!</p>
                        </Terminal>
                    </div>
                </div>
            </div>
        </div>
    )
}
