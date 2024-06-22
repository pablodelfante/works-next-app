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
        </Layout>
    )
}

export default Xp
