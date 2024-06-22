import Layout from 'components/template'
import Container from 'components/layouts/Container'
import main from 'app/experience/main.png'

const Xp = () => {
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
                <div className="grid grid-cols-2 justify-center">
                    <div className="border-r border-dashed m-4"></div>
                    <div>
                        <div className="grid">
                            <h3>Title</h3>
                            <h4>Subtitle</h4>
                            <ul>
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque natus numquam magni asperiores iusto,
                                    laboriosam nemo consectetur reprehenderit ex suscipit debitis, amet aliquam, non obcaecati hic corporis at
                                    quisquam.
                                </li>
                                <li>aaaa</li>
                                <li>aaaa</li>
                            </ul>
                            <h4>Subtitle</h4>
                            <ul>
                                <li>aaaa</li>
                                <li>aaaa</li>
                                <li>aaaa</li>
                            </ul>
                        </div>
                        <div className="grid">
                            <h3>Title</h3>
                            <h4>Subtitle</h4>
                            <ul>
                                <li>aaaa</li>
                                <li>aaaa</li>
                                <li>aaaa</li>
                            </ul>
                            <h4>Subtitle</h4>
                            <ul>
                                <li>aaaa</li>
                                <li>aaaa</li>
                                <li>aaaa</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Xp
