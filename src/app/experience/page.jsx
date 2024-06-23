import Layout from 'components/template'
import Container from 'components/layouts/Container'
import Xps from 'components/Xps'
import main from 'app/experience/main.png'

const XpPage = () => {
    const xps = [
        {
            title: 'vexels',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Culpa, praesentium. Illum libero possimus animi? Velit quia aperiam vero nostrum reprehenderit sapiente, molestiae repudiandae nihil quidem sequi temporibus ipsum aut dolorum? ',
            responsabilities: ['some', 'some2-123', 'nj23ke', '3e23e23e23e', '23eio32eio23', 'oim2i3mei2'],
            skills: ['some', 'some2-123', 'nj23ke', '3e23e23e23e', '23eio32eio23', 'oim2i3mei2', '3e23e23e23e', '23eio32eio23'],
            projects: ['some', 'some2-123', 'nj23ke', '3e23e23e23e', '23eio32eio23', 'oim2i3mei2'],
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
