import CardMenu from "./pages/CardMenu";
import { SUSHI_TYPES } from "./data";
import { PRIMI_PIATTI } from "./data";
import { SECONDI_PIATTI } from "./data";


export default function CardsMenu(){
    return(
      <>
      {/* SUSHI */}
        <div>
            <div className="w-11/12 mx-auto mb-5">
                <h1 className="xl:text-8xl md:text-8xl text-6xl font-bold design-underline text-black">SUSHI</h1>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
            {SUSHI_TYPES.map((item)=>(<CardMenu key={item.id} {...item}/>))}
            </ul>
        </div>
      {/* PRIMI PIATTI */}
        <div>
            <div className="w-11/12 mx-auto mb-5 my-10">
                <h1 className="xl:text-8xl md:text-8xl text-6xl font-bold design-underline2 text-black">PRIMI PIATTI</h1>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
            {PRIMI_PIATTI.map((item)=>(<CardMenu key={item.id} {...item}/>))}
            </ul>
        </div>

        {/* SECONDI PIATTI */}
        <div>
            <div className="w-11/12 mx-auto mb-5 my-10">
                <h1 className="xl:text-8xl md:text-8xl text-6xl font-bold design-underline2 text-black">SECONDI PIATTI</h1>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
            {SECONDI_PIATTI.map((item)=>(<CardMenu key={item.id} {...item}/>))}
            </ul>
        </div>
      </>
    );
}