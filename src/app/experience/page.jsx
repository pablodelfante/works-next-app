import Layout from 'components/template'
import Container from 'components/layouts/Container'
import Xps from 'components/Xps'
import AnimatedBlobWithStroke from 'components/AnimatedBlobWithStroke'

const XpPage = () => {
    const xps = [
        {
            title: '2020 - today - Vexels SA',
            about: 'Vexels is a graphic design platform that caters to a worldwide audience of creatives and merch sellers with high-quality graphic resources. I consider Vexels one of the best experiences that I have had.',
            responsibilities: [
                'Developed and maintained frontend applications',
                'Improved application performance and scalability',
                'Worked with product context applications',
                'Improved SEO',
                'Focused on user experience',
                'Assisted the design team in validating concepts',
                'Helped the team to be fast and unlock tasks',
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
            accomplishments: [
                'Participated in the complete product process, contributing various ideas to build up the products',
                'Involved in the UX process, validating ideas, user flows, components, user targets, and technical approaches',
                'Improved system performance, usability, and maintainability',
                'Enhanced agility and flexibility, unblocking tasks within the team',
                'Facilitated smooth collaboration among design, product, and development teams',
            ],
            projects: ['Vexels platform', 'Back offices', 'Vexels Stores', 'Editor'],
            collaboration: [
                'Participated in product decisions, such as product vision, evaluating user experiences, product trends, and requirements',
                'Shared best practices with the development team',
                'Improved communication skills, shared knowledge, and communicated effectively',
                'Maintained empathy in all situations, considering different perspectives, ideas, and implementations',
                'Motivated and inspired the team, encouraging them to strive for more and surpass themselves',
                'Assisted the team in implementations while keeping in mind the strategic vision',
                'Applied flexibility with timelines, creation processes, and various application areas',
                'Helped resolve conflicts with code, unlocked tasks, and pushed to surpass obstacles and goals',
                'Participated in the delegation process, making it easier',
            ],
        },
        {
            title: '2020 - ORT University',
            about: 'With over 13,000 students, ORT is the most significant private university in Uruguay, chosen by those who seek the best option for studying in the country.',
            responsibilities: [
                'As a professor, carried out the course of web design',
                'Shared knowledge in accordance with the course and provided students with skills for future performance in the field',
                'Presented educational challenges and facilitated learning',
                'Collaborated with other teachers and proposed educational and structural improvements to the course',
                'Created, proposed, and contributed to the development of materials, tests, and challenges in various evaluation stages',
            ],
        },
        {
            title: '2019 - 2020 - Studio 4D',
            about: 'Studio 4D offers different virtual reality experiences created through apps like Unreal Engine and served through web apps with services on the cloud such as AWS.',
            responsibilities: [
                'Worked as a consultant, advising on technologies for frontend migrations',
                'Migrated and implemented React in projects, defined frontend architecture',
                'Maintained and added new features to a Node server project',
                'Maintained communication between the Node server, Unreal Engine, and frontend application using technologies such as WebSockets and WebRTC',
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
            accomplishments: [
                'First React implementation in frontend experiences',
                'Scrum flows, breaking down requirements, providing feedback',
                'Suggested interface flows and variations',
            ],
            projects: ['Frontend experiences', 'Interface experiences', 'Cirrus node server', 'Unreal Engine', 'Design project'],
            collaboration: [
                'Separate the Node monolith and implement the first version of the React client, separating frontend and backend as different projects to facilitate scalability and maintenance.',
                'Introduced new technologies for projects',
                'Helped the team to push processes and projects',
            ],
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
                    <div className="grid grid-cols-[auto_1fr] justify-center lg:w-2/5 lg:m-auto">
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
