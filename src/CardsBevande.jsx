import { BEVANDE, BIRRE, CHAMPAGNE, VINI_BIANCHI, VINI_ROSSI } from "./data";
import CardBevande from "./pages/CardBevande";

export default function CardsBevande(){
    return(
        <>
        {/* BIBITE */}
        <div>
            <div className="w-11/12 mx-auto mb-5">
                <h1 className="text-8xl font-bold design-underline text-black">BIBITE</h1>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
                {BEVANDE.map((item)=>(<CardBevande key={item.id} {...item}/>))}
            </ul>
        </div>
        {/* BIRRE */}
        <div>
        <div className="w-11/12 mx-auto mb-5 my-10">
            <h1 className="text-8xl font-bold design-underline text-black">BIRRE</h1>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
            {BIRRE.map((item)=>(<CardBevande key={item.id} {...item}/>))}
        </ul>
        </div>
        {/* VINI BIANCHI */}
        <div>
        <div className="w-11/12 mx-auto mb-5 my-10">
            <h1 className="text-8xl font-bold design-underline2 text-black">VINO BIANCO</h1>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
            {VINI_BIANCHI.map((item)=>(<CardBevande key={item.id} {...item}/>))}
        </ul>
        </div>
        {/* VINO ROSSO */}
        <div>
        <div className="w-11/12 mx-auto mb-5 my-10">
            <h1 className="text-8xl font-bold design-underline2 text-black">VINO ROSSO</h1>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
            {VINI_ROSSI.map((item)=>(<CardBevande key={item.id} {...item}/>))}
        </ul>
        </div>
        {/* CHAMPAGNE */}
        <div>
        <div className="w-11/12 mx-auto mb-5 my-10">
            <h1 className="text-8xl font-bold design-underline2 text-black">CHAMPAGNE</h1>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-11/12 mx-auto xl:gap-10 md:gap-5">
            {CHAMPAGNE.map((item)=>(<CardBevande key={item.id} {...item}/>))}
        </ul>
        </div>
     </>
    );
}