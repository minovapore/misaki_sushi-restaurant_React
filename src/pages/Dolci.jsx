import './Dolci.css';
import dolciBanner from '../assets/img/dolci banner.png';
import MainLayout from '../layout/MainLayout';
import CardsDolci from '../CardsDolci';

export default function Dolci(){
    return(
        <MainLayout>
            <div className="xl:w-11/12 md:w-11/12 w-11/12 mx-auto my-5">
               <img className="dolci-banner-img inset-0 object-cover" src={dolciBanner} alt="" />
            </div>
        <CardsDolci/>
        </MainLayout>
    );
}