import Layout from 'components/template'
import Container from 'components/layouts/Container'

export default function p404() {
    return (
        <Layout>
            <Container>
                <h1 className="mt-5">Not found</h1>
                <h4 className="mt-5">Sorry i cant find this page.</h4>
            </Container>
        </Layout>
    )
}
