import Header from "./Header";
import Footer from './Footer'




export default function Layout(props) {
    const {children} = props;
    const classPersonalBlog = `personal-blog px-4 lg:px-80`;
    const classMain = 'xl:container';

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
