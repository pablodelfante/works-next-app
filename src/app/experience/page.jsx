'use client'
import Layout from 'components/template'
import Container from 'components/layouts/Container'
import Xps from 'components/Xps'
import AnimatedBlobWithStroke from 'components/AnimatedBlobWithStroke'

const XpPage = () => {
    // TODO: create class to new experience
    const xps = [
        {
            logo: '/img/experiences/vexels-logo.jpg',
            title: 'Frontend developer at Vexels SA',
            date: '2022 - today',
            about: 'Vexels is a graphic design platform that caters to a worldwide audience of creatives and merch sellers with high-quality graphic resources. I consider Vexels one of the best experiences that I have had.',
            responsibilities: [
                'Developed and maintained frontend applications.',
                'Improved SEO, performance, usability, maintainability, and scalability.',
                'Involved in the UX process, validating ideas, user flows, components, user targets, and technical approaches.',
                'Participated in product decisions, such as product vision, evaluating user experiences, product trends, and requirements.',
                'Enhanced agility and flexibility, unblocking tasks within the team.',
                'Shared best practices with the development team: clean code concepts, improved communication skills, motivated, and inspired.',
                'Facilitated smooth collaboration among the areas, the product, design, and development teams.',
            ],
            skills: [
                'Improved design patterns',
                'Enhanced readability',
                'Increased scalability',
                'Design thinking',
                'Canvas manipulation',
                'Critical thinking',
                'Improved presentation skills',
                'Creative solutions',
                'Synthetic & fast solutions',
                'Considered project targets',
            ],
            projects: [
                {
                    name: 'Designer',
                    render: () => (
                        <div className="grid gap-2 h-32 overflow-y-scroll  w-96">
                            <p>
                                Designer is a web application that allows users to create designs using Vexels resources. It is a powerful tool that
                                enables users to create designs for their projects, such as social media posts, t-shirts, and more.
                            </p>
                            <p>
                                As a frontend developer, I participated and was responsible for improving the application's performance, usability for
                                users.
                            </p>
                            <p>Could you check more on the official website</p>
                            <a className="underline" href="https://designer.vexels.com" target="_blank" rel="noopener noreferrer nofollow">
                                designer.vexels.com
                            </a>
                            <iframe
                                width="300"
                                height="200"
                                src="https://www.youtube.com/embed/OAFx-VI24ko?si=Bh7H5eQZ608XqCc6"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    ),
                },
                'Vexels platform',
                'Back offices',
                'Vexels Stores',
            ],
        },
        {
            logo: '/img/experiences/ort.jpg',
            date: '2022 - 2023',
            title: 'Professor at ORT University',
            about: 'With over 13,000 students, ORT is the most significant private university in Uruguay, chosen by those who seek the best option for studying in the country.',
            responsibilities: [
                'As a professor, I carried out the course of web design',
                'Shared knowledge in accordance with the course and provided students with skills for future performance in the field',
                'Presented educational challenges and facilitated learning',
                'Collaborated with other teachers and proposed educational and structural improvements to the course',
                'Created, proposed, and contributed to the development of materials, tests, and challenges in various evaluation stages',
            ],
        },
        {
            logo: '/img/experiences/studio.jpg',
            date: '2021 - 2022',
            title: 'Full stack developer at Studio 4D',
            about: 'Studio 4D offers different virtual reality experiences created through apps like Unreal Engine and served through web apps with services on the cloud such as AWS.',
            responsibilities: [
                'Migrated and implemented React in projects, defined frontend architecture.',
                'Maintained and added new features to a Node server project.',
                'Maintained communication between the Node server, Unreal Engine, and frontend application using technologies such as WebSockets and WebRTC.',
                'Managed Scrum flows, breaking down requirements, providing feedback.',
                'Separate the Node monolith and implement the first version of the React client, separating frontend and backend as different projects to facilitate scalability and maintenance.',
            ],
            skills: [
                'Node server',
                'CloudFront',
                'Route 53',
                'Lambda',
                'EC2',
                'DynamoDB',
                'S3',
                'WebRTC & WebSockets',
                'React experience',
                'UX flows',
                'Testing tools such as Cypress & Vitest',
                'Time management',
                'Creativity to solve problems',
            ],
            projects: ['Frontend experiences', 'Interface experiences', 'Cirrus node server', 'Unreal Engine', 'Design project'],
        },
    ]

    return (
        <Layout>
            <div className="grid gap-24 my-24">
                <Container>
                    <div className="grid justify-center">
                        <div className="col-start-1 grid- col-end-2 row-start-1 row-end-2">
                            <AnimatedBlobWithStroke repetitions={3} distance={5} />
                        </div>

                        <div className="col-start-1 col-end-2 row-start-1 row-end-2 pl-8">
                            <h1 className="text-center grid">
                                <span className="pl-32 text-8xl lg:text-9xl font-bold">My</span>
                                <span className="text-6xl lg:text-7xl font-bold">Journey</span>
                            </h1>
                        </div>
                    </div>
                </Container>

                <div className="-z-10 mr-auto h-0 grid content-center">
                    <div className="overflow-clip translate-y-[100rem]">
                        <div className="translate-x-[-50%]">
                            <AnimatedBlobWithStroke isFillActive={false} repetitions={3} />
                        </div>
                    </div>
                </div>

                <div className="-z-10 ml-auto h-0 grid content-center">
                    <div className="overflow-clip translate-y-80">
                        <div className="translate-x-[50%]">
                            <AnimatedBlobWithStroke isFillActive={false} repetitions={3} />
                        </div>
                    </div>
                </div>

                <Container>
                    <div className="grid gap-2 lg:gap-14 grid-cols-[auto_1fr] justify-center lg:w-[55%] lg:m-auto">
                        <div className="border-r border-dashed border-gray-400 dark:border-white m-4"></div>
                        <div>
                            <div className="grid">
                                <Xps xps={xps} />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default XpPage
