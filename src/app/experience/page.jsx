import Layout from 'components/template'
import Container from 'components/layouts/Container'
import Xps from 'components/Xps'
import main from 'app/experience/main.png'

const XpPage = () => {
    const xps = [
        {
            title: '2020-today Vexels SA ',
            about: 'Vexels is a graphic design platform that caters to a worldwide audience of Creatives and Merch sellers with high-quality graphic resources.',
            responsabilities: [
                'Developed and I have maintained frontend applications',
                'Improve application performance, scalability',
                'Work with product context applications',
                'Improve SEO',
                'Work with user focus',
                'Help design team to validate concepts',
                'Help team to be fast and unlok tasks',
            ],
            skills: [
                'Improve design patterns',
                'Improve readability',
                'Improve scalability',
                'Design thinking',
                'Canvas manipulation',
                'Critical thinking',
                'Improve presentation skills',
                'Creative solutions',
                'sintethics & fast solutions',
                'Consider project targets',
            ],
            accomplishments: [
                'I have been a participant in the complete product process, participated in the design flow on different occasions to contribute with different ideas to build up the products',
                'I have been a participant in UX process, validating ideas, user flows, components, user target, validate technical approaches',
                'Improve system performance, usability, and maintainability',
                'Improve agility, flexibility, unblocking tasks in the team',
                'Help facilitate smooth collaboration among the design, product, and development teams',
            ],
            projects: ['Vexels plattaform', 'Backoffices', 'Vexels Stores', 'Editor'],
            collaboration: [
                'I have been participant on product decisions, such as product vision, evaluating things like user experiences, product trends, and requirements',
                'Share best practices with the development team',
                'Work and improve communication skills, share knowledge, communicate effectively',
                'Be empathetic in all situations, ideas, different perspectives, creativity, perspective points, implementations',
                'Motivate and inspire the team, encouraging them to strive for more and surpass themselves',
                'Help the team in implementations while keeping in mind the strategic vision',
                'Apply flexibility with timelines, creation processes, and different types of application areas',
                'Help resolve conflicts with code, unlock tasks, and push to surpass obstacles and goals',
                'Be participant in the delegation process, I have helped to make this process easier',
            ],
        },
        {
            title: '2020 - ORT university',
            about: 'With over 13,000 students, ORT is the most significant private university in Uruguay, chosen by those who seek the best option for studying in the country.',
            responsabilities: [
                'As a professor, to carry out the course of web design',
                'Share knowledge in accordance with the course and provide students with skills for future performance in the field',
                'Present educational challenges and be a facilitator of learning',
                'Collaborate with other teachers and propose educational and structural improvements to the course',
                'Create, propose, and contribute to the development of materials, tests, and challenges in various evaluation stages',
            ],
        },
        {
            title: 'Studio 4D',
            about: 'Studio 4D offers different experiences of virtual reality created through apps like Unreal Engine and served through web apps with services on the cloud as AWS.',
            responsabilities: [
                'Work as consultant, advise technologies for frontend migrations',
                'Migrate and implement first-time React on projects, define frontend architecture',
                'Maintain and add new features on node server project',
                'Maintain communication between node server, Unreal Engine, and frontend application, using technologies such as WebSockets and WebRTC',
            ],
            skills: [
                'node server',
                'cloudfront',
                'route53',
                'Lambda',
                'EC2',
                'dynamo',
                'S3',
                'webRTC & web sockets',
                'React experience',
                'UX flows',
                'Testing tools as cypress & vitest',
                'Time management',
                'Creativity to solve problems',
            ],
            accomplishments: [
                'First react implementation on frontend experiences',
                'Scrum flows, down requirements, make feedback',
                'Suggest interface flows and variations',
            ],
            projects: ['Frontend experiences', 'Code server', 'Unreal Engine', 'Design project'],
            collaboration: [' New technologies for projects', 'Help team to push process and projects'],
        },
    ]

    return (
        <Layout>
            <div className="grid gap-24 my-24">
                <Container>
                    <div className="grid justify-center">
                        <img width={300} height={200} className="col-start-1 grid- col-end-2 row-start-1 row-end-2 w-64" src={main.src} alt="" />
                        <div className="col-start-1 col-end-2 row-start-1 row-end-2 pl-8">
                            <h1 className="text-center grid">
                                <span className="pl-32 text-8xl lg:text-9xl font-bold">My</span>
                                <span className="text-6xl lg:text-7xl font-bold">Journey</span>
                            </h1>
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className="grid grid-cols-[auto_1fr] justify-center lg:w-2/5 lg:m-auto">
                        <div className="border-r border-dashed m-4"></div>
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
