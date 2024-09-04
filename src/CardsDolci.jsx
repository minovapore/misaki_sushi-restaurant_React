import { DOLCI } from "./data";
import CardDolci from "./pages/CardDolci";

export default function CardsDolci(){
    return(
        <div>
        {/* <div className="w-11/12 mx-auto mb-5">
            <h1 className="text-8xl font-bold design-underline text-black">SUSHI</h1>
        </div> */}
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
        {DOLCI.map((item)=>(<CardDolci key={item.id} {...item}/>))}
        </ul>
    </div>
    );
}