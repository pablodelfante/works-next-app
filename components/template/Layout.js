import Header from "./Header";
import Footer from './Footer'




export default function Layout(props) {
    const {children} = props;
    const classPersonalBlog = `personal-blog px-5 lg:px-80`;
    const classMain = 'xl:container xl:mx-auto xl:w-8/12 2xl:w-5/12';

    return (
        <div 
        className={classPersonalBlog}>
            {/* HEADER */}
            <Header/>

            {/* CONTENIDO PRINCIPAL */}
            <main className={classMain}>
            {children}
            </main>

            {/* FOOTER */}
            <Footer/>
            
            
        </div>
    )
}
