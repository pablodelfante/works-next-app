import Head from "next/head";
import Layout from "components/template";

export default () => (
    <Layout>
        <Head>
            <title>not internet connection</title>
        </Head>
        <section className="py-40">
            <h1 className="">You don't have internet connection</h1>
            <h2>Connect to internet and try again! Thanks, Pablo!</h2>
        </section>
    </Layout>
);
