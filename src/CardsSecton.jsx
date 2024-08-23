import CardSection from "./components/CardSection";
import { CARDS } from "./data";

export default function CardsSections(){
    return(
        <ul className="flex justify-center gap-20">
            {CARDS.map((item)=>(<CardSection key={item.title} {...item}/>))}
        </ul>
    );
}