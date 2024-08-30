import HomeSection1 from "./components/HomeSection1";
import { CARDS } from "./data";

export default function CardsSections(){
    return(
        <ul className="grid grid-col-1 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
            {CARDS.map((item)=>(<HomeSection1 key={item.title} {...item}/>))}
        </ul>
    );
}