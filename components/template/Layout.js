import Header from "./header";
import Footer from './Footer'





export default function Layout(props) {
    const {children} = props;
    const classPersonalBlog = `personal-blog`;

    return (
        <div 
        className={classPersonalBlog}>
            {/* HEADER */}
            <Header/>

            {/* CONTENIDO PRINCIPAL */}
            <main className='px-10 md:px-72'>
            {children}
            </main>

            {/* FOOTER */}
            <Footer/>
            
            
        </div>
    )
}
