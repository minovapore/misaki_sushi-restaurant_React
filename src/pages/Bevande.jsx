import MainLayout from "../layout/MainLayout";
import bevandeBanner from '../assets/img/bevande banner.png';
import CardsBevande from "../CardsBevande";

export default function Bevande(){
    return(
     <MainLayout>
        <div className="xl:w-11/12 md:w-11/12 w-11/12 mx-auto my-5">
           <img className="inset-0 object-cover" src={bevandeBanner} alt="" />
        </div>
     <CardsBevande/>
     </MainLayout>
    );
}