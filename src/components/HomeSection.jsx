import './HomeSection.css';
import interno from '../assets/img/interno.jpg';
import piatto from '../assets/img/piatto.png';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';


export default function Section(){
    return (
        <>
        <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 xl:my-6 md:my-6 my-6 w-11/12  mx-auto">
           <div className='text-black xl:max-w-4xl xl:my-6 md:max-w-md md:my-3'>
                <h2 className='font-bold xl:text-8xl md:text-6xl text-6xl text-start xl:-ms-2 md:-ms-1'>DESIGN <br /> ED <br /> ELEGANZA</h2>
               <p className='xl:text-3xl md:text-2xl text-3xl text-start my-3'>Spazi riservati, ideali per ogni occasione. Il design contemporaneo di misaki sushi & restaurant, ti accoglie e ti avvolge.</p>
            </div>
            <div className=''>
                <img className='my-3' src={interno} alt="ristorante" />
            </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 xl:my-6 md:my-6 my-6 w-11/12  mx-auto">
        {/* MODALITA' SM */}
            <div className='xl:hidden md:hidden block text-black xl:max-w-4xl xl:my-6 md:max-w-md md:my-3'>
                <h2 className='font-bold xl:text-8xl md:text-6xl text-6xl text-end'>FRESCHEZZA <br /> E <br /> AMORE</h2>
               <p className='xl:text-3xl md:text-2xl text-3xl text-end my-3'>La massima attenzione nello scegliere solo ingredienti freschissimi, osservando rigorosamente tutti gli alti standard di legge.</p>
            </div>
            <div className=''>
                <img className='my-3' src={piatto} alt="piatto" />
            </div>
        {/* MODALITA' MD & XL */}
            <div className='xl:block md:block hidden text-black xl:max-w-4xl xl:my-6 md:max-w-md md:my-3'>
                <h2 className='font-bold xl:text-8xl md:text-6xl text-6xl text-end'>FRESCHEZZA <br /> E <br /> AMORE</h2>
               <p className='xl:text-3xl md:text-2xl text-3xl text-end my-3'>La massima attenzione nello scegliere solo ingredienti freschissimi, osservando rigorosamente tutti gli alti standard di legge.</p>
            </div>
        </div>
        <HomeSection1/>
        <HomeSection2/>
        </>
    );
}