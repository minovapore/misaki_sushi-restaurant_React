import MainLayout from "../layout/MainLayout";
import menùBanner from "../assets/img/menù banner.png";
import './Menu.css';
import CardsMenu from "../CardsMenu";


export default function Menu(){
    return(
        <MainLayout>
            <div className="xl:w-11/12 md:w-11/12 w-11/12 mx-auto my-5">
               <img className="menu-banner-img inset-0 object-cover" src={menùBanner} alt="" />
            </div>
        <CardsMenu/>
        </MainLayout>
    );
}