import Header from "./Header";
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
            <main className='px-5 md:px-72'>
            {children}
            </main>

            {/* FOOTER */}
            <Footer/>
            
            
        </div>
    )
}
