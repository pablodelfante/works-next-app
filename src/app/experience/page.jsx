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
            title: 'ort',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Culpa, praesentium. Illum libero possimus animi? Velit quia aperiam vero nostrum reprehenderit sapiente, molestiae repudiandae nihil quidem sequi temporibus ipsum aut dolorum? ',
            responsabilities: ['some', 'some2-123', 'nj23ke', '3e23e23e23e', '23eio32eio23', 'oim2i3mei2'],
        },
        {
            title: 'Studio',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Culpa, praesentium. Illum libero possimus animi? Velit quia aperiam vero nostrum reprehenderit sapiente, molestiae repudiandae nihil quidem sequi temporibus ipsum aut dolorum? ',
            responsabilities: ['some', 'some2-123', 'nj23ke', '3e23e23e23e', '23eio32eio23', 'oim2i3mei2'],
        },
    ]

    return (
        <Layout>
            <Container>
                <div className="grid justify-center">
                    <img width={300} height={200} className="col-start-1 grid- col-end-2 row-start-1 row-end-2 w-64" src={main.src} alt="" />
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 pl-8">
                        <h1 className="text-center grid">
                            <span className="pl-32 text-9xl font-bold">My</span>
                            <span className="text-7xl font-bold">Journey</span>
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
        </Layout>
    )
}

export default XpPage
