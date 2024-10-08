import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout({children}){
    return(
        <div>
            <Navbar/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
}