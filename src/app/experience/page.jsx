import Layout from 'components/template'
import Container from 'components/layouts/Container'
import Xps from 'components/Xps'
import AnimatedBlobWithStroke from 'components/AnimatedBlobWithStroke'

const XpPage = () => {
    return (
        <Layout>
            <div className="grid gap-24 my-24 overflow-clip">
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
                                <Xps />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default XpPage
