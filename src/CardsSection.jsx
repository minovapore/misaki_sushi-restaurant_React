import HomeSection1 from "./components/HomeSection1";
import { CARDS } from "./data";

export default function CardsSections(){
    return(
        <ul className="flex justify-center gap-20">
            {CARDS.map((item)=>(<HomeSection1 key={item.title} {...item}/>))}
        </ul>
    );
}