import Header from "./header";
import Footer from './Footer'





export default function Layout(props) {
    const {children} = props;
    const classPersonalBlog = `personal-blog | container m-auto md:w-8/12`;

    return (
        <div 
        className={classPersonalBlog}>
            {/* HEADER */}
            <Header/>

            {/* CONTENIDO PRINCIPAL */}
            <main>
            {children}
            </main>

            {/* FOOTER */}
            <Footer/>
            
            
        </div>
    )
}
