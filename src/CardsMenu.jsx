import CardMenu from "./pages/CardMenu";
import { SUSHI_TYPES } from "./data";

export default function CardsMenu(){
    return(
        <ul className="grid grid-col-1 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
            {SUSHI_TYPES.map((item)=>(<CardMenu key={item.name} {...item}/>))}
        </ul>
    );
}